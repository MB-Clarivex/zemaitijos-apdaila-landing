
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Users, Target, Heart, MapPin, Quote } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Kokybiškas meistriškumas',
      description: 'Mes didžiuojamės teikdami išskirtinius darbus, kurie atlaiko laiko išbandymus.'
    },
    {
      icon: Users,
      title: 'Dėmesys klientui',
      description: 'Jūsų pasitenkinimas yra mūsų prioritetas. Mes išklausome, prisitaikome ir viršijame lūkesčius.'
    },
    {
      icon: Target,
      title: 'Tikslumas ir detalės',
      description: 'Kiekvienam projektui skiriamas ypatingas dėmesys, siekiant užtikrinti nepriekaištingus rezultatus.'
    },
    {
      icon: Heart,
      title: 'Aistra tobulumui',
      description: 'Mes mylime tai, ką darome, ir tai atsispindi kiekviename mūsų apdailintame paviršiuje.'
    }
  ];

  const stats = [
    { number: '2016', label: 'Įkūrimo metai' },
    { number: '9+', label: 'Metų rinkoje' },
    { number: '15+', label: 'Specialistų komanda' },
    { number: '100%', label: 'Dėmesys kokybei' }
  ];

  return (
    <>
      <Helmet>
        <title>Apie mus — UAB Žemaitijos apdaila</title>
        <meta name="description" content="UAB „Žemaitijos apdaila“ — statybų ir apdailos įmonė, veikianti nuo 2016 m. Žemaitijoje ir visoje Lietuvoje. Susipažinkite su vertybėmis ir patirtimi." />
      </Helmet>

      <section className="section-spacing bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
              Apie mus
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Kuriame pasitikėjimą per kokybišką darbą nuo 2016 metų
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
                Mūsų istorija
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  UAB „Žemaitijos apdaila“ įregistruota 2016 m. ir dirba statybų bei apdailos srityje visoje Lietuvoje, su akcentu į Žemaitijos regioną. Mūsų tikslas — patikimi darbai: nuo vidaus apdailos ir renovacijos iki stogų, fasadų, terasų ir šiltinimo.
                </p>
                <p>
                  Per metus įgyvendiname įvairaus masto užsakymus — gyvenamuosiuose namuose, butuose ir komercinėse patalpose. Vertiname aiškų bendravimą, sąžiningas sąmatas ir tvarkingą darbo vietą.
                </p>
                <p>
                  Komanda — patyrę meistrai ir statybos specialistai; turime pakankamai rankų didesniems objektams. Kiekvienas projektas, nesvarbu, ar tai vienas kambarys, ar visas pastatas, sulaukia tokio paties dėmesio ir meistriškumo.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/images/portfolio-renovacija.jpg"
                alt="UAB Žemaitijos apdaila — renovacijos ir vidaus apdailos projektas"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ letterSpacing: '-0.02em' }}>
                Mūsų vertybės
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Principai, kuriais vadovaujamės visame kame, ką darome
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-base p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                      <value.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vadovo citata */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-12 h-12 text-primary/50 mx-auto mb-6" />
            <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed italic mb-8">
              „Nesiekiame būti didžiausiais — siekiame būti geriausi tame, ką darome. Kiekvienas projektas mums yra rekomendacija ateičiai, todėl dirbame taip, kad klientas norėtų mus rekomenduoti draugams."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                V
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">UAB „Žemaitijos apdaila"</p>
                <p className="text-slate-400 text-sm">Vadovas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Veikimo regionai */}
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
              Dirbame visoje Lietuvoje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nors širdis — Žemaitijoje, mūsų komanda vykdo projektus ir kitose Lietuvos miestuose bei regionuose.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { city: 'Telšiai', note: 'Pagrindinis regionas' },
                { city: 'Plungė', note: 'Žemaitija' },
                { city: 'Mažeikiai', note: 'Žemaitija' },
                { city: 'Šiauliai', note: 'Šiaurės Lietuva' },
                { city: 'Klaipėda', note: 'Vakarų Lietuva' },
                { city: 'Vilnius', note: 'Dideli projektai' },
                { city: 'Kaunas', note: 'Dideli projektai' },
                { city: 'Visa Lietuva', note: 'Susisiekite dėl išvykos' },
              ].map(({ city, note }) => (
                <div key={city} className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-primary/40 transition-colors">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{city}</p>
                    <p className="text-xs text-muted-foreground">{note}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-xl border border-border"
            >
              <iframe
                title="UAB Žemaitijos apdaila – Telšiai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35894.2!2d22.2393!3d55.9871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5f2b9a3a7e1a9%3A0x400d18c86697df0!2sTel%C5%A1iai!5e0!3m2!1slt!2slt!4v1700000000000"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
