import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const categories = ['Todos', 'Fotografía', 'Video', 'Estudio'];

// Placeholder portfolio items using Unsplash
const items = [
  { id: 1, cat: 'Fotografía', title: 'Retrato Artístico', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80' },
  { id: 2, cat: 'Video', title: 'Spot Comercial', img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80' },
  { id: 3, cat: 'Estudio', title: 'Sesión de Producto', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 4, cat: 'Fotografía', title: 'Branding Personal', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
  { id: 5, cat: 'Video', title: 'Documental', img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80' },
  { id: 6, cat: 'Fotografía', title: 'Moda & Editorial', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80' },
];

export default function Portfolio() {
  const [active, setActive] = useState('Todos');

  const filtered = active === 'Todos' ? items : items.filter((i) => i.cat === active);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Nuestro trabajo
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Portafolio
          </motion.h2>
        </div>

        <div className="portfolio__filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`portfolio__filter ${active === c ? 'portfolio__filter--active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div className="portfolio__grid" layout>
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                className="portfolio__item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="portfolio__item-overlay">
                  <span className="portfolio__item-cat">{item.cat}</span>
                  <h3>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
