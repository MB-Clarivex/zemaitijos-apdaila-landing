/// <reference path="../pb_data/types.d.ts" />

/**
 * Po sėkmingo įrašo į `contact_inquiries` išsiunčia pranešimą el. paštu.
 *
 * Reikia:
 * 1. PocketBase: Settings → Mail → įjungti SMTP (pvz. Hostinger: smtp.hostinger.com:465, SSL).
 * 2. Aplinkos kintamasis CONTACT_NOTIFY_EMAIL (pvz. info@zemaitijos-apdaila.lt) – kam siųsti.
 *    Galima įrašyti į apps/pocketbase/.env šalia pocketbase binary.
 * 3. Nustatyti „Sender address“ Mail nustatymuose (dažnai tas pats kaip pašto dėžutė).
 *
 * Papildomai: CONTACT_MAIL_FROM, CONTACT_MAIL_FROM_NAME – jei nori kitaip nei meta.senderAddress.
 */

function escapeHtml(s) {
	if (s === null || s === undefined) return "";
	return String(s)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

onRecordAfterCreateSuccess((e) => {
	const record = e.record;
	if (!record) return;

	const notifyTo = ($os.getenv("CONTACT_NOTIFY_EMAIL") || "").trim();
	if (!notifyTo) {
		$app.logger().info(
			"contact_inquiry_email: CONTACT_NOTIFY_EMAIL nenustatytas – pranešimas el. paštu praleistas",
		);
		return;
	}

	const meta = $app.settings().meta;
	const fromAddr = ($os.getenv("CONTACT_MAIL_FROM") || "").trim() || meta.senderAddress || "";
	if (!fromAddr) {
		$app.logger().warn(
			"contact_inquiry_email: nėra siuntėjo adreso – užpildyk Mail settings (Sender address) arba CONTACT_MAIL_FROM",
		);
		return;
	}

	const name = String(record.get("name") ?? "");
	const email = String(record.get("email") ?? "");
	const phone = String(record.get("phone") ?? "");
	const serviceType = String(record.get("service_type") ?? "");
	const projectDescription = String(record.get("project_description") ?? "");
	const id = String(record.get("id") ?? "");

	const fromName = ($os.getenv("CONTACT_MAIL_FROM_NAME") || "").trim() || "Žemaitijos apdaila";

	const html = `
<div style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
  <h2 style="margin-top:0;">Nauja užklausa iš svetainės</h2>
  <p><strong>Įrašo ID:</strong> ${escapeHtml(id)}</p>
  <table style="border-collapse: collapse;">
    <tr><td style="padding: 4px 12px 4px 0;"><strong>Vardas</strong></td><td>${escapeHtml(name)}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0;"><strong>El. paštas</strong></td><td>${escapeHtml(email)}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0;"><strong>Telefonas</strong></td><td>${escapeHtml(phone)}</td></tr>
    <tr><td style="padding: 4px 12px 4px 0;"><strong>Paslauga</strong></td><td>${escapeHtml(serviceType)}</td></tr>
  </table>
  <p><strong>Projektas / žinutė</strong></p>
  <pre style="white-space: pre-wrap; background: #f4f4f5; padding: 12px; border-radius: 8px;">${escapeHtml(projectDescription)}</pre>
  <p style="font-size: 12px; color: #666;">Atsakyti klientui galite tiesiog „Reply“, jei paštas palaiko Reply-To (nuo ${escapeHtml(email)}).</p>
</div>
`.trim();

	const text = [
		`Nauja užklausa (ID: ${id})`,
		`Vardas: ${name}`,
		`El. paštas: ${email}`,
		`Telefonas: ${phone}`,
		`Paslauga: ${serviceType}`,
		"",
		projectDescription,
	].join("\n");

	const subject = `Nauja užklausa iš svetainės — ${name}`;

	try {
		const message = new MailerMessage({
			from: { address: fromAddr, name: fromName },
			to: [{ address: notifyTo }],
			subject,
			html,
			text,
			headers: email ? { "Reply-To": email } : {},
		});

		$app.newMailClient().send(message);
		$app.logger().info(`contact_inquiry_email: išsiųsta į ${notifyTo}`);
	} catch (err) {
		$app.logger().error("contact_inquiry_email: nepavyko išsiųsti", "error", err);
	}
}, "contact_inquiries");
