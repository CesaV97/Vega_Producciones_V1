import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './About.css';

const highlights = [
  '+15 años de experiencia',
  '+1,500 eventos realizados',
  '5★ calificación de clientes',
];

const CL = 'https://res.cloudinary.com/dv22lqbsr/image/upload/';
const STACK_PHOTOS = [
  CL + 'v1774325129/L2Q1_nlbgve.jpg',
  CL + 'L2B8_ijypti',
  CL + 'L3B5_mcwmbc',
];
const SWAP_MS = 4500; // tiempo que cada foto permanece arriba

/* Posición de cada barajita según su lugar en la pila */
const SLOTS = [
  { x: 0,  y: 0,  rotate: 0, scale: 1,    zIndex: 3 },
  { x: 14, y: 12, rotate: 3, scale: 0.96, zIndex: 2 },
  { x: 28, y: 24, rotate: 6, scale: 0.92, zIndex: 1 },
];

function PhotoStack() {
  const n = STACK_PHOTOS.length;
  const [top, setTop] = useState(0);
  const [leaving, setLeaving] = useState(null);
  const paused = useRef(false);
  const reduce = useReducedMotion();

  const advance = () => {
    setLeaving(top);
    setTop((t) => (t + 1) % n);
  };

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (!paused.current) {
        setTop((t) => { setLeaving(t); return (t + 1) % n; });
      }
    }, SWAP_MS);
    return () => clearInterval(id);
  }, [n, reduce]);

  return (
    <div
      className="about__stack"
      onMouseEnter={() => { paused.current = true; }}
      onMouseLeave={() => { paused.current = false; }}
      onClick={advance}
      role="img"
      aria-label="Fotografías de Vega Producciones"
    >
      {STACK_PHOTOS.map((src, i) => {
        const pos = (i - top + n) % n;
        const slot = SLOTS[pos];
        const flying = i === leaving && pos === n - 1;
        return (
          <motion.img
            key={src}
            src={src}
            alt=""
            className="about__image"
            draggable={false}
            initial={false}
            animate={
              flying
                ? {
                    x: [0, -120, slot.x],
                    y: [0, -10, slot.y],
                    rotate: [0, -10, slot.rotate],
                    scale: [1, 1, slot.scale],
                    zIndex: [3, 3, slot.zIndex],
                  }
                : slot
            }
            transition={
              flying
                ? { duration: 0.9, times: [0, 0.45, 1], ease: 'easeInOut' }
                : { type: 'spring', stiffness: 130, damping: 18 }
            }
          />
        );
      })}
    </div>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">

        {/* ── Columna imagen ── */}
        <motion.div
          className="about__image-wrap"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="about__image-frame" />
          <PhotoStack />
          <div className="about__image-rule" aria-hidden="true" />
        </motion.div>

        {/* ── Columna texto ── */}
        <div className="about__text">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Quiénes somos
          </motion.span>

          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Capturamos momentos que se vuelven recuerdos
          </motion.h2>

          <motion.p
            className="about__body"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
           Desde 2004 capturamos los momentos más importantes en la vida de cada familia.
          </motion.p>
            <motion.p
            className="about__body"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            Cada evento es único, por eso nuestro equipo cuida cada detalle en fotografía y video.    
            </motion.p>            


          {/* Highlights checklist — editorial */}
          <motion.ul
            className="about__highlights"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {highlights.map((item, i) => (
              <li key={i} className="about__highlight-item">
                <span className="about__check" aria-hidden="true">✔</span>
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA — gold editorial, no azul */}
          <motion.a
            href="#contact"
            className="about__cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.42 }}
          >
            Trabajemos juntos
            <ArrowRight size={15} />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
