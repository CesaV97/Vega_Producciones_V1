import { motion } from 'framer-motion';
import './About.css';

const GoogleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const reviews = [
  { name: 'Juan P.',    source: 'google',   text: 'Excelente trabajo, muy profesionales y atentos. Las fotos quedaron increíbles, superaron todas mis expectativas. 100% recomendados.' },
  { name: 'María G.',   source: 'facebook', text: 'Contraté a Vega Producciones para mi evento y fue la mejor decisión. Captaron cada momento especial con mucho talento y dedicación.' },
  { name: 'Carlos R.',  source: 'google',   text: 'El equipo es muy creativo y profesional. Entregaron el video antes de tiempo y la calidad fue impresionante. Definitivamente volvería.' },
  { name: 'Ana L.',     source: 'google',   text: 'Renté el estudio para una sesión de producto y todo estuvo perfecto. Instalaciones de primera y el equipo muy amable.' },
  { name: 'Roberto M.', source: 'facebook', text: 'Increíble experiencia. Desde el primer contacto hasta la entrega final, todo fue fluido y el resultado habla por sí solo.' },
  { name: 'Laura S.',   source: 'google',   text: 'Muy buena comunicación, precios justos y calidad de nivel profesional. Mi marca luce increíble gracias a su trabajo.' },
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
            src="https://res.cloudinary.com/dv22lqbsr/image/upload/v1774403503/logo_vega_v1_ce4lbh.jpg"
            alt="Vega Producciones"
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
            className="about__reviews-scroll"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
          >
            {reviews.map((r) => (
              <div key={r.name} className="about__review-item">
                <div className="about__review-meta">
                  <div className="about__review-source">
                    {r.source === 'google' ? <GoogleIcon /> : <FacebookIcon />}
                  </div>
                  <span className="about__review-stars">★★★★★</span>
                  <span className="about__review-name">{r.name}</span>
                </div>
                <p className="about__review-text">"{r.text}"</p>
              </div>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: 24, display: 'inline-flex' }}
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
