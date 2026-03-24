
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Paintbrush as PaintRoller, Home, Wrench, Hammer, CheckCircle2, ChevronDown, Layers, Droplets } from 'lucide-react';
import { useState } from 'react';

const ServicesPage = () => {
  const categories = [
    {
      id: 'vidaus',
      title: 'Vidaus apdaila',
      icon: PaintRoller,
      description: 'Pilnas vidaus patalpų įrengimas nuo juodgrindžių iki raktų. Kuriame estetiškas ir funkcionalias erdves.',
      services: [
        'Gipso kartono plokščių montavimas (sienos, lubos, pertvaros)',
        'Sienų ir lubų glaistymas, lyginimas',
        'Dekoratyvinio tinko dėjimas ir faktūros',
        'Dažymas ir tapetavimas',
        'Plytelių klojimas (vonia, virtuvė, grindys)',
        'Grindų dangos klojimas (laminatas, parketas, vinilas)',
        'Nišų, lankų ir dekoratyvinių elementų formavimas',
        'Lubų dailylentės ir apvadų montavimas'
      ]
    },
    {
      id: 'isorine',
      title: 'Išorinė apdaila',
      icon: Home,
      description: 'Pastatų eksterjero darbai, užtikrinantys ilgaamžiškumą, šilumos izoliaciją ir patrauklią išvaizdą.',
      services: [
        'Fasadų šiltinimas (polistirolas, mineralinė vata)',
        'Dekoratyvinio tinko dėjimas ir dažymas',
        'Klinkerinių plytelių klojimas ant fasado',
        'Medinių ir kompozicinių plokščių montavimas',
        'Cokolio apdaila ir hydroizoliacinis dengimas',
        'Sienų ir pamatų apsauga nuo drėgmės',
        'Lietaus nuvedimo sistemų montavimas ir remontas'
      ]
    },
    {
      id: 'remontai',
      title: 'Remontai',
      icon: Wrench,
      description: 'Atnaujiname senas patalpas, atliekame kosmetinius ir kapitalinius remontus gyvenamuosiuose bei komerciniuose objektuose.',
      services: [
        'Kapitalinis butų ir namų remontas',
        'Kosmetinis patalpų atnaujinimas',
        'Komercinių patalpų pritaikymas veiklai',
        'Biurų ir parduotuvių renovacija',
        'Santechnikos ir elektros instaliacijos atnaujinimas',
        'Durų ir langų rėmų montavimas',
        'Demontavimo darbai ir statybinių šiukšlių išvežimas',
        'Sezoninis objektų paruošimas (žiemai / vasarai)'
      ]
    },
    {
      id: 'specialus',
      title: 'Specialūs darbai',
      icon: Hammer,
      description: 'Specifinių žinių ir įgūdžių reikalaujantys statybos ir montavimo darbai jūsų patogumui.',
      services: [
        'Medinių ir WPC terasų montavimas',
        'Karkasinių konstrukcijų statyba',
        'Nestandartinių gipso formų formavimas',
        'Hidroizoliacijos įrengimas',
        'Smulkūs betonavimo ir mūrijimo darbai',
        'Laiptų apdaila ir turėklų montavimas',
        'Balkono ir lodžijos pertvarkymas'
      ]
    },
    {
      id: 'stogai',
      title: 'Stogų darbai',
      icon: Home,
      description: 'Profesionalus stogų dengimas, renovacija ir priežiūra. Naudojame tik sertifikuotas medžiagas, garantuojančias ilgaamžiškumą.',
      services: [
        'Šlaitinių stogų dengimas (bitumine danga, metalinėmis čerpėmis)',
        'Plokščių stogų dengimas ir renovacija',
        'Stogų šiltinimas ir garo izoliacijos įrengimas',
        'Skardinimo darbai (karnizai, latakų sistema)',
        'Stogų apžiūra ir prežiūros paslaugos',
        'Mansardų įrengimas ir langelių montavimas',
        'Avariní stogų remonto darbai'
      ]
    },
    {
      id: 'grindys',
      title: 'Grindų įrengimas',
      icon: Layers,
      description: 'Visų tipų grindų dangų tiekimas ir klojimas. Patariame renkantis medžiagas pagal patalpų paskirtį ir klientų biudžetą.',
      services: [
        'Laminuotų grindų klojimas',
        'Parketlenčių ir masyvaus parketo klojimas',
        'Vinilo ir LVT grindų klojimas',
        'Keraminių ir akmens masės plytelių klojimas',
        'Betono grindų šlifavimas ir poliravimas',
        'Savaiminės įrangos (pilami grindys) klojimas',
        'Šildymo grindų sistemų montavimas'
      ]
    },
    {
      id: 'vonios',
      title: 'Vonios ir drėgnos patalpos',
      icon: Droplets,
      description: 'Vonios kambariai, saunos ir kitos drėgnos patalpos — nuo hidroizoliacijos iki baigiamosios apdailos. Pilnas raktų projektas.',
      services: [
        'Vonios kambario pilnas įrengimas nuo nulio',
        'Hidroizoliacijos sluoksnio uždejimas',
        'Plytelių klojimas sienoms ir grindims',
        'Santechnikos baldų (kabineto, vonios) montavimas',
        'Saunų ir pirčių įrengimas',
        'Dušo kabinų ir pertvarų montavimas',
        'Ventilacinių sistemų įrengimas drėgnose patalpose'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Paslaugos - UAB Žemaitijos apdaila</title>
        <meta name="description" content="UAB „Žemaitijos apdaila“ paslaugos: vidaus ir išorinė apdaila, remontai, specialūs statybos darbai." />
      </Helmet>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Mūsų paslaugos
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Visapusiški statybų ir apdailos sprendimai, pritaikyti jūsų poreikiams. Nuo smulkaus remonto iki pilno objekto įrengimo.
          </motion.p>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base p-8 md:p-10 scroll-mt-24"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <category.icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>
                
                <p className="text-muted-foreground mb-8 text-lg">
                  {category.description}
                </p>
                
                <ul className="space-y-4">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                      <span className="text-foreground font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DUK / FAQ */}
      <section className="section-spacing bg-muted/60">
        <div className="max-w-3xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
              Dažniausiai užduodami klausimai
            </h2>
            <p className="text-lg text-muted-foreground">
              Atsakymai į klausimus, kuriuos mūsų klientai užduoda dažniausiai
            </p>
          </motion.div>

          <FaqList />
        </div>
      </section>
    </>
  );
};

const faqItems = [
  {
    q: 'Ar konsultacija ir sąmata nemokama?',
    a: 'Taip — apžiūra ir detali sąmata yra visiškai nemokamos ir jūsų neįpareigojančios. Atvykstame į objektą, įvertiname darbus ir pateikiame kainoraštį.',
  },
  {
    q: 'Kiek laiko trunka vidutinis buto remontas?',
    a: 'Tai priklauso nuo buto dydžio ir darbų apimties. Kosmetinis remontas paprastai trunka 1–3 savaites, kapitalinis — 4–8 savaites. Tikslų terminą nustatomą po apžiūros.',
  },
  {
    q: 'Ar dirbate su medžiagomis, ar tik teikiate paslaugas?',
    a: 'Galimi abu variantai — galime patiekti visas reikiamas medžiagas arba dirbti su jūsų pačių įsigytomis. Aptarsime tinkamiausią variantą konsultacijos metu.',
  },
  {
    q: 'Kokia darbo garantija?',
    a: 'Teikiame 12 mėnesių garantiją visiems atliktiems darbams. Jei per garantinį laikotarpį iškyla defektų dėl mūsų kaltės, išsprendžiame nemokamai.',
  },
  {
    q: 'Kuriose vietovėse dirbate?',
    a: 'Dirbame visoje Lietuvoje, su pagrindiniu akcentu į Žemaitijos regioną — Telšiai, Plungė, Skuodas, Klaipėda ir apylinkės. Dideliems projektams galime atvykti ir toliau.',
  },
  {
    q: 'Kaip sumokėti už darbus?',
    a: 'Paprastai taikomas dalinis mokėjimas: avansas prieš darbus, likutis po priėmimo. Tikslias mokėjimo sąlygas suderinamas sutartyje.',
  },
];

function FaqList() {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {faqItems.map(({ q, a }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="card-base overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-foreground">{q}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-muted-foreground leading-relaxed border-t border-border pt-4">
              {a}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default ServicesPage;
