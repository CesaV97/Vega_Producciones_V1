import { motion } from 'framer-motion';
import { Camera, Video, Building2, ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Camera size={32} />,
    tag: 'Fotografía',
    title: 'Sesiones Fotográficas Profesionales',
    desc: 'Portraits, branding personal, moda, eventos y mucho más. Capturamos tu esencia con equipos de última generación y luz de estudio premium.',
    features: ['Retratos & Branding', 'Fotografía de moda', 'Eventos especiales', 'Edición profesional'],
    color: '#1E88E5',
  },
  {
    icon: <Video size={32} />,
    tag: 'Video',
    title: 'Producción Audiovisual de Alto Impacto',
    desc: 'Desde reels para redes sociales hasta comerciales y documentales. Contamos tu historia con una cinematografía de calidad cinematográfica.',
    features: ['Reels & Content Creator', 'Comerciales', 'Documentales', 'Motion graphics'],
    color: '#FF6B35',
    featured: true,
  },
  {
    icon: <Building2 size={32} />,
    tag: 'Estudio',
    title: 'Espacio Creativo de Renta',
    desc: 'Nuestro estudio completamente equipado disponible para tu próxima producción. Ciclorama, equipo de iluminación y todo lo que necesitas.',
    features: ['Ciclorama profesional', 'Iluminación completa', 'Equipos de audio', 'Sala de maquillaje'],
    color: '#42A5F5',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

export default function Services() {
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

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div
              key={s.tag}
              className={`service-card ${s.featured ? 'service-card--featured' : ''}`}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ '--card-color': s.color }}
            >
              <div className="service-card__icon">{s.icon}</div>
              <span className="service-card__tag">{s.tag}</span>
              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.desc}</p>
              <ul className="service-card__features">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className="service-card__cta">
                Más información <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
