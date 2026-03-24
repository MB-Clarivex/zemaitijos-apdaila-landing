import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'zemaitijos_cookie_consent_v1';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const save = (choice) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          choice,
          ts: Date.now(),
        })
      );
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto pointer-events-auto rounded-xl border border-border bg-card text-card-foreground shadow-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex gap-4 flex-1 min-w-0">
              <div className="hidden sm:flex w-11 h-11 shrink-0 rounded-lg bg-primary/10 text-primary items-center justify-center">
                <Cookie className="w-6 h-6" aria-hidden />
              </div>
              <div className="min-w-0">
                <h2 id="cookie-consent-title" className="text-base font-semibold text-foreground mb-2">
                  Slapukai ir jūsų pasirinkimas
                </h2>
                <p id="cookie-consent-desc" className="text-sm text-muted-foreground leading-relaxed">
                  Naudojame būtinus slapukus svetainės veikimui (pvz., jūsų sutikimo įsiminimui). Trečiųjų šalių
                  analitikos ar reklamos slapukų šiuo metu neįjungiame. Daugiau —{' '}
                  <Link to="/privacy" className="text-primary font-medium underline-offset-2 hover:underline">
                    privatumo politikoje
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 shrink-0 w-full md:w-auto">
              <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={() => save('essential')}>
                Tik būtini
              </Button>
              <Button type="button" className="w-full sm:w-auto" onClick={() => save('all')}>
                Sutinku
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
