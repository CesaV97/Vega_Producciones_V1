import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import packages from '../data/services.json';
import { whatsappLink } from './whatsapp';
import './Services.css';

const GAP = 20; // px entre cards
const MIN_TWO_CARDS = 700; // ancho mínimo del contenedor para mostrar 2 cards

const categories = [...new Set(packages.map((p) => p.category))];
const grouped = Object.fromEntries(
  categories.map((cat) => [cat, packages.filter((p) => p.category === cat)])
);

/* ── Category Tabs ── */
function CategoryTabs({ categories, active, onChange }) {
  return (
    <motion.nav
      className="svc-tabs"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          className={`svc-tab${active === cat ? ' svc-tab--active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
          {active === cat && (
            <motion.span
              className="svc-tab__indicator"
              layoutId="tab-indicator"
              transition={{ type: 'spring', stiffness: 400, damping: 36 }}
            />
          )}
        </button>
      ))}
    </motion.nav>
  );
}

/* Mensaje prellenado para cotizar el paquete por WhatsApp */
const quoteMessage = (pkg) =>
  `Hola, me gustaría cotizar el paquete ${pkg.name} de ${pkg.category}.`;

/* ── Package Card ── */
function PkgCard({ pkg }) {
  const attrEntries = Object.entries(pkg.attributes || {}).filter(
    ([, v]) => typeof v === 'string' || typeof v === 'number'
  );

  return (
    <div className="svc-card">
      <div className="svc-card__top">
        <span className="svc-card__type">{pkg.type}</span>

        <div className="svc-card__row"> 
        <h4 className="svc-card__name">{pkg.name}</h4>
        <span className="svc-card__price-line" />
        <span className="svc-card__price">{pkg.price}</span>
        </div>
      </div>

      <ul className="svc-card__detail">
        {pkg.detail.map((item) => (
          <li key={item}>
            <Check size={12} className="svc-card__check" />
            {item}
          </li>          
        ))}
      <div className="svc-card__bottom">
        <div className="svc-card__price-wrap">                    
        </div>
        <a
          href={whatsappLink(quoteMessage(pkg))}
          target="_blank"
          rel="noopener noreferrer"
          className="svc-card__cta"
        >
          Cotizar
        </a>
      </div>
      </ul>
    </div>
  );
}

/* ── Package Carousel (translateX, infinite wrap) ── */
function PackageCarousel({ pkgs, category }) {
  const [index, setIndex] = useState(0);
  const [{ cardW, visible }, setLayout] = useState({ cardW: 0, visible: 1 });
  const wrapRef = useRef(null);

  /* Reset index when category changes */
  useEffect(() => { setIndex(0); }, [category]);

  /* Medir el contenedor con ResizeObserver → reacciona a cualquier cambio de ancho */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const calc = () => {
      const w = el.clientWidth;
      if (!w) return;
      const vis = w >= MIN_TWO_CARDS ? 2 : 1;
      const width = Math.floor((w - GAP * (vis - 1)) / vis);
      setLayout((prev) =>
        prev.cardW === width && prev.visible === vis ? prev : { cardW: width, visible: vis }
      );
    };
    calc();
    const ro = new ResizeObserver(calc);
    ro.observe(el);
    return () => ro.disconnect();
  }, [pkgs.length]);

  const maxIndex = Math.max(0, pkgs.length - visible);

  /* Si al redimensionar el índice queda fuera de rango, ajustarlo */
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  if (pkgs.length === 0) {
    return <p className="svc-empty">Paquetes próximamente…</p>;
  }

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const translateX = index * (cardW + GAP);

  return (
    <div className="svc-carousel">
      {/* Flechas — alineadas a la derecha, sobre el track */}
      <div className="svc-carousel__arrows">
        <button className="svc-carousel__arrow" onClick={prev} aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>
        <button className="svc-carousel__arrow" onClick={next} aria-label="Siguiente">
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Track con overflow oculto → altura fija */}
      <div className="svc-carousel__wrap" ref={wrapRef}>
        <div
          className="svc-carousel__track"
          style={{
            transform: `translateX(-${translateX}px)`,
            gap: `${GAP}px`,
          }}
        >
          {pkgs.map((pkg) => (
            <div
              key={pkg.id}
              className="svc-card-wrap"
              style={cardW ? { width: cardW, minWidth: cardW } : { width: '100%' }}
            >
              <PkgCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {maxIndex > 0 && (
        <div className="svc-dots">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              className={`svc-dot${i === index ? ' svc-dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Ir a la posición ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Section ── */
export default function Services() {
  const [activeTab, setActiveTab] = useState(packages[0]?.category ?? '');

  return (
    <section className="services" id="services">
      <div className="container">
        {/* Header */}
        {/* Tabs */}
        {categories.length > 0 && (
          <CategoryTabs
            categories={categories}
            active={activeTab}
            onChange={setActiveTab}
          />
        )}

        {/* Carousel — cambia in-place sin mover la página */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <PackageCarousel
              pkgs={grouped[activeTab] || []}
              category={activeTab}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
