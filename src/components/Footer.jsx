import { Instagram, Facebook, Youtube } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/logo-vega.png" alt="Vega Producciones" />
          <p>Estudio · Foto · Video</p>
          <p className="footer__tagline">#SomosTuMejorOpcion</p>
        </div>

        <div className="footer__links">
          <h4>Servicios</h4>
          <a href="#services">Fotografía</a>
          <a href="#services">Video</a>
          <a href="#services">Renta de Estudio</a>
        </div>

        <div className="footer__links">
          <h4>Empresa</h4>
          <a href="#about">Nosotros</a>
          <a href="#portfolio">Portafolio</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="footer__social">
          <h4>Síguenos</h4>
          <div className="footer__social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <span>© {year} Vega Producciones. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
