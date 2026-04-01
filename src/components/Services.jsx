import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { fetchServices } from '../data/fetchServices';
import './Services.css';

const GAP = 20; // px entre cards

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
        <a href="#contact" className="svc-card__cta"> Más información </a>
      </div>
      </ul>
    </div>
  );
}

/* ── Package Carousel (translateX, infinite wrap) ── */
function PackageCarousel({ pkgs, category }) {
  const [index, setIndex] = useState(0);
  const [cardW, setCardW] = useState(340);
  const wrapRef = useRef(null);

  /* Reset index when category changes */
  useEffect(() => { setIndex(0); }, [category]);

  /* Measure available width → card width */
  useEffect(() => {
    const calc = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.offsetWidth;
      const visible = w >= 740 ? 2 : 1;
      setCardW(Math.floor((w - GAP * (visible - 1)) / visible));
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  if (pkgs.length === 0) {
    return <p className="svc-empty">Paquetes próximamente…</p>;
  }

  const visible  = wrapRef.current?.offsetWidth >= 740 ? 2 : 1;
  const maxIndex = Math.max(0, pkgs.length - visible);

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
              style={{ width: cardW, minWidth: cardW }}
            >
              <PkgCard pkg={pkg} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      {pkgs.length > 1 && (
        <div className="svc-dots">
          {pkgs.map((_, i) => (
            <button
              key={i}
              className={`svc-dot${i === index ? ' svc-dot--active' : ''}`}
              onClick={() => setIndex(Math.min(i, maxIndex))}
              aria-label={`Paquete ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Section ── */
export default function Services() {
  const [packages,  setPackages]  = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetchServices()
      .then((data) => {
        setPackages(data);
        if (data.length > 0) setActiveTab(data[0].category);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const categories = [...new Set(packages.map((p) => p.category))];
  const grouped    = {};
  categories.forEach((cat) => {
    grouped[cat] = packages.filter((p) => p.category === cat);
  });

  if (loading) return (
    <section className="services" id="services">
      <div className="container svc-loading">Cargando paquetes…</div>
    </section>
  );

  if (error) return (
    <section className="services" id="services">
      <div className="container svc-loading">Error al cargar paquetes.</div>
    </section>
  );

  return (
    <section className="services" id="services">
      <div className="container">
        {/* Header */}
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Nuestros paquetes
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}          
        >
         Momentos únicos que vivirán para siempre
        </motion.h2>
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
