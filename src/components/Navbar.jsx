import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { label: 'Inicio',     href: '#hero'      },
  { label: 'Locaciones', href: '#locations' },
  { label: 'Paquetes',   href: '#services'  },
  { label: 'Nosotros',   href: '#about'        },
  { label: 'Contacto',   href: '#contact'      },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#hero" className="navbar__logo">
          <img src="https://res.cloudinary.com/dv22lqbsr/image/upload/v1774403367/LOGO-vega_mzbduw.png" alt="Vega Producciones" />
        </a>

        <nav className="navbar__links">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="navbar__link">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__burger"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="navbar__mobile-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
