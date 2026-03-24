import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

// Cloudinary base — f_auto convierte al formato óptimo (webp/avif),
// q_auto ajusta la calidad automáticamente según el dispositivo.
const CL = (path) =>
  `https://res.cloudinary.com/dv22lqbsr/image/upload/f_auto,q_auto/${path}`;

const slides = [
  { src: CL('L1Q1_ln2zsu'), category: 'Fotografía de', title: 'Quinceañera' },
  { src: CL('L1Q2_szhrlw'), category: 'Fotografía de', title: 'Quinceañera' },
  { src: CL('L1Q3_g5bnty'), category: 'Fotografía de', title: 'Quinceañera' },
  { src: CL('L2Q1_nlbgve'), category: 'Fotografía de', title: 'Quinceañera' },
  { src: CL('L1B1_g4t9kq'), category: 'Fotografía de', title: 'Boda'        },
  { src: CL('L1B2_iwwrtm'), category: 'Fotografía de', title: 'Boda'        },
  { src: CL('L1B3_qldrmm'), category: 'Fotografía de', title: 'Boda'        },
];

const INTERVAL = 3000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const timerRef              = useRef(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() =>
      setCurrent(prev => (prev + 1) % slides.length), INTERVAL
    );
    return () => clearInterval(timerRef.current);
  }, [paused]);

  const goTo = (i) => { clearInterval(timerRef.current); setCurrent(i); };

  const slide = slides[current];

  return (
    <section
      className="hero"
      id="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Photo stack ─────────────────────────── */}
      <div className="hero__slides">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}
          >
            {/* fondo difuminado — misma foto estirada y blureada */}
            <img
              src={s.src}
              aria-hidden="true"
              className="hero__slide-bg"
            />
            {/* foto real completa, sin recorte */}
            <img
              src={s.src}
              alt={s.title}
              className="hero__slide-img"
            />
          </div>
        ))}

        {/* right-side gradient so text is readable */}
        <div className="hero__overlay" />
      </div>

      {/* ── Text — right side ───────────────────── */}
      <div className="hero__layout">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className="hero__copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0  }}
            exit={{    opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="hero__label">{slide.category}</span>
            <h1 className="hero__title">{slide.title}</h1>
            <p className="hero__subtitle">
              Sesiones profesionales que capturan la emoción,
              la elegancia y los detalles únicos de tu momento especial.
            </p>
            <a href="#contact" className="hero__cta">
              Ver opciones y precios
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Dot indicators ──────────────────────── */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Foto ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Progress bar ────────────────────────── */}
      {!paused && (
        <div className="hero__progress-wrap">
          <motion.div
            key={current}
            className="hero__progress-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
          />
        </div>
      )}
    </section>
  );
}
