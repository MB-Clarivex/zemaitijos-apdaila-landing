
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefonas',
      content: '+370 611 56182',
      link: 'tel:+37061156182'
    },
    {
      icon: Mail,
      title: 'El. paštas',
      content: 'info@zemaitijos-apdaila.lt',
      link: 'mailto:info@zemaitijos-apdaila.lt'
    },
    {
      icon: MapPin,
      title: 'Vieta',
      content: 'Telšiai, Lietuva',
      link: null
    },
    {
      icon: Clock,
      title: 'Darbo laikas',
      content: 'Pr-Pn: 8:00 - 17:00',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Kontaktai - UAB Žemaitijos apdaila</title>
        <meta name="description" content="Susisiekite su UAB „Žemaitijos apdaila“. Teikiame statybų ir apdailos paslaugas. Telefonas: +370 611 56182, El. paštas: info@zemaitijos-apdaila.lt" />
      </Helmet>

      <section className="section-spacing bg-background">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ letterSpacing: '-0.02em' }}>
              Susisiekite su mumis
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pasiruošę pradėti savo projektą? Susisiekite su mumis dėl nemokamos konsultacijos ir detalios sąmatos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card-base p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Parašykite mums</h2>
                <ContactForm />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="card-base p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Kontaktinė informacija</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-base p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Kodėl verta susisiekti?</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Nemokama konsultacija ir projekto įvertinimas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Detalios sąmatos be paslėptų mokesčių</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Greitas atsakymas - paprastai per 24 valandas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Profesionalūs patarimai iš patyrusių specialistų</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
