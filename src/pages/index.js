// src/pages/index.js
import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import ContactSection from '../components/ContactSection';
import WhyChooseSection from '../components/WhyChooseSection';


export default function Home() {
  return (
    <>
      <Head>
        <title>Pro Fit RD - Tienda de Proteínas y Suplementos</title>
        <meta name="description" content="Los mejores suplementos para alcanzar tus objetivos fitness." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Fuentes de Google */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <HeroSection />
        <ProductsSection />
        <ContactSection />
        <WhyChooseSection />

      </main>
    </>
  );
}