import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, CheckCircle2, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import './LocationDetail.css';

export default function LocationDetail({ location, onClose }) {
  const [galleryIndex, setGalleryIndex] = useState(0);

  // cerrar con Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const prevPhoto = () =>
    setGalleryIndex((i) => (i - 1 + location.gallery.length) % location.gallery.length);
  const nextPhoto = () =>
    setGalleryIndex((i) => (i + 1) % location.gallery.length);

  return (
    <AnimatePresence>
      <motion.div
        className="ld-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="ld-panel"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Header ─────────────────────────── */}
          <div className="ld-header">
            <div className="ld-header__text">
              <nav className="ld-breadcrumb">
                <span onClick={onClose}>Locaciones</span>
                <span>/</span>
                <span>{location.name}</span>
              </nav>
              <h2 className="ld-title">{location.name}</h2>
              <span className="ld-category">{location.category}</span>
            </div>
            <button className="ld-close" onClick={onClose} aria-label="Cerrar">
              <X size={20} />
            </button>
          </div>

          {/* ── Contenido scrolleable ───────────── */}
          <div className="ld-body">

            {/* ── Características + Mapa ─────────── */}
            <div className="ld-grid">
              {/* Características */}
              <div className="ld-section">
                <div className="ld-section__label">
                  <CheckCircle2 size={15} />
                  Características del lugar
                </div>
                <ul className="ld-characteristics">
                  {location.characteristics.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              {/* Mapa */}
              <div className="ld-section">
                <div className="ld-section__label">
                  <MapPin size={15} />
                  Ubicación
                </div>
                <div className="ld-map">
                  <iframe
                    src={location.mapEmbedUrl}
                    title={`Mapa ${location.name}`}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="ld-address">
                  <MapPin size={13} />
                  {location.mapAddress}
                </p>
              </div>
            </div>

            {/* ── Recomendaciones ────────────────── */}
            <div className="ld-section ld-section--full">
              <div className="ld-section__label">
                <Info size={15} />
                Recomendaciones para el área
              </div>
              <p className="ld-recommendations">{location.recommendations}</p>
            </div>

            {/* ── Galería ────────────────────────── */}
            <div className="ld-section ld-section--full">
              <div className="ld-section__label">
                <span style={{ fontSize: 15 }}>🖼</span>
                Galería
              </div>

              {/* foto principal grande */}
              <div className="ld-gallery-main">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={galleryIndex}
                    src={location.gallery[galleryIndex]}
                    alt={`${location.name} ${galleryIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  />
                </AnimatePresence>
                <button className="ld-gallery-arrow ld-gallery-arrow--prev" onClick={prevPhoto}>
                  <ChevronLeft size={22} />
                </button>
                <button className="ld-gallery-arrow ld-gallery-arrow--next" onClick={nextPhoto}>
                  <ChevronRight size={22} />
                </button>
                <div className="ld-gallery-count">
                  {galleryIndex + 1} / {location.gallery.length}
                </div>
              </div>

              {/* thumbnails */}
              <div className="ld-gallery-thumbs">
                {location.gallery.map((img, i) => (
                  <button
                    key={i}
                    className={`ld-thumb ${i === galleryIndex ? 'ld-thumb--active' : ''}`}
                    onClick={() => setGalleryIndex(i)}
                  >
                    <img src={img} alt={`Thumb ${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
