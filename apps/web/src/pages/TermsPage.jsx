
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Paslaugų teikimo sąlygos — UAB Žemaitijos apdaila</title>
        <meta name="description" content="UAB „Žemaitijos apdaila“ paslaugų teikimo sąlygos ir taisyklės. Susipažinkite su mūsų statybų ir apdailos darbų vykdymo tvarka." />
      </Helmet>

      <section className="section-spacing bg-background min-h-screen">
        <div className="max-w-4xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Grįžti į pradinį puslapį
            </Link>

            <div className="mb-12 border-b border-border pb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Paslaugų teikimo sąlygos
              </h1>
              <div className="text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">UAB „Žemaitijos apdaila“, įm. k. 304173789</p>
                <p>Paskutinį kartą atnaujinta: {currentYear}-03-24</p>
              </div>
            </div>

            <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Bendrosios nuostatos</h2>
                <p>
                  Šios paslaugų teikimo sąlygos (toliau – Sąlygos) nustato UAB „Žemaitijos apdaila“ (toliau – Rangovas) ir fizinio ar juridinio asmens (toliau – Užsakovas) tarpusavio teises, pareigas ir atsakomybę, Rangovui teikiant statybos, remonto, renovacijos ir vidaus bei išorės apdailos paslaugas. Naudodamiesi mūsų paslaugomis, jūs sutinkate su šiomis Sąlygomis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Paslaugų aprašymas</h2>
                <p>
                  Rangovas įsipareigoja atlikti statybos ir apdailos darbus (gipso kartono montavimas, plytelių klojimas, glaistymas, dažymas, stogų ir fasadų įrengimas, terasų statyba ir kt.) pagal iš anksto su Užsakovu suderintą sąmatą ir projektą. Visi darbai atliekami laikantis Lietuvos Respublikoje galiojančių statybos techninių reglamentų (STR) ir standartų.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Užsakymas ir sutartis</h2>
                <p>
                  Darbų apimtys, kaina ir terminai yra įtvirtinami rašytinėje rangos sutartyje arba patvirtintoje sąmatoje. Sutartis įsigalioja nuo jos pasirašymo momento arba kai Užsakovas sumoka sutartą avansą. Papildomi darbai, nenumatyti pirminėje sąmatoje, atliekami tik po atskiro rašytinio ar elektroninio suderinimo su Užsakovu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Kainos ir atsiskaitymas</h2>
                <p>
                  Paslaugų kainos nustatomos individualiai pagal objekto specifiką ir darbų apimtis. Užsakovas įsipareigoja atsiskaityti su Rangovu pagal sutartyje numatytą mokėjimų grafiką. Dažniausiai taikoma praktika: avansinis mokėjimas medžiagoms ir pasiruošimui, tarpiniai mokėjimai už atliktus etapus ir galutinis atsiskatymas po darbų perdavimo-priėmimo akto pasirašymo. Vėluojant atsiskaityti, gali būti skaičiuojami delspinigiai.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Terminai</h2>
                <p>
                  Darbų atlikimo terminai nurodomi sutartyje. Rangovas neatsako už terminų vėlavimą, jei tai įvyko dėl nuo jo nepriklausančių aplinkybių (force majeure), dėl Užsakovo vėlavimo pateikti reikiamas medžiagas (jei jas perka Užsakovas), dėl netinkamai paruošto objekto ar dėl papildomų darbų užsakymo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Užsakovo įsipareigojimai</h2>
                <p>
                  Užsakovas įsipareigoja:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Suteikti Rangovui netrukdomą priėjimą prie objekto sutartu darbo laiku.</li>
                  <li>Užtikrinti elektros energijos ir vandens tiekimą objekte, jei nesutarta kitaip.</li>
                  <li>Laiku atlikti mokėjimus pagal suderintą grafiką.</li>
                  <li>Pateikti visą reikalingą informaciją ir dokumentaciją (projektus, leidimus), būtiną darbams atlikti.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Garantija</h2>
                <p>
                  Visiems atliktiems statybos ir apdailos darbams suteikiama garantija pagal Lietuvos Respublikos Civilinio kodekso ir Statybos įstatymo reikalavimus (paprastai 5 metai matomiems darbams, 10 metų paslėptiems statinio elementams). Garantija netaikoma natūraliam nusidėvėjimui, netinkamam eksploatavimui ar trečiųjų šalių padarytai žalai.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Atsakomybės apribojimas</h2>
                <p>
                  Rangovas neatsako už defektus, atsiradusius dėl nekokybiškų medžiagų, kurias pateikė pats Užsakovas, arba dėl ankstesnių rangovų netinkamai atliktų darbų, kurių nebuvo galima pastebėti prieš pradedant darbus. Rangovo atsakomybė ribojama tiesioginiais nuostoliais ir neviršija bendros sutarties sumos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Ginčų sprendimas</h2>
                <p>
                  Visi ginčai, kylantys iš šių Sąlygų ar susiję su jomis, sprendžiami derybų būdu. Nepavykus susitarti per 30 dienų, ginčai sprendžiami Lietuvos Respublikos teismuose pagal Rangovo buveinės vietą, taikant Lietuvos Respublikos teisę.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Kontaktai</h2>
                <p>
                  Jei turite klausimų dėl šių Paslaugų teikimo sąlygų, prašome susisiekti su mumis:
                </p>
                <ul className="mt-2 space-y-1">
                  <li>El. paštas: info@zemaitijos-apdaila.lt</li>
                  <li>Telefonas: +370 611 56182</li>
                  <li>Adresas: Telšiai, Lietuva</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
