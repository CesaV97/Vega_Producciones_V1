import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fetchLocations } from '../data/fetchLocations';
import LocationCarousel from './LocationCarousel';
import LocationDetail from './LocationDetail';
import './Locations.css';

/* ── Category Tabs ── */
function CategoryTabs({ categories, active, onChange }) {
  return (
    <motion.nav
      className="loc-tabs"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          className={`loc-tab${active === cat ? ' loc-tab--active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {cat}
          {active === cat && (
            <motion.span
              className="loc-tab__indicator"
              layoutId="loc-tab-indicator"
              transition={{ type: 'spring', stiffness: 400, damping: 36 }}
            />
          )}
        </button>
      ))}
    </motion.nav>
  );
}

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);
  const [selected, setSelected]   = useState(null);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    fetchLocations()
      .then((data) => {
        setLocations(data);
        if (data.length > 0) setActiveTab(data[0].category);
      })
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  /* Categorías únicas en orden de aparición */
  const categories = [...new Set(locations.map((l) => l.category))];

  /* Locaciones de la categoría activa */
  const activeLocs = locations.filter((l) => l.category === activeTab);

  if (loading) return (
    <section className="locations" id="locations">
      <div className="container locations__loading">Cargando locaciones...</div>
    </section>
  );

  if (error) return (
    <section className="locations" id="locations">
      <div className="container locations__error">Error al cargar locaciones.</div>
    </section>
  );

  return (
    <>
      <section className="locations" id="locations">
        <div className="container">

          {/* Encabezado */}
          <div className="locations__header">
            <motion.span
              className="section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Nuestras locaciones
            </motion.span>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Elige el escenario perfecto para ti
            </motion.h2>
          </div>

          {/* Divider + Tabs */}
          <div className="locations__divider" />

          {categories.length > 0 && (
            <CategoryTabs
              categories={categories}
              active={activeTab}
              onChange={setActiveTab}
            />
          )}

          {/* Carrusel — cambia in-place al seleccionar tab */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <LocationCarousel
                title={activeTab}
                locations={activeLocs}
                onSelect={setSelected}
              />
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {selected && (
        <LocationDetail location={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
