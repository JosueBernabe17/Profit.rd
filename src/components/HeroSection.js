import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "18297542767"; // 👈 CAMBIA POR TU NÚMERO
    const message = "¡Hola! Me interesa conocer más sobre sus proteínas y suplementos";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        
        {/* Logo principal */}
            <div className={styles.logoContainer}>
            <img 
                src="/logo.png" 
                alt="Pro Fit RD Logo" 
                className={styles.logo}
            />
            </div>
        
        {/* Sección central con palabras clave */}
        <div className={styles.keywordsSection}>
          <h2 className={styles.keyword}>CONSTANCIA</h2>
          
          <div className={styles.supplementsLine}>
            <span className={styles.arrow}>→</span>
            <span className={styles.supplements}>SUPLEMENTOS</span>
            <span className={styles.arrow}>→</span>
          </div>
          
          <h2 className={styles.keyword}>RESULTADOS</h2>
        </div>
        
        {/* Descripción de productos */}
        <div className={styles.description}>
          <p className={styles.descriptionText}>
            Los mejores suplementos para alcanzar tus objetivos fitness.
          </p>
          <p className={styles.productsList}>
            Whey Isolate, Mass Gainer, Clear Protein y Glutamina.
          </p>
          <p className={styles.guarantee}>
            Calidad garantizada, resultados comprobados.
          </p>
        </div>
        
        {/* Botones de acción */}
        <div className={styles.buttonsContainer}>
          <button 
            className={styles.productsButton}
            onClick={scrollToProducts}
          >
            Ver Productos →
          </button>
          
          <button 
            className={styles.whatsappButton}
            onClick={handleWhatsApp}
          >
            📱 WhatsApp
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;