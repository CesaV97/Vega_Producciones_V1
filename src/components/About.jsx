import { motion } from 'framer-motion';
import { Star, Award, Users, Zap } from 'lucide-react';
import './About.css';

const values = [
  { icon: <Star size={20} />, title: 'Calidad Premium', desc: 'Equipos de última generación para resultados extraordinarios.' },
  { icon: <Zap size={20} />, title: 'Entrega Rápida', desc: 'Tiempos de entrega que respetan tu agenda y necesidades.' },
  { icon: <Award size={20} />, title: 'Experiencia', desc: 'Más de 8 años creando contenido de alto impacto.' },
  { icon: <Users size={20} />, title: 'Equipo Creativo', desc: 'Profesionales apasionados por la imagen y el detalle.' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <motion.div
          className="about__image-wrap"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="about__image-bg" />
          <img
            src="/hero-bg.jpg"
            alt="Vega Producciones estudio"
            className="about__image"
          />
          <div className="about__badge">
            <span className="about__badge-num">5★</span>
            <span className="about__badge-text">Calificación<br />de nuestros clientes</span>
          </div>
        </motion.div>

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Tu visión, nuestra
            <br />pasión creativa
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            En Vega Producciones combinamos arte, técnica y tecnología para crear
            contenido visual que conecta marcas y personas. Somos un estudio de
            fotografía y video comprometido con la excelencia en cada producción.
          </motion.p>

          <motion.div
            className="about__values"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            {values.map((v) => (
              <div key={v.title} className="about__value">
                <div className="about__value-icon">{v.icon}</div>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: 36, display: 'inline-flex' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
          >
            Trabajemos juntos
          </motion.a>
        </div>
      </div>
    </section>
  );
}
