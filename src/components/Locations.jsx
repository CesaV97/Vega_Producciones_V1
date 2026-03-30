import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchLocations } from '../data/fetchLocations';
import LocationCarousel from './LocationCarousel';
import LocationDetail from './LocationDetail';
import './Locations.css';

export default function Locations() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState(null);
  const [selected, setSelected]   = useState(null);

  useEffect(() => {
    fetchLocations()
      .then(setLocations)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const quinceaneras = locations.filter(l => l.types.includes('quinceanera'));
  const bodas        = locations.filter(l => l.types.includes('boda'));

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

          {/* encabezado de sección */}
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
          {/* divider */}
          <div className="locations__divider" />

          {/* carrusel quinceañeras */}
          <LocationCarousel
            title="Quinceañeras"
            locations={quinceaneras}
            onSelect={setSelected}
          />

          <div className="locations__separator" />

          {/* carrusel bodas */}
          <LocationCarousel
            title="Bodas"
            locations={bodas}
            onSelect={setSelected}
          />

        </div>
      </section>

      {selected && (
        <LocationDetail location={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
