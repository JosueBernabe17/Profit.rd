import Head from 'next/head';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pro Fit RD - Tienda de Proteínas y Suplementos</title>
        <meta name="description" content="Los mejores suplementos para alcanzar tus objetivos fitness. Whey Isolate, Mass Gainer, Clear Protein y Glutamina." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Fuentes de Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <HeroSection />
        
        {/* Aquí agregaremos más secciones después */}
        <section id="productos" style={{height: '100vh', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h2 style={{fontSize: '2rem', color: '#333'}}>Sección de Productos (Próximamente)</h2>
        </section>
      </main>
    </>
  );
}