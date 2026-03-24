
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hammer, Paintbrush, Grid3x3, Sparkles, ArrowRight } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const HomePage = () => {
  const services = [
    {
      icon: Grid3x3,
      title: 'Gipso montavimas',
      description: 'Profesionalus gipso kartono plokščių montavimas sienoms ir luboms su tikslia apdaila.'
    },
    {
      icon: Sparkles,
      title: 'Plytelių klojimas',
      description: 'Ekspertinis keraminių ir akmens masės plytelių klojimas vonios kambariams, virtuvėms ir grindims.'
    },
    {
      icon: Hammer,
      title: 'Spakliavimas',
      description: 'Aukštos kokybės sienų glaistymas ir lyginimas tobulam paviršiaus paruošimui.'
    },
    {
      icon: Paintbrush,
      title: 'Dažymas',
      description: 'Vidaus ir išorės dažymo paslaugos naudojant aukščiausios kokybės medžiagas ir skiriant dėmesį detalėms.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>UAB Žemaitijos apdaila — profesionali vidaus ir išorės apdaila</title>
        <meta name="description" content="Statybų ir apdailos darbai Žemaitijoje ir visoje Lietuvoje: gipso montavimas, plytelės, dažymas, renovacija, fasadai, stogai, terasos. Veikiame nuo 2016 m." />
      </Helmet>

      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/unsplash-home-hero.jpg"
            alt="Moderni vidaus apdailos darbo vieta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto container-padding text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
              UAB „Žemaitijos apdaila“
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-4 text-white/90">
              Statybų ir apdailos darbai Žemaitijoje ir visoje Lietuvoje
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/80 max-w-2xl">
              Nuo 2016 m. vykdome gyvenamųjų ir komercinių objektų renovaciją, vidaus apdailą, šiltinimą, grindų ir plytelių darbus, stogų bei fasadų įrengimą. Kruopštus darbas, aiškios sąlygos ir patikima komanda.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-[0.98]"
            >
              Gauti nemokamą konsultaciją
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
              Mūsų paslaugos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nuo gipso ir plytelių iki stogų, fasadų ir terasų — pilnas statybų apdailos spektras
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/services" className="btn-outline inline-flex items-center gap-2">
              Visos paslaugos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-muted">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Kodėl verta rinktis mus?
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Patirtis nuo 2016 m.</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ilgametė praktika statybų ir apdailos srityje — įvairaus masto projektai gyvenamajame ir komerciniame sektoriuose.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Profesionali komanda</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kvalifikuoti meistrai, kurie didžiuojasi savo darbu ir atkreipia dėmesį į kiekvieną detalę.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Kokybiškos medžiagos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Naudojame tik aukščiausios kokybės medžiagas iš patikimų tiekėjų, siekiant užtikrinti ilgaamžius rezultatus.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Laiku atliekami darbai</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Patikimas projektų valdymas ir įsipareigojimas laikytis terminų neaukojant kokybės.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/unsplash-team-work.jpg"
                alt="Profesionali statybininkų komanda darbe"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
