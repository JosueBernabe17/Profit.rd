// src/components/WhyChooseSection.js
import styles from '../styles/WhyChooseSection.module.css';

const WhyChooseSection = () => {
  // Array de beneficios de suplementos
  const benefits = [
    {
      id: 1,
      title: "Isolate",
      subtitle: "Limpieza y Definición",
      description: "Proteína pura sin carbohidratos ni grasas. Perfecta para cutting y deportistas que buscan proteína pura sin carbohidratos.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12l-4-4 1.41-1.41L11 12.17l6.59-6.59L19 7l-8 8z" fill="currentColor"/>
        </svg>
      ),
      buttonText: "Clear Protein"
    },
    {
      id: 2,
      title: "Mass Gainer", 
      subtitle: "Volumen y Masa",
      description: "Combinación perfecta de proteínas y carbohidratos para ganar peso y masa muscular.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1" fill="none"/>
        </svg>
      ),
      buttonText: "Mass Gainer"
    },
    {
      id: 3,
      title: "Clear",
      subtitle: "Digestión Fácil", 
      description: "Proteína transparente sin lactosa, ideal para personas con sensibilidad digestiva.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      buttonText: "Whey Isolate"
    },
    {
      id: 4,
      title: "Glutamina",
      subtitle: "Recuperación Total",
      description: "Acelera la recuperación muscular, previene el catabolismo y fortalece el sistema inmune. Resultados visibles en menos tiempo.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="8" cy="10" r="2" fill="currentColor"/>
          <path d="M14 10h4" stroke="currentColor" strokeWidth="2"/>
          <path d="M2 21l20-18" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      buttonText: "Glutamina Premium"
    },
    {
      id: 5,
      title: "Creatina",
      subtitle: "Fuerza y Potencia Explosiva",
      description: "Aumenta el rendimiento en entrenamientos de alta intensidad.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
        </svg>
      ),
      buttonText: "Creatina"
    },
    {
      id: 6,
      title: "BCAA",
      subtitle: "Aminoácidos Esenciales", 
      description: "Previene el catabolismo muscular y mejora la recuperación durante el entrenamiento.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
          <path d="M4 12a8 8 0 0 1 8-8V2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 4a8 8 0 0 1 8 8h1.5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M20 12a8 8 0 0 1-8 8v1.5" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 20a8 8 0 0 1-8-8H2.5" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      buttonText: "BCAA"
    }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "18297542767"; // 👈 CAMBIA POR TU NÚMERO
    const message = "¡Hola! Me interesa conocer más sobre los beneficios de sus suplementos Pro Fit. ¿Podrían asesorarme?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>¿POR QUÉ ELEGIR PRO FIT?</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            Cada suplemento está diseñado para un objetivo específico. Conoce cuál es el ideal para ti.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit) => (
            <div key={benefit.id} className={styles.benefitCard}>
              
              {/* Ícono */}
              <div className={styles.iconContainer}>
                {benefit.icon}
              </div>

              {/* Contenido */}
              <div className={styles.cardContent}>
                <h3 className={styles.benefitTitle}>
                  {benefit.title} = {benefit.subtitle}
                </h3>
                
                <p className={styles.benefitDescription}>
                  {benefit.description}
                </p>

                {/* Botón del producto */}
                <div className={styles.productButton}>
                  {benefit.buttonText}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Botón flotante de WhatsApp */}
        <button 
          className={styles.floatingWhatsApp}
          onClick={handleWhatsAppContact}
          title="Contactar por WhatsApp"
        >
          <svg 
            width="28" 
            height="28" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506z"/>
          </svg>
        </button>

      </div>
    </section>
  );
};

export default WhyChooseSection;