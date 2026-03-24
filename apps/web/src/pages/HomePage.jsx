
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hammer, Paintbrush, Grid3x3, Sparkles, ArrowRight, Phone, ClipboardList, FileText, CheckCircle2, Star, ShieldCheck, Clock, Users, Briefcase } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import { useAnimatedCounter } from '@/components/AnimatedCounter';

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
              to="/kontaktai"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 active:scale-[0.98]"
            >
              Gauti nemokamą konsultaciją
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistikos juosta */}
      <section className="bg-slate-900 py-10 md:py-12">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatItem icon={Briefcase} end={200} suffix="+" label="Įvykdytų projektų" />
            <StatItem icon={Clock} end={9} suffix="+" label="Metų rinkoje" />
            <StatItem icon={Users} end={15} suffix="+" label="Specialistų komandoje" />
            <StatItem icon={ShieldCheck} end={100} suffix="%" label="Darbų garantija" />
          </div>
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
            <Link to="/paslaugos" className="btn-outline inline-flex items-center gap-2">
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

      {/* Kaip dirbame */}
      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
              Kaip dirbame?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nuo pirmo skambučio iki galutinio rezultato — aiški ir skaidri proceso eiga
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', icon: Phone, title: 'Susisiekiate', desc: 'Skambinate arba užpildote formą — atsakome per 24 val.' },
              { step: '02', icon: ClipboardList, title: 'Apžiūra', desc: 'Atvykstame į objektą, išklausome jūsų pageidavimus.' },
              { step: '03', icon: FileText, title: 'Sąmata', desc: 'Pateikiame detalią, nemokamą kainoraštį.' },
              { step: '04', icon: Hammer, title: 'Darbai', desc: 'Atlikome darbus pagal suderintą grafiką ir kokybės standartus.' },
              { step: '05', icon: CheckCircle2, title: 'Priėmimas', desc: 'Priduodame rezultatą su garantija ir tvarkinga darbo vieta.' },
            ].map(({ step, icon: Icon, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-primary tracking-widest mb-1">{step}</span>
                <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-border" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Atsiliepimai */}
      <section className="section-spacing bg-muted/60">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
              Ką sako mūsų klientai
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Daugiau nei 9 metai darbo — šimtai patenkintų klientų
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Raimondas K.',
                project: 'Buto remontas, Telšiai',
                text: 'Labai patenkinti darbu — meistrai atidūs, tvarkūs ir laikėsi sutarto laiko. Vonia ir virtuvė atrodė puikiai. Rekomenduosime draugams.',
                rating: 5,
              },
              {
                name: 'Jolanta M.',
                project: 'Fasado šiltinimas, Plungė',
                text: 'Profesionalus požiūris nuo pat pirmosios konsultacijos. Sąmata buvo tiksli, jokių staigmenų. Fasadas atrodo solidžiai, šildymas sumažėjo.',
                rating: 5,
              },
              {
                name: 'Tomas B.',
                project: 'Stogo remontas, Skuodas',
                text: 'Greitai reagavo, atvažiavo apžiūrėti tą pačią dieną. Darbai atlikti kokybiškai, su garantija. Tikrai kreipsiuosi dar.',
                rating: 5,
              },
            ].map(({ name, project, text, rating }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="card-base p-6 flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed text-sm flex-grow">„{text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground text-sm">{name}</p>
                  <p className="text-xs text-muted-foreground">{project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA juosta */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
              Pradėkime jūsų projektą šiandien
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Nemokama konsultacija ir sąmata — susisiekite dabar, atsakysime per 24 val.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/kontaktai"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/90 transition-all duration-200 active:scale-[0.98]"
              >
                Gauti sąmatą
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+37061156182"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-5 h-5" />
                +370 611 56182
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

function StatItem({ icon: Icon, end, suffix, label }) {
  const { count, ref } = useAnimatedCounter(end);
  return (
    <div ref={ref} className="flex flex-col items-center gap-2">
      <div className="w-12 h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center mb-1">
        <Icon className="w-6 h-6" />
      </div>
      <span className="text-4xl md:text-5xl font-extrabold text-white leading-none">
        {count}{suffix}
      </span>
      <span className="text-sm text-slate-400 font-medium">{label}</span>
    </div>
  );
}

export default HomePage;
