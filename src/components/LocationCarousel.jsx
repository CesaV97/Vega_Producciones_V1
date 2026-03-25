import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './LocationCarousel.css';

const GAP = 20; // px entre tarjetas

export default function LocationCarousel({ title, icon, locations, onSelect }) {
  const [index, setIndex]       = useState(0);
  const [cardW, setCardW]       = useState(340);
  const trackRef                = useRef(null);
  const wrapRef                 = useRef(null);

  // calcular cuántas tarjetas caben y el ancho real de cada una
  useEffect(() => {
    const calc = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.offsetWidth;
      // desktop ≥3, tablet 2, mobile 1
      const visible = w >= 900 ? 3 : w >= 580 ? 2 : 1;
      setCardW(Math.floor((w - GAP * (visible - 1)) / visible));
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  const visible   = Math.round((wrapRef.current?.offsetWidth || 1060) / (cardW + GAP));
  const maxIndex  = Math.max(0, locations.length - visible);

  const prev = () => setIndex(i => (i - 1 + maxIndex + 1) % (maxIndex + 1));
  const next = () => setIndex(i => (i + 1) % (maxIndex + 1));

  const translateX = index * (cardW + GAP);

  return (
    <div className="lcarousel">
      {/* encabezado de categoría */}
      <div className="lcarousel__head">
        <div className="lcarousel__head-left">
          <span className="lcarousel__icon">{icon}</span>
          <div>
            <p className="lcarousel__label">Locaciones para</p>
            <h3 className="lcarousel__title">{title}</h3>
          </div>
        </div>

        {/* flechas */}
        <div className="lcarousel__arrows">
          <button
            className="lcarousel__arrow"
            onClick={prev}
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="lcarousel__arrow"
            onClick={next}
            aria-label="Siguiente"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* track */}
      <div className="lcarousel__wrap" ref={wrapRef}>
        <div
          className="lcarousel__track"
          ref={trackRef}
          style={{ transform: `translateX(-${translateX}px)`, gap: GAP }}
        >
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              className="lcarousel__card"
              style={{ width: cardW, minWidth: cardW }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              onClick={() => onSelect(loc)}
            >
              {/* imagen */}
              <div className="lcarousel__img">
                <img src={loc.coverImage} alt={loc.name} />
                <div className="lcarousel__img-overlay" />
              </div>

              {/* cuerpo */}
              <div className="lcarousel__body">
                <span className="lcarousel__cat">
                  <MapPin size={11} />
                  {loc.category}
                </span>
                <h4 className="lcarousel__name">{loc.name}</h4>
                <ul className="lcarousel__feats">
                  {loc.characteristics.slice(0, 3).map((c, j) => (
                    <li key={j}>{c}</li>
                  ))}
                </ul>
                <button className="lcarousel__cta">
                  Ver locación <ArrowRight size={13} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* dots */}
      {locations.length > 1 && (
        <div className="lcarousel__dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`lcarousel__dot ${i === index ? 'lcarousel__dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
