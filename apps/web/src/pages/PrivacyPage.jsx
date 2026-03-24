
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPage = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Privatumo politika — UAB Žemaitijos apdaila</title>
        <meta name="description" content="UAB „Žemaitijos apdaila“ privatumo politika. Sužinokite, kaip mes renkame, naudojame ir saugome jūsų asmens duomenis." />
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
                Privatumo politika
              </h1>
              <div className="text-muted-foreground space-y-2">
                <p className="font-medium text-foreground">UAB „Žemaitijos apdaila“, įm. k. 304173789, Telšiai, Lietuva</p>
                <p>Paskutinį kartą atnaujinta: {currentYear}-03-24</p>
              </div>
            </div>

            <div className="space-y-10 text-base leading-relaxed text-muted-foreground">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Bendrosios nuostatos</h2>
                <p>
                  Ši privatumo politika nustato, kaip UAB „Žemaitijos apdaila“ renka, tvarko ir saugo savo klientų bei interneto svetainės lankytojų asmens duomenis. Mes gerbiame jūsų privatumą ir įsipareigojame saugoti jūsų asmens duomenis laikydamiesi Bendrojo duomenų apsaugos reglamento (BDAR) bei kitų Lietuvos Respublikos ir Europos Sąjungos teisės aktų.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Duomenų valdytojas</h2>
                <p>
                  Jūsų asmens duomenų valdytojas yra UAB „Žemaitijos apdaila“, įmonės kodas 304173789, registruotos buveinės adresas Telšiai, Lietuva. El. paštas kontaktams: info@zemaitijos-apdaila.lt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Kokius duomenis renkame</h2>
                <p>
                  Mes galime rinkti ir tvarkyti šiuos jūsų asmens duomenis:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Kontaktinė informacija:</strong> vardas, pavardė, telefono numeris, el. pašto adresas.</li>
                  <li><strong>Projekto informacija:</strong> objekto adresas, nuotraukos, brėžiniai ir kita su užsakymu susijusi informacija.</li>
                  <li><strong>Finansinė informacija:</strong> banko sąskaitos numeris, mokėjimų istorija (sutarčių vykdymo tikslais).</li>
                  <li><strong>Komunikacijos duomenys:</strong> jūsų užklausos, žinutės, siunčiamos per kontaktų formą ar el. paštu.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Tvarkymo tikslai ir teisinis pagrindas</h2>
                <p>
                  Jūsų asmens duomenis tvarkome šiais tikslais:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Paslaugų teikimas ir sutarčių vykdymas:</strong> siekiant parengti sąmatas, sudaryti ir vykdyti rangos sutartis (teisinis pagrindas – sutarties vykdymas).</li>
                  <li><strong>Komunikacija:</strong> atsakyti į jūsų užklausas ir suteikti informaciją apie mūsų paslaugas (teisinis pagrindas – jūsų sutikimas ir mūsų teisėtas interesas).</li>
                  <li><strong>Buhalterinė apskaita:</strong> sąskaitų faktūrų išrašymas ir mokėjimų administravimas (teisinis pagrindas – teisinė prievolė).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Saugojimo laikotarpis</h2>
                <p>
                  Jūsų asmens duomenis saugome ne ilgiau, nei to reikalauja duomenų tvarkymo tikslai ar numato teisės aktai. Sutartys, sąskaitos faktūros ir kiti buhalteriniai dokumentai saugomi Lietuvos Respublikos įstatymų nustatytą laiką (paprastai 10 metų). Užklausų duomenys saugomi iki 2 metų po paskutinio kontakto.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Duomenų perdavimas</h2>
                <p>
                  Mes neperduodame jūsų asmens duomenų trečiosioms šalims, išskyrus atvejus, kai tai būtina paslaugoms suteikti (pvz., subrangovams, medžiagų tiekėjams – tik su jūsų žinia), buhalterinės apskaitos paslaugas teikiančioms įmonėms arba kai to reikalauja teisėsaugos institucijos pagal galiojančius įstatymus.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Jūsų teisės</h2>
                <p>
                  Pagal BDAR jūs turite šias teises:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Žinoti (būti informuotam) apie savo duomenų tvarkymą.</li>
                  <li>Susipažinti su savo duomenimis ir kaip jie yra tvarkomi.</li>
                  <li>Reikalauti ištaisyti netikslius ar neišsamius duomenis.</li>
                  <li>Reikalauti ištrinti savo duomenis („teisė būti pamirštam“).</li>
                  <li>Apriboti savo duomenų tvarkymą.</li>
                  <li>Nesutikti su duomenų tvarkymu.</li>
                </ul>
                <p className="mt-2">
                  Norėdami pasinaudoti šiomis teisėmis, susisiekite su mumis el. paštu info@zemaitijos-apdaila.lt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Slapukai</h2>
                <p>
                  Pirmą kartą apsilankę svetainėje matote pranešimą apie slapukus. Jūsų pasirinkimas („Sutinku“ ar „Tik būtini“) įrašomas jūsų naršyklės vietinėje saugykloje (localStorage), kad pranešimas neberodytų kiekvieno apsilankymo metu — tai nėra asmeninių duomenų perdavimas serveriui.
                </p>
                <p className="mt-2">
                  Mūsų interneto svetainėje gali būti naudojami būtini techniniai slapukai (angl. cookies), skirti užtikrinti tinkamą svetainės veikimą. Trečiųjų šalių analitikos ar rinkodaros slapukų šiuo metu neįjungiame be jūsų sutikimo; jei ateityje būtų naudojami papildomi įrankiai, atnaujinsime šią politiką ir, jei reikės, paprašysime papildomo sutikimo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Politikos keitimas</h2>
                <p>
                  Mes pasiliekame teisę bet kada atnaujinti ar pakeisti šią Privatumo politiką. Apie esminius pakeitimus informuosime paskelbdami atnaujintą versiją mūsų interneto svetainėje. Rekomenduojame reguliariai peržiūrėti šį puslapį.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
