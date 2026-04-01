import { motion } from 'framer-motion';
import './Testimonials.css';

const GoogleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

/* Reseña destacada (la primera) */
const featured = {
  name: 'María G.',
  source: 'facebook',
  text: 'Contraté a Vega Producciones para mi evento y fue la mejor decisión. Captaron cada momento especial con mucho talento y dedicación.',
};

/* Reseñas secundarias */
const secondary = [
  { name: 'Juan P.',    source: 'google',   text: 'Excelente trabajo, muy profesionales y atentos. Las fotos quedaron increíbles, superaron todas mis expectativas.' },
  { name: 'Carlos R.',  source: 'google',   text: 'El equipo es muy creativo y profesional. Entregaron el video antes de tiempo y la calidad fue impresionante.' },
  { name: 'Ana L.',     source: 'google',   text: 'Todo estuvo perfecto. Instalaciones de primera y el equipo muy amable. Definitivamente volvería.' },
  { name: 'Roberto M.', source: 'facebook', text: 'Desde el primer contacto hasta la entrega final, todo fue fluido y el resultado habla por sí solo.' },
  { name: 'Laura S.',   source: 'google',   text: 'Muy buena comunicación, precios justos y calidad de nivel profesional. Mi marca luce increíble.' },
];

function SourceBadge({ source }) {
  return (
    <span className="tm-badge">
      {source === 'google' ? <GoogleIcon /> : <FacebookIcon />}
      <span>{source === 'google' ? 'Google' : 'Facebook'}</span>
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">

      {/* ── Featured pull quote ── */}
      <div className="container">
        <motion.div
          className="tm-featured"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Decorative giant quote mark */}
          <span className="tm-featured__mark" aria-hidden="true">"</span>

          <div className="tm-featured__content">
            <motion.span
              className="tm-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Opiniones reales
            </motion.span>

            <motion.p
              className="tm-featured__quote"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              {featured.text}
            </motion.p>

            <motion.div
              className="tm-featured__meta"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="tm-featured__stars">★★★★★</span>
              <span className="tm-featured__name">— {featured.name}</span>
              <SourceBadge source={featured.source} />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Thin gold divider */}
      <div className="tm-rule" />

      {/* ── Secondary reviews grid ── */}
      <div className="container">
        <motion.div
          className="tm-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {secondary.map((r) => (
            <motion.div
              key={r.name}
              className="tm-card"
              variants={{
                hidden:   { opacity: 0, y: 24 },
                visible:  { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="tm-card__top">
                <span className="tm-card__stars">★★★★★</span>
                <SourceBadge source={r.source} />
              </div>
              <p className="tm-card__text">"{r.text}"</p>
              <span className="tm-card__name">— {r.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
