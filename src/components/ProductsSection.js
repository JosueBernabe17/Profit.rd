// src/components/ProductsSection.js
import styles from '../styles/ProductsSection.module.css';

const ProductsSection = () => {
  // Array de productos
  const products = [
    {
      id: 1,
      name: "WHEY ISOLATE",
      category: "Proteína",
      description: "Proteína de rápida absorción ideal para después del entrenamiento.",
      image: "/products/whey-isolate.png", // Cambia por tus imágenes
      categoryColor: "#dc2626"
    },
    {
      id: 2,
      name: "MASS GAINER", 
      category: "Proteína",
      description: "Ideal para aumentar masa muscular y peso corporal",
      image: "/products/mass-gainer.png", // Cambia por tus imágenes
      categoryColor: "#dc2626"
    },
    {
      id: 3,
      name: "CLEAR PREMIUM",
      category: "Proteína", 
      description: "Proteína pura para definición y recuperación muscular.",
      image: "/products/clear-protein.png", // Cambia por tus imágenes
      categoryColor: "#dc2626"
    },
    {
   
      id: 4,
      name: "BPI SPORTS ISO HD",
      category: "Proteína",
      description: "Proteína de suero hidrolizada para una absorción ultra rápida.", 
      image: "/products/bpi-sports-iso-hd.png", // Cambia por tus imágenes
      categoryColor: "#dc2626"

    },
    {
      id: 5,
      name: "RULE 1 MASS GAINER",
      category: "Proteína",
      description: "Fórmula avanzada para un aumento de masa muscular limpio y efectivo.", 
      image: "/products/rule1-mass-gainer.png", // Cambia por tus imágenes
      categoryColor: "#dc2626"
    },
    
    {
        id: 6,
        name: "CLEAR PREMIUM",
        category: "Proteína", 
        description: "Proteína pura para definición y recuperación muscular.",
        image: "/products/clear-protein-c.png", // Cambia por tus imágenes
        categoryColor: "#dc2626"
    },

    {
        id: 7,
        name: "MuscleTech CREATINA",
        category: "Creatina",
        description: "Aumenta tu fuerza y potencia en entrenamientos de alta intensidad.",
        image: "/products/creatinaMuscle.png", 
        categoryColor: "#dc2626"
     
    },
    {
      id: 8,
      name: "GLUTAMINA",
      category: "Recuperación",
      description: "Máxima recuperación muscular y fortalecimiento del sistema inmune.", 
      image: "/products/glutamine.png", // Cambia por tus imágenes
      categoryColor: "#dc2626"
    },
    {
        id: 9, 
        name: "CREATINA NUTREX MONOHIDRATO",
        category: "Creatina",
        description: "Mejora tu rendimiento físico y aumenta la masa muscular magra.",
        image: "/products/creatinaNutrex.png", 
        categoryColor: "#dc2626"
    },
  ];

    const handleWhatsApp = (productName) => {
    const phoneNumber = "18297542767"; 
    const message = `¡Hola! Me interesa el producto: ${productName}. ¿Podrías darme más información sobre precio y disponibilidad?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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

        {/* Grid de productos */}
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              
              {/* Etiqueta de categoría */}
              <div 
                className={styles.categoryTag}
                style={{ backgroundColor: product.categoryColor }}
              >
                {product.category}
              </div>

              {/* Imagen del producto */}
              <div className={styles.productImageContainer}>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={styles.productImage}
                  onError={(e) => {
                    // Imagen placeholder si no encuentra la imagen
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjNmNGY2Ii8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOWNhM2FmIiBmb250LXNpemU9IjE0Ij5Qcm9kdWN0bzwvdGV4dD4KPHN2Zz4=';
                  }}
                />
              </div>

              {/* Información del producto */}
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                
                {/* Descripción del producto */}
                <p className={styles.productDescription}>
                  {product.description}
                </p>

                {/* Botón de WhatsApp */}
                <button 
                className={styles.whatsappButton}
                onClick={handleWhatsApp}
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

      </div>
    </section>
  );
};

export default ProductsSection;