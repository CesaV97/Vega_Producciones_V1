import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import packages from '../data/packages.json';
import './Services.css';

const STEP = 280; // card width (260) + gap (20)

function PkgCard({ pkg }) {
  return (
    <div className="pkg-card">
      <span className="pkg-card__category">{pkg.category}</span>
      <h4 className="pkg-card__name">{pkg.name}</h4>
      <ul className="pkg-card__detail">
        {pkg.detail.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <span className="pkg-card__price">{pkg.price}</span>
      <a href="#contact" className="pkg-card__cta">
        Más información <ArrowRight size={14} />
      </a>
    </div>
  );
}

export default function Services() {
  const [offset, setOffset] = useState(0);
  const [animated, setAnimated] = useState(true);
  const total = packages.length * STEP;

  const next = () => { setAnimated(true); setOffset((o) => o - STEP); };
  const prev = () => { setAnimated(true); setOffset((o) => o + STEP); };

  useEffect(() => {
    if (offset <= -total) {
      const t = setTimeout(() => { setAnimated(false); setOffset(0); }, 350);
      return () => clearTimeout(t);
    }
    if (offset > 0) {
      const t = setTimeout(() => { setAnimated(false); setOffset(-(total - STEP)); }, 350);
      return () => clearTimeout(t);
    }
  }, [offset, total]);

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Lo que hacemos
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Servicios diseñados
            <br />para brillar
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Somos tu equipo creativo completo — foto, video y estudio bajo un mismo techo.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="packages"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <button className="packages__arrow packages__arrow--prev" onClick={prev} aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>

        <div className="packages__viewport">
          <div
            className="packages__track"
            style={{
              transform: `translateX(${offset}px)`,
              transition: animated ? 'transform 0.35s ease' : 'none',
            }}
          >
            {packages.map((pkg) => <PkgCard key={`a-${pkg.id}`} pkg={pkg} />)}
            {packages.map((pkg) => <PkgCard key={`b-${pkg.id}`} pkg={pkg} />)}
          </div>
        </div>

        <button className="packages__arrow packages__arrow--next" onClick={next} aria-label="Siguiente">
          <ChevronRight size={20} />
        </button>
      </motion.div>
    </section>
  );
}
