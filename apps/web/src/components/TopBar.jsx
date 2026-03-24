
import React from 'react';
import { Clock, Phone, Mail } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-slate-200 py-2 text-sm">
      <div className="max-w-7xl mx-auto container-padding flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          <span>Pr–Pn 8:00–17:00</span>
        </div>
        <div className="flex items-center gap-6">
          <a 
            href="tel:+37061156182" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>+370 611 56182</span>
          </a>
          <a 
            href="mailto:info@zemaitijos-apdaila.lt" 
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="hidden sm:inline">info@zemaitijos-apdaila.lt</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
