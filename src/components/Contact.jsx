import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from './whatsapp';
import './Contact.css';

const secondary = [
  { icon: <Phone size={18} />, label: 'Llamar', value: '+1 (787) 000-0000',         href: 'tel:+17870000000' },
  { icon: <Mail size={18} />,  label: 'Email',  value: 'info@produccionesvega.net', href: 'mailto:info@produccionesvega.net' },
];

const socials = [
  { icon: <Instagram size={22} />, label: 'Instagram', href: 'https://instagram.com' },
  { icon: <Facebook size={22} />,  label: 'Facebook',  href: 'https://facebook.com' },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
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
          <br />próximo evento?
        </motion.h2>

        <motion.p
          className="section-subtitle contact__subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Escríbenos por WhatsApp y cuéntanos tu proyecto.
        </motion.p>

        {/* ── Acción principal ─────────────────────── */}
        <motion.div
          className="contact__main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={whatsappLink('Hola, me gustaría información sobre sus servicios.')}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__wa"
          >
            <WhatsAppIcon size={26} />
            Escríbenos por WhatsApp
          </a>

        </motion.div>

        {/* ── Opciones secundarias ─────────────────── */}
        <motion.div
          className="contact__secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {secondary.map((s) => (
            <a key={s.label} href={s.href} className="contact__detail">
              <span className="contact__detail-icon">{s.icon}</span>
              <span>
                <span className="contact__detail-label">{s.label}</span>
                <span className="contact__detail-value">{s.value}</span>
              </span>
            </a>
          ))}

        </motion.div>

        {/* ── Redes sociales ───────────────────────── */}
        <motion.div
          className="contact__social"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="contact__social-btn"
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
