import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './About.css';

const highlights = [
  '+15 años de experiencia',
  '+1,500 eventos realizados',
  '5★ calificación de clientes',
];

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
          <img
            src="https://res.cloudinary.com/dv22lqbsr/image/upload/v1774325129/L2Q1_nlbgve.jpg"
            alt="Vega Producciones"
            className="about__image"
          />
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
