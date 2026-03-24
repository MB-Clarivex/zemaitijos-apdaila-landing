
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Paintbrush as PaintRoller, Home, Wrench, Hammer, CheckCircle2 } from 'lucide-react';

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
        'Dažymas ir tapetavimas',
        'Plytelių klojimas (vonia, virtuvė, grindys)',
        'Grindų dangos klojimas (laminatas, parketas, vinilas)'
      ]
    },
    {
      id: 'isorine',
      title: 'Išorinė apdaila',
      icon: Home,
      description: 'Pastatų eksterjero darbai, užtikrinantys ilgaamžiškumą, šilumos izoliaciją ir patrauklią išvaizdą.',
      services: [
        'Fasadų šiltinimas (polistirolas, vata)',
        'Dekoratyvinio tinko dėjimas',
        'Fasadų dažymas',
        'Stogų dengimas ir remontas',
        'Lietaus nuvedimo sistemų montavimas'
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
        'Santechnikos ir elektros instaliacijos atnaujinimas',
        'Demontavimo darbai ir šiukšlių išvežimas'
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
        'Smulkūs betonavimo ir mūrijimo darbai'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
    </>
  );
};

export default ServicesPage;
