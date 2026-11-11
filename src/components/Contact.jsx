import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from './whatsapp';
import './Contact.css';

// Opciones secundarias — todas con el mismo estilo de píldora
const links = [
  { icon: <Instagram size={22} />, label: 'Instagram', href: 'https://www.instagram.com/vegaproducciones_oficial?xtok=MXRkaGs1ZGZkNTByZw%3D%3D', external: true },
  { icon: <Facebook size={22} />,  label: 'Facebook',  href: 'https://www.facebook.com/share/1DvqYFjxjK/',  external: true },
  { icon: <Youtube size={22} />,   label: 'YouTube',   href: 'https://www.youtube.com/@ProduccionesVega1', external: true },
  { icon: <Phone size={22} />,     label: '81 8079 0057', href: 'tel:+528180790057' },
  { icon: <Phone size={22} />,     label: '81 1004 6160', href: 'tel:+528110046160' },
  { icon: <Mail size={22} />,      label: 'Email',     href: 'mailto:info@produccionesvega.net' },
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
          <p className="contact__hours">Lunes a viernes · 10:00 am – 7:00 pm</p>
        </motion.div>

        {/* ── Opciones secundarias ─────────────────── */}
        <motion.div
          className="contact__social"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="contact__social-btn"
              {...(l.external && { target: '_blank', rel: 'noreferrer' })}
            >
              {l.icon}
              {l.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
