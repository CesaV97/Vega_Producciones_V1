import { ArrowRight } from 'lucide-react';
import './Hero.css';

// Cloudinary base — f_auto convierte al formato óptimo (webp/avif),
// q_auto ajusta la calidad automáticamente según el dispositivo.
const CL = (path) =>
  `https://res.cloudinary.com/dv22lqbsr/image/upload/f_auto,q_auto/${path}`;

// Foto fija del hero (boda en las escaleras)
const HERO_IMG = CL('L1B2_iwwrtm');

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* ── Foto fija ───────────────────────────── */}
      <div className="hero__slides">
        <img
          src={HERO_IMG}
          alt="Vega Producciones — fotografía de boda"
          className="hero__img"
          fetchpriority="high"
        />
        {/* degradado para que el texto se lea */}
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
    </section>
  );
}
