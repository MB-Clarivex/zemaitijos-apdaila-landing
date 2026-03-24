
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Rekvizitai */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 tracking-tight">
              UAB „Žemaitijos apdaila“
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Telšiai, Lietuva</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+37061156182" className="hover:text-white transition-colors">
                  +370 611 56182
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@zemaitijos-apdaila.lt" className="hover:text-white transition-colors">
                  info@zemaitijos-apdaila.lt
                </a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-800 text-sm text-slate-400">
              <p>Įmonės kodas: 304173789</p>
              <p>PVM kodas: LT100009940816</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Nuorodos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Pradžia
                </Link>
              </li>
              <li>
                <Link to="/apie-mus" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Apie mus
                </Link>
              </li>
              <li>
                <Link to="/paslaugos" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Paslaugos
                </Link>
              </li>
              <li>
                <Link to="/projektai" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Projektai
                </Link>
              </li>
              <li>
                <Link to="/kontaktai" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Kontaktai
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Additional Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Teisinė informacija</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/terms" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Paslaugų teikimo sąlygos
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-colors flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" /> Privatumo politika
                </Link>
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-3">Darbo laikas</h4>
              <p className="text-sm text-slate-400">Pirmadienis – Penktadienis</p>
              <p className="text-sm text-white font-medium">8:00 – 17:00</p>
            </div>
          </div>

          {/* Column 4: Social / Contact CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Sekite mus</h3>
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.facebook.com/zemaitijos.apdaila/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/zemaitijos_apdaila/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm mb-4">Turite klausimų ar norite aptarti projektą?</p>
            <Link to="/kontaktai" className="inline-block bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              Gauti pasiūlymą
            </Link>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {currentYear} UAB Žemaitijos apdaila. Visos teisės saugomos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
