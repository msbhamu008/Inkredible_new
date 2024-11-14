import React, { useEffect, useState } from 'react';

const partners = [
  { name: "CBSE", logo: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=200&h=100&q=80" },
  { name: "IIT JEE", logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=100&q=80" },
  { name: "NEET", logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=200&h=100&q=80" },
  { name: "Olympiad", logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=200&h=100&q=80" },
  { name: "Sainik School", logo: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=200&h=100&q=80" },
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden relative py-10">
      <div className="flex items-center justify-center gap-8 animate-scroll">
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-gray-800/50 backdrop-blur-md p-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-40 h-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}