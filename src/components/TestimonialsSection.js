// src/components/TestimonialsSection.js
import { useState, useEffect } from 'react';
import styles from '../styles/TestimonialsSection.module.css';

const TestimonialsSection = () => {
  // Estadísticas
  const stats = [
    {
      id: 1,
      number: "30-45g",
      description: "Proteína recomendada post-entreno"
    },
    {
      id: 2,
      number: "20-30min",
      description: "Tiempo óptimo para tomar tu batido"
    },
    {
      id: 3,
      number: "2-3x",
      description: "Veces al día según tu objetivo"
    }
  ];

  // Testimonios de clientes
  const testimonials = [
    {
      id: 1,
      text: "Excelente calidad en todos sus productos. La glutamina me ha ayudado muchísimo con la recuperación después de entrenamientos intensos.",
      name: "Franklin Brito",
      role: "Atleta fitness",
      rating: 5
    },
    {
      id: 2,
      text: "El Mass Gainer de Pro Fit ha sido clave en mi aumento de peso. Resultados visibles en menos de 2 meses. Totalmente recomendado.",
      name: "Fernando Ramírez",
      rating: 5
    },
    {
      id: 3,
      text: "Clear Protein es increíble! Por fin una proteína que no me cae pesada y con sabores realmente refrescantes. La mejor inversión.",
      name: "Emely Díaz",
      rating: 5
    },
    {
      id: 4,
      text: "Servicio al cliente excepcional. Me asesoraron perfectamente sobre qué suplementos usar para mis objetivos. Muy profesionales.",
      name: "Kelvin Rodríguez",
      role: "Entrenador personal",
      rating: 5
    }
  ];

  // Estado para el carrusel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial(
      currentTestimonial === testimonials.length - 1 ? 0 : currentTestimonial + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      currentTestimonial === 0 ? testimonials.length - 1 : currentTestimonial - 1
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index}
        className={index < rating ? styles.starFilled : styles.starEmpty}
      >
        ★
      </span>
    ));
  };

  return (
    <section className={styles.testimonialsSection}>
      
      {/* Sección de estadísticas */}
      <div className={styles.statsSection}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat) => (
              <div key={stat.id} className={styles.statCard}>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sección de testimonios */}
      <div className={styles.testimonialsContainer}>
        <div className={styles.container}>
          
          {/* Título */}
          <h2 className={styles.title}>Lo que dicen nuestros clientes</h2>

          {/* Carrusel de testimonios */}
          <div className={styles.carousel}>
            
            {/* Testimonial actual */}
            <div className={styles.testimonialCard}>
              
              {/* Comillas */}
              <div className={styles.quoteIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Texto del testimonio */}
              <p className={styles.testimonialText}>
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Rating de estrellas */}
              <div className={styles.rating}>
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>

              {/* Información del cliente */}
              <div className={styles.clientInfo}>
                <h4 className={styles.clientName}>
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className={styles.clientRole}>
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>

            {/* Controles de navegación */}
            <div className={styles.carouselControls}>
              <button 
                className={styles.controlButton}
                onClick={prevTestimonial}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>

              {/* Indicadores de puntos */}
              <div className={styles.dots}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${index === currentTestimonial ? styles.dotActive : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <button 
                className={styles.controlButton}
                onClick={nextTestimonial}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;