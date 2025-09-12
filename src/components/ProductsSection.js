// src/components/ProductsSection.js
import { useState } from 'react';
import styles from '../styles/ProductsSection.module.css';

// Componente Modal de Vista Detalle
const ProductDetailModal = ({ product, onClose, onWhatsApp }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* Botón de cerrar */}
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </button>

        {/* Header del modal */}
        <div className={styles.modalHeader}>
          <div className={styles.modalImageContainer}>
            <img 
              src={product.image} 
              alt={product.name}
              className={styles.modalImage}
            />
          </div>
          
          <div className={styles.modalBasicInfo}>
            <span className={styles.modalCategoryTag}>
              {product.category.toUpperCase()}
            </span>
            <h2 className={styles.modalTitle}>{product.name}</h2>
              <div className={styles.productDetails}>
          <div className={styles.priceInfo}>
            <span className={styles.modalPrice}>
                {product.currency}{product.price?.toLocaleString()}
            </span>
            </div>
         <div className={styles.productSpecs}>
        <div className={styles.specItem}>
            <span className={styles.specLabel}>Peso:</span>
            <span className={styles.specValue}>{product.detailedInfo.peso}</span>
      </div>
      <div className={styles.specItem}>
        <span className={styles.specLabel}>Sabor:</span>
        <span className={styles.specValue}>{product.detailedInfo.sabor}</span>
      </div>
      {product.detailedInfo.servicios && (
        <div className={styles.specItem}>
          <span className={styles.specLabel}>Servicios:</span>
          <span className={styles.specValue}>{product.detailedInfo.servicios}</span>
        </div>
      )}
    </div>
  </div>
            <p className={styles.modalDescription}>{product.description}</p>
          </div>
        </div>

        {/* Resumen del producto */}
        <div className={styles.modalSummary}>
          <h3 className={styles.summaryTitle}>Resumen del Producto</h3>
          <p className={styles.summaryText}>{product.detailedInfo.summary}</p>
        </div>

        {/* Secciones expandibles */}
        <div className={styles.expandableSections}>
          
          {/* Información Nutricional */}
          <div className={styles.expandableSection}>
            <button 
              className={styles.sectionHeader}
              onClick={() => toggleSection('nutritional')}
            >
              <span className={styles.sectionTitle}>
                {product.detailedInfo.nutritionalInfo.title}
              </span>
              <svg 
                className={`${styles.chevronIcon} ${expandedSections.nutritional ? styles.rotated : ''}`}
                width="20" height="20" viewBox="0 0 24 24" fill="none"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            
            {expandedSections.nutritional && (
              <div className={styles.sectionContent}>
                <ul className={styles.contentList}>
                  {product.detailedInfo.nutritionalInfo.content.map((item, index) => (
                    <li key={index} className={styles.contentItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cómo y Cuándo Tomarlo */}
          <div className={styles.expandableSection}>
            <button 
              className={styles.sectionHeader}
              onClick={() => toggleSection('howToUse')}
            >
              <span className={styles.sectionTitle}>
                {product.detailedInfo.howToUse.title}
              </span>
              <svg 
                className={`${styles.chevronIcon} ${expandedSections.howToUse ? styles.rotated : ''}`}
                width="20" height="20" viewBox="0 0 24 24" fill="none"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            
            {expandedSections.howToUse && (
              <div className={styles.sectionContent}>
                <ul className={styles.contentList}>
                  {product.detailedInfo.howToUse.content.map((item, index) => (
                    <li key={index} className={styles.contentItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Beneficios Específicos */}
          <div className={styles.expandableSection}>
            <button 
              className={styles.sectionHeader}
              onClick={() => toggleSection('benefits')}
            >
              <span className={styles.sectionTitle}>
                {product.detailedInfo.benefits.title}
              </span>
              <svg 
                className={`${styles.chevronIcon} ${expandedSections.benefits ? styles.rotated : ''}`}
                width="20" height="20" viewBox="0 0 24 24" fill="none"
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            
            {expandedSections.benefits && (
              <div className={styles.sectionContent}>
                <ul className={styles.contentList}>
                  {product.detailedInfo.benefits.content.map((item, index) => (
                    <li key={index} className={styles.contentItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Botón de WhatsApp */}
        <div className={styles.modalFooter}>
          <button 
            className={styles.modalWhatsAppButton}
            onClick={() => onWhatsApp(product.name)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506z"/>
            </svg>
            Ordenar por WhatsApp
          </button>
        </div>

      </div>
    </div>
  );
};

const ProductsSection = () => {
  // Estados para la navegación progresiva y modal
  const [showCatalog, setShowCatalog] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Array de productos con información detallada
  const products = [
    {
      id: 1,
      name: "WHEY ISOLATE",
      category: "proteina",
      description: "Proteína de rápida absorción ideal para después del entrenamiento.",
      image: "/products/whey-isolate.png",
      categoryColor: "#dc2626",
      price: 2500,
      currency: "RD$",
      detailedInfo: {
        summary: "Proteína de suero aislada con 90% de pureza, libre de lactosa y carbohidratos. Ideal para definición muscular y deportistas con sensibilidad digestiva.",
        peso: "2 lbs(907g)",
        servicios: "30 aprox",
        sabor: "Chocolate",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 30g)",
          content: [
            "Proteína: 25-27g",
            "Carbohidratos: 0-1g", 
            "Grasas: 0-0.5g",
            "Calorías: 110-120",
            "BCAA: 5.5g",
            "Leucina: 2.7g"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "🕐 Post-entreno: 30-45g inmediatamente después del entrenamiento",
            "🌅 En ayunas: 25-30g para preservar masa muscular",
            "🌙 Antes de dormir: 20-25g para recuperación nocturna",
            "💧 Mezclar con 250-300ml de agua o leche vegetal",
            "⚡ Absorción rápida: 30-60 minutos"
          ]
        },
        benefits: {
          title: "Beneficios Específicos",
          content: [
            "✅ Máxima pureza - 90% proteína",
            "✅ Libre de lactosa y carbohidratos",
            "✅ Ideal para etapa de definición",
            "✅ Digestión fácil y rápida",
            "✅ Rico en aminoácidos esenciales",
            "✅ Ayuda a preservar masa muscular"
          ]
        }
      }
    },
    {
      id: 2,
      name: "EVL MASS GAINER", 
      category: "proteina",
      description: "Ideal para aumentar masa muscular y peso corporal",
      image: "/products/mass-gainer.png",
      categoryColor: "#dc2626",
      price: 3500,
      currency: "RD$",
      detailedInfo: {
        summary: "Fórmula completa con proteínas de alta calidad y carbohidratos complejos. Diseñado para atletas que buscan aumentar peso y masa muscular de forma efectiva.",
        peso:  "6 lbs(2727g)",
        sabor:  "Vainilla",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 100g)",
          content: [
            "Proteína: 25-30g",
            "Carbohidratos: 50-60g",
            "Grasas: 3-5g", 
            "Calorías: 350-400",
            "Creatina: 3g",
            "Vitaminas y minerales añadidos"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "🕐 Post-entreno: 100g con 400ml de leche",
            "🥛 Entre comidas: 50-75g como snack",
            "🌅 Desayuno: 75g con avena y frutas",
            "💪 Días de entrenamiento: 2 porciones",
            "🔄 Días de descanso: 1 porción"
          ]
        },
        benefits: {
          title: "Beneficios Específicos", 
          content: [
            "✅ Aumento de peso efectivo",
            "✅ Crecimiento de masa muscular",
            "✅ Energía sostenida",
            "✅ Recuperación acelerada",
            "✅ Fórmula completa con vitaminas",
            "✅ Sabores deliciosos"
          ]
        }
      }
    },
    {
      id: 3,
      name: "CLEAR PREMIUM",
      category: "proteina", 
      description: "Proteína pura para definición y recuperación muscular.",
      image: "/products/clear-protein.png",
      categoryColor: "#dc2626",
      price: 2500,
      currency: "RD$",
      detailedInfo: {
        summary: "Proteína transparente e innovadora que se mezcla como una bebida refrescante. Sin lácteos, sin espuma, con sabores frutales únicos.",
        peso: "2 lbs(907g)",
        servicios: "30 aprox",
        sabor: "Cookies & cream",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 25g)",
          content: [
            "Proteína: 20-22g",
            "Carbohidratos: 0g",
            "Grasas: 0g",
            "Calorías: 80-90",
            "Electrolitos añadidos",
            "Sin lactosa, sin gluten"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "🧊 Con agua fría: 25g en 400-500ml",
            "🕐 Post-entreno: Inmediatamente después",
            "🏃‍♂️ Durante ejercicio: Para entrenamientos largos",
            "☀️ Verano: Alternativa refrescante",
            "⚡ Mezclar suavemente, no batir fuerte"
          ]
        },
        benefits: {
          title: "Beneficios Específicos",
          content: [
            "✅ Digestión ultra ligera",
            "✅ Sabores frutales refrescantes", 
            "✅ Sin hinchazón ni pesadez",
            "✅ Transparente como jugo",
            "✅ Perfecto para verano",
            "✅ Rico en electrolitos"
          ]
        }
      }
    },
    {
      id: 4,
      name: "BPI SPORTS ISO HD",
      category: "proteina",
      description: "Proteína de suero hidrolizada para una absorción ultra rápida.", 
      image: "/products/bpi-sports-iso-hd.png",
      categoryColor: "#dc2626",
      price: 2600,
      currency: "RD$",
      detailedInfo: {
        summary: "Proteína hidrolizada de máxima calidad con absorción instantánea. Procesada para eliminar lactosa y maximizar la biodisponibilidad.",
        peso: "2 lbs(907g)",
        servicios: "30 aprox",
        sabor: "Vainilla",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 30g)",
          content: [
            "Proteína: 25g",
            "Carbohidratos: 1g",
            "Grasas: 0.5g",
            "Calorías: 110",
            "Aminoácidos libres: 12g",
            "Enzimas digestivas añadidas"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "🏋️ Post-entreno: 30g inmediatamente",
            "⚡ Absorción: 15-30 minutos",
            "💧 Con agua: Mejor absorción",
            "🎯 Competidores: Antes y después",
            "🔥 Cutting: Mantiene masa muscular"
          ]
        },
        benefits: {
          title: "Beneficios Específicos",
          content: [
            "✅ Absorción ultra rápida",
            "✅ Pre-digerida enzimáticamente",
            "✅ Cero hinchazón",
            "✅ Máxima biodisponibilidad",
            "✅ Ideal para competidores",
            "✅ Fórmula premium"
          ]
        }
      }
    },
    {
      id: 5,
      name: "RULE 1 MASS GAINER",
      category: "proteina",
      description: "Fórmula avanzada para un aumento de masa muscular limpio y efectivo.", 
      image: "/products/rule1-mass-gainer.png",
      categoryColor: "#dc2626",
      price: 3800,
      currency: "RD$",
      detailedInfo: {
        summary: "Mass gainer premium con carbohidratos de calidad y proteínas de múltiples fuentes. Sin azúcares añadidos, ideal para ganancia de peso limpia.",
        peso: "5.5 lbs(2495g)",
        sabor: "Cookies & cream",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 85g)",
          content: [
            "Proteína: 25g (multi-fuente)",
            "Carbohidratos: 40g complejos",
            "Grasas: 2g",
            "Calorías: 280",
            "Fibra: 3g",
            "Sin azúcares añadidos"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "🥛 Con leche: 85g + 300ml leche",
            "🕐 Post-entreno: Para recuperación",
            "🍌 Con frutas: Añadir plátano o avena",
            "📈 Progresivo: Empezar con media porción",
            "🔄 2-3 veces al día según objetivo"
          ]
        },
        benefits: {
          title: "Beneficios Específicos",
          content: [
            "✅ Ganancia de peso limpia",
            "✅ Sin azúcares procesados",
            "✅ Digestión mejorada",
            "✅ Proteínas de múltiples fuentes",
            "✅ Carbohidratos de calidad",
            "✅ Marca reconocida mundialmente"
          ]
        }
      }
    },
    {
      id: 6,
      name: "CLEAR PREMIUM",
      category: "proteina", 
      description: "Proteína pura para definición y recuperación muscular.",
      image: "/products/clear-protein-c.png",
      categoryColor: "#dc2626",
      price: 2500,
      currency: "RD$",
      detailedInfo: {
        summary: "Segunda presentación de nuestra proteína transparente con sabor diferente. Misma calidad premium, experiencia refrescante única.",
        peso: "2 lbs(907g)",
        servicios: "30 aprox",
        sabor: "Doble Chocolate",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 25g)",
          content: [
            "Proteína: 20-22g",
            "Carbohidratos: 0g",
            "Grasas: 0g", 
            "Calorías: 80-90",
            "Electrolitos añadidos",
            "Sin lactosa, sin gluten"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "🧊 Con agua fría: 25g en 400-500ml",
            "🕐 Post-entreno: Inmediatamente después",
            "🏃‍♂️ Durante ejercicio: Para entrenamientos largos",
            "☀️ Verano: Alternativa refrescante",
            "⚡ Mezclar suavemente, no batir fuerte"
          ]
        },
        benefits: {
          title: "Beneficios Específicos",
          content: [
            "✅ Digestión ultra ligera",
            "✅ Sabores frutales refrescantes",
            "✅ Sin hinchazón ni pesadez",
            "✅ Transparente como jugo", 
            "✅ Perfecto para verano",
            "✅ Rico en electrolitos"
          ]
        }
      }
    },
    {
      id: 7,
      name: "MuscleTech CREATINA",
      category: "creatina",
      description: "Aumenta tu fuerza y potencia en entrenamientos de alta intensidad.",
      image: "/products/creatinaMuscle.png", 
      categoryColor: "#dc2626",
      price: 2500,
      currency: "RD$",
      detailedInfo: {
        summary: "Creatina monohidrato pura de MuscleTech. Incrementa la fuerza, potencia y volumen muscular. Ideal para entrenamientos de alta intensidad.",
        peso: "400g",
        servicios: "80 aprox",
        sabor: "sin sabor",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 5g)",
          content: [
            "Creatina Monohidrato: 5g",
            "Pureza: 99.9%",
            "Calorías: 0",
            "Carbohidratos: 0g",
            "Micronizada para mejor absorción",
            "Sin sabor, sin azúcar"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "💪 Carga: 20g por 5 días (4 dosis de 5g)",
            "🔄 Mantenimiento: 5g diarios",
            "🕐 Timing: Pre o post-entreno",
            "🍇 Con carbohidratos: Mejora absorción",
            "💧 Mucha agua: Mantente hidratado"
          ]
        },
        benefits: {
          title: "Beneficios Específicos",
          content: [
            "✅ Aumenta fuerza explosiva",
            "✅ Mejora potencia muscular",
            "✅ Incrementa volumen muscular",
            "✅ Acelera recuperación",
            "✅ Mejora rendimiento anaeróbico",
            "✅ Marca líder en investigación"
          ]
        }
      }
    },
    {
      id: 8,
      name: "GLUTAMINA",
      category: "recuperacion",
      description: "Máxima recuperación muscular y fortalecimiento del sistema inmune.", 
      image: "/products/glutamine.png",
      categoryColor: "#dc2626",
      price: 1200,
      currency: "RD$",
      detailedInfo: {
        summary: "L-Glutamina pura para acelerar la recuperación muscular y fortalecer el sistema inmunológico. Esencial para atletas de alto rendimiento.",
        peso: "300g",
        servicios: "60 aprox",
        sabor: "Sin sabor",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 5g)",
          content: [
            "L-Glutamina: 5g",
            "Pureza: 99%",
            "Calorías: 0",
            "Forma libre de aminoácido",
            "Sin aditivos artificiales",
            "Grado farmacéutico"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "🕐 Post-entreno: 5-10g inmediatamente",
            "🌙 Antes de dormir: 5g para recuperación",
            "🤒 Enfermedad: 10-15g para inmunidad",
            "💧 Con agua: Absorción óptima",
            "🔄 Dividir dosis: 2-3 veces al día"
          ]
        },
        benefits: {
          title: "Beneficios Específicos",
          content: [
            "✅ Acelera recuperación muscular",
            "✅ Fortalece sistema inmune",
            "✅ Reduce catabolismo muscular",
            "✅ Mejora la síntesis proteica",
            "✅ Ayuda en la hidratación celular",
            "✅ Esencial para intestino sano"
          ]
        }
      }
    },
    {
      id: 9, 
      name: "CREATINA NUTREX MONOHIDRATO",
      category: "creatina",
      description: "Mejora tu rendimiento físico y aumenta la masa muscular magra.",
      image: "/products/creatinaNutrex.png", 
      categoryColor: "#dc2626",
      price: 1300,
      currency: "RD$",
      detailedInfo: {
        summary: "Creatina monohidrato de Nutrex Research con pureza garantizada. Micronizada para disolución perfecta y absorción máxima.",
        peso: "300g",
        servicios: "60 aprox",
        sabor: "sin sabor",
        nutritionalInfo: {
          title: "Información Nutricional (por porción 5g)",
          content: [
            "Creatina Monohidrato: 5g",
            "Pureza: 99.5%+",
            "Calorías: 0",
            "Micronizada 200 mesh",
            "Sin rellenos ni aditivos",
            "Testada por terceros"
          ]
        },
        howToUse: {
          title: "Cómo y Cuándo Tomarlo",
          content: [
            "🚀 Carga opcional: 20g x 5 días",
            "💪 Mantenimiento: 3-5g diarios",
            "🕐 Cualquier momento: No depende del timing",
            "🥤 Con bebida: Jugo o batido",
            "🔄 Consistencia: Todos los días"
          ]
        },
        benefits: {
          title: "Beneficios Específicos",
          content: [
            "✅ Incrementa masa muscular magra",
            "✅ Mejora rendimiento físico",
            "✅ Aumenta potencia explosiva",
            "✅ Disolución perfecta",
            "✅ Sin sabor residual",
            "✅ Calidad Nutrex garantizada"
          ]
        }
      }
    },
  ];

  // Definición de categorías
  const categories = {
    todas: { name: "Todos los Productos", count: products.length },
    proteina: { name: "Proteínas", count: products.filter(p => p.category === 'proteina').length },
    creatina: { name: "Creatinas", count: products.filter(p => p.category === 'creatina').length },
    recuperacion: { name: "Recuperación", count: products.filter(p => p.category === 'recuperacion').length },
    aminoacidos: { name: "Aminoácidos", count: 0 } // Vacía intencionalmente
  };

  // Filtrar productos según categoría seleccionada
  const filteredProducts = selectedCategory === 'todas' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleWhatsApp = (productName) => {
    const phoneNumber = "18297542767"; 
    const message = `¡Hola! Me interesa el producto: ${productName}. ¿Podrías darme más información sobre precio y disponibilidad?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCustomOrder = () => {
    const phoneNumber = "18297542767";
    const message = "¡Hola! Estoy buscando aminoácidos que no veo en su catálogo. ¿Podrían ayudarme con productos por encargo?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInstagram = () => {
    const instagramUrl = "https://www.instagram.com/pro.fitrd?igsh=aGR5eTFpbHRycW8y&utm_source=qr";
    window.open(instagramUrl, '_blank');
  };

  const handleCatalogToggle = () => {
    setShowCatalog(!showCatalog);
    if (!showCatalog) {
      setShowCategories(true);
    } else {
      setShowCategories(false);
      setSelectedCategory('todas');
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="productos" className={styles.productsSection}>
      <div className={styles.container}>
        
        {/* Título */}
        <div className={styles.header}>
          <h2 className={styles.title}>NUESTROS PRODUCTOS</h2>
          <div className={styles.underline}></div>
        </div>

        {/* Caja de oferta especial */}
        <div className={styles.offerBox}>
          <h3 className={styles.offerTitle}>¡OFERTA ESPECIAL!</h3>
          <p className={styles.offerDiscount}>5% OFF - OFERTA DE LA SEMANA</p>
          <p className={styles.offerCta}>¡NO TE QUEDES SIN LA TUYA!</p>
        </div>

        {/* Navegación progresiva del catálogo */}
        <div className={styles.catalogNavigation}>
          
          {/* Botón principal de catálogo */}
          <div className={styles.catalogMainButton}>
            <button 
              className={`${styles.catalogButton} ${showCatalog ? styles.active : ''}`}
              onClick={handleCatalogToggle}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none"
                className={styles.catalogIcon}
              >
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" fill="none"/>
              </svg>
              VER CATÁLOGO COMPLETO
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none"
                className={`${styles.chevron} ${showCatalog ? styles.rotated : ''}`}
              >
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          {/* Sección de categorías */}
          {showCategories && (
            <div className={styles.categoriesSection}>
              <h3 className={styles.categoriesTitle}>CATEGORÍAS</h3>
              <div className={styles.categoriesGrid}>
                {Object.entries(categories).map(([key, category]) => (
                  <button
                    key={key}
                    className={`${styles.categoryButton} ${selectedCategory === key ? styles.selected : ''}`}
                    onClick={() => handleCategorySelect(key)}
                  >
                    <span className={styles.categoryName}>{category.name}</span>
                    <span className={styles.categoryCount}>({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Contador de resultados */}
          {showCategories && (
            <div className={styles.resultsCounter}>
              Mostrando {filteredProducts.length} productos
              {selectedCategory !== 'todas' && ` en ${categories[selectedCategory].name}`}
            </div>
          )}
        </div>

        {/* Mensaje especial para categorías vacías */}
        {selectedCategory === 'aminoacidos' && (
          <div className={styles.emptyCategory}>
            <div className={styles.emptyCategoryIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7v5" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="17" r="1" fill="currentColor"/>
              </svg>
            </div>
            <h3 className={styles.emptyCategoryTitle}>Aminoácidos - Próximamente</h3>
            <p className={styles.emptyCategoryDescription}>
              No disponible en la página - Pídelo por encargo
            </p>
            <div className={styles.emptyCategoryButtons}>
              <button 
                className={styles.customOrderButton}
                onClick={handleCustomOrder}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506z"/>
                </svg>
                Encargar por WhatsApp
              </button>
              <button 
                className={styles.instagramButton}
                onClick={handleInstagram}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
                </svg>
                Ver en Instagram
              </button>
            </div>
          </div>
        )}

        {/* Grid de productos */}
        {selectedCategory !== 'aminoacidos' && (
          <div 
            className={styles.productsGrid}
            data-count={filteredProducts.length}
          >
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.productCard}>
                
                {/* Etiqueta de categoría */}
                <div 
                  className={styles.categoryTag}
                  style={{ backgroundColor: product.categoryColor }}
                >
                  {categories[product.category]?.name || product.category}
                </div>

                {/* Imagen del producto - CLICKABLE */}
                <div 
                  className={styles.productImageContainer}
                  onClick={() => handleProductClick(product)}
                  style={{ cursor: 'pointer' }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={styles.productImage}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LXNpemU9IjE0Ij5Qcm9kdWN0bzwvdGV4dD4KPHN2Zz4=';
                    }}
                  />
                  
                  {/* Overlay para indicar que es clickable */}
                  <div className={styles.productOverlay}>
                    <span className={styles.viewDetailsText}>Ver Detalles</span>
                  </div>
                </div>

                {/* Información del producto */}
                <div className={styles.productInfo}>
                  <h3 className={styles.productName}>{product.name}</h3>
                  {/* Precios de productos */}
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>
                    {product.currency}{product.price?.toLocaleString()}
                    </span>
                </div>
                  {/* Descripción del producto */}
                  <p className={styles.productDescription}>
                    {product.description}
                  </p>

                  {/* Botón de WhatsApp */}
                  <button 
                    className={styles.whatsappButton}
                    onClick={() => handleWhatsApp(product.name)}
                  >
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      style={{ marginRight: '8px' }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.506z"/>
                    </svg>
                    Ordenar WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODAL DE VISTA DETALLE */}
        {isModalOpen && selectedProduct && (
          <ProductDetailModal 
            product={selectedProduct}
            onClose={closeModal}
            onWhatsApp={handleWhatsApp}
          />
        )}

        {/* Botones flotantes */}
        <div className={styles.floatingButtons}>
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;