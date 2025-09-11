// src/components/Footer.js
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "18297542767"; 
    const message = "¡Hola! Me interesa conocer más sobre sus productos Pro Fit RD";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Contenido principal del footer */}
        <div className={styles.footerContent}>
          
          {/* Columna 1: Información de la empresa */}
          <div className={styles.companyInfo}>
            <h3 className={styles.companyName}>PRO FIT RD</h3>
            <p className={styles.companyTagline}>TIENDA DE PROTEÍNAS Y SUPLEMENTOS</p>
            
            <p className={styles.companyDescription}>
              Tu tienda de confianza para suplementos de la más alta calidad. Ayudamos a atletas y 
              entusiastas del fitness a alcanzar sus objetivos con productos originales y asesoría 
              especializada.
            </p>

            {/* Botones de acción */}
            <div className={styles.actionButtons}>
              <button className={styles.whatsappButton} onClick={handleWhatsApp}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506z"/>
                </svg>
                WhatsApp
              </button>
              
              <button className={styles.catalogButton}>
                Ver Catálogo
              </button>
            </div>
          </div>

          {/* Columna 2: Información de contacto */}
          <div className={styles.contactInfo}>
            <h4 className={styles.columnTitle}>Contacto</h4>
            
            <div className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <p className={styles.contactText}>+1 (829) 754-2767</p>
                <p className={styles.contactSubtext}>WhatsApp disponible</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <p className={styles.contactText}>Santo Domingo</p>
                <p className={styles.contactSubtext}>República Dominicana</p>
              </div>
            </div>

            <div className={styles.contactItem}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
              </svg>
              <div>
                <p className={styles.contactText}>Lun - Sáb: 8AM - 7PM</p>
                <p className={styles.contactSubtext}>Dom: closed </p>
              </div>
            </div>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div className={styles.quickLinks}>
            <h4 className={styles.columnTitle}>Enlaces Rápidos</h4>
            
            <ul className={styles.linksList}>
              <li>
                <button onClick={() => scrollToSection('productos')} className={styles.footerLink}>
                  Nuestros Productos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('beneficios')} className={styles.footerLink}>
                  Beneficios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonios')} className={styles.footerLink}>
                  Testimonios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('guia')} className={styles.footerLink}>
                  Guía de Suplementos
                </button>
              </li>
            </ul>

            {/* Características destacadas */}
            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span className={styles.featureText}>Productos 100% Originales</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span className={styles.featureText}>Envío Rápido y Seguro</span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>✓</span>
                <span className={styles.featureText}>Asesoría Especializada</span>
              </div>
            </div>
          </div>

        </div>

        {/* Línea divisoria */}
        <div className={styles.divider}></div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; 2025 Pro Fit RD. Todos los derechos reservados.</p>
          <p className={styles.madeWith}>
            Hecho para los amantes del fitness
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;