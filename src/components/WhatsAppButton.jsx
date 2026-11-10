import { motion } from 'framer-motion';
import './WhatsAppButton.css';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappLink } from './whatsapp';

export default function WhatsAppButton() {
  return (
    <motion.a
      className="wa-btn"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctanos por WhatsApp"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon size={30} />
    </motion.a>
  );
}
