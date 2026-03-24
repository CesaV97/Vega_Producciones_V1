import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';
import './Contact.css';

const info = [
  { icon: <Phone size={20} />, label: 'Teléfono', value: '+1 (787) 000-0000', href: 'tel:+17870000000' },
  { icon: <Mail size={20} />, label: 'Email', value: 'info@produccionesvega.net', href: 'mailto:info@produccionesvega.net' },
  { icon: <MapPin size={20} />, label: 'Ubicación', value: 'Puerto Rico', href: '#' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual form submission logic
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Contáctanos
          </motion.span>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            ¿Listo para tu
            <br />próxima sesión?
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Cuéntanos tu proyecto y te responderemos en menos de 24 horas.
          </motion.p>

          <motion.div
            className="contact__details"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {info.map((i) => (
              <a key={i.label} href={i.href} className="contact__detail">
                <div className="contact__detail-icon">{i.icon}</div>
                <div>
                  <span className="contact__detail-label">{i.label}</span>
                  <span className="contact__detail-value">{i.value}</span>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            className="contact__social"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="contact__social-btn">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="contact__social-btn">
              <Facebook size={20} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="contact__form-wrap"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {sent ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>¡Mensaje enviado!</h3>
              <p>Nos pondremos en contacto contigo pronto.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="name">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="service">Servicio de interés</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Selecciona un servicio</option>
                  <option value="foto">Fotografía</option>
                  <option value="video">Video</option>
                  <option value="estudio">Renta de estudio</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="contact__field">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Enviar mensaje
                <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
