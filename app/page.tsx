'use client';

import Header from './components/Header';
import Gallery from './components/Gallery';
import Service from './components/Service';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Footer from './components/Footer';

export default function HomePage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Header scrollToSection={scrollToSection}/>
      <Gallery />
      <Service />
      <Reviews />
      <Location />
      <Footer />
    </div>
  );
}

