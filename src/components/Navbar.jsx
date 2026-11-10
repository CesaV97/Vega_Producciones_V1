import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const links = [
  { label: 'Inicio',     href: '#hero'      },
  { label: 'Locaciones', href: '#locations' },
  { label: 'Paquetes',   href: '#services'  },
  { label: 'Nosotros',   href: '#about'        },
  { label: 'Contacto',   href: '#contact', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // sección activa: la última cuyo borde superior ya pasó el 40% del viewport
      const mark = window.innerHeight * 0.4;
      let current = links[0].href;
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el && el.getBoundingClientRect().top <= mark) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
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
            <a
              key={l.label}
              href={l.href}
              className={`navbar__link${l.cta ? ' navbar__link--cta' : ''}${active === l.href ? ' is-active' : ''}`}
            >
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
                className={`navbar__mobile-link${l.cta ? ' navbar__mobile-link--cta' : ''}${active === l.href ? ' is-active' : ''}`}
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
