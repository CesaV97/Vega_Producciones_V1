import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

// Cloudinary base — f_auto convierte al formato óptimo (webp/avif),
// q_auto ajusta la calidad automáticamente según el dispositivo.
const CL = (path) =>
  `https://res.cloudinary.com/dv22lqbsr/image/upload/f_auto,q_auto/${path}`;

const slides = [
  { src: CL('L1Q1_ln2zsu'), category: '', title: 'XV Años' },
  { src: CL('L1Q2_szhrlw'), category: '', title: 'XV Años' },
  { src: CL('L1Q3_g5bnty'), category: '', title: 'XV Años' },
  { src: CL('L2Q1_nlbgve'), category: '', title: 'XV Años' },
  { src: CL('L1B1_g4t9kq'), category: '', title: 'Boda'        },
  { src: CL('L1B2_iwwrtm'), category: '', title: 'Boda'        },
  { src: CL('L1B3_qldrmm'), category: '', title: 'Boda'        },
];

const INTERVAL = 5000; // ms

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
        <div className="hero__copy">
          <span className="hero__label">Fotografía &amp; Video</span>
          <h1 className="hero__title">Somos tu mejor opción</h1>
          <p className="hero__subtitle">
            Con más de 15 años de experiencia en video y fotografía de eventos sociales,
            deja que nuestra familia cuide de tus recuerdos.
          </p>
          <div className="hero__actions">
            <a href="#locations" className="hero__cta hero__cta--ghost">
              Ver locaciones
              <ArrowRight size={15} />
            </a>
            <a href="#services" className="hero__cta">
              Ver opciones y paquetes
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
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
            transition={{ duration: INTERVAL / 10, ease: 'linear' }}
          />
        </div>
      )}
    </section>
  );
}
