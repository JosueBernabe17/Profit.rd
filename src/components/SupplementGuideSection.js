import styles from '../styles/SupplementGuideSection.module.css';

const SupplementGuideSection = () => {
  // Array de guías de suplementos
  const guides = [
    {
      id: 1,
      question: "¿Por qué elegir Isolate?",
      description: "El Whey Isolate es la forma más pura de proteína (90-95% proteína). Ideal para personas en etapa de definición o con intolerancia a la lactosa.",
      recommendation: "Perfecto para: Definición muscular, dietas bajas en carbohidratos, post-entreno",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 8v8" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "#fef2f2"
    },
    {
      id: 2,
      question: "¿Cuándo usar Mass Gainer?",
      description: "Los Mass Gainers combinan proteínas de alta calidad con carbohidratos complejos. Diseñados para personas que buscan aumentar peso y masa muscular.",
      recommendation: "Perfecto para: Aumentar peso, ganar masa muscular, personas con metabolismo rápido",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: "#fef2f2"
    },
    {
      id: 3,
      question: "¿Qué es Clear Protein?",
      description: "Proteína transparente que se mezcla como un jugo. Sin lactosa, digestión ultra-rápida y sabores refrescantes únicos en el mercado.",
      recommendation: "Perfecto para: Verano, digestión sensible, variedad de sabores",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
      color: "#fef2f2"
    },
    {
      id: 4,
      question: "¿Los beneficios de la Glutamina?",
      description: "La glutamina acelera la recuperación muscular post-entreno, previene la pérdida de masa muscular y fortalece el sistema inmune. Resultados notables: menos dolor muscular, mayor resistencia y recuperación 50% más rápida.",
      recommendation: "Perfecto para: Recuperación avanzada, entrenamientos intensos, fortalecimiento del sistema inmune",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="8" cy="10" r="2" fill="currentColor"/>
        </svg>
      ),
      color: "#fef2f2"
    },
    {
      id: 5,
      question: "¿Cómo elegir mi suplemento?",
      description: "Todo depende de tu objetivo: definir (Isolate), ganar masa (Gainer),  refrescante(Clear), o recuperación total (Glutamina).",
      recommendation: "¿Dudas? Contáctanos y te ayudamos a elegir el producto perfecto para ti",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 17h.01" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      color: "#fef2f2"
    }
  ];

  return (
    <section className={styles.guideSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>GUÍA DE SUPLEMENTOS</h2>
          <div className={styles.underline}></div>
          <p className={styles.subtitle}>
            Conoce más sobre nuestros productos y descubre cuál es el ideal para tus objetivos fitness.
          </p>
        </div>

        {/* Grid de guías */}
        <div className={styles.guidesGrid}>
          {guides.map((guide) => (
            <div key={guide.id} className={styles.guideCard}>
              
              {/* Header de la card con ícono y pregunta */}
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  {guide.icon}
                </div>
                <h3 className={styles.question}>{guide.question}</h3>
              </div>

              {/* Descripción */}
              <p className={styles.description}>
                {guide.description}
              </p>

              {/* Caja de recomendación */}
              <div 
                className={styles.recommendationBox}
                style={{ backgroundColor: guide.color }}
              >
                <span className={styles.recommendationLabel}>Recomendado para:</span>
                <p className={styles.recommendationText}>
                  {guide.recommendation}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SupplementGuideSection;