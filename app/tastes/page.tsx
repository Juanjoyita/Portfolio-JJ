// app/taste/page.tsx
'use client';
import Image from 'next/image';

interface Experience {
  image: string;
  title: string;
  description: string;
}

const experiences: Experience[] = [
  {
    image: "/moto.png",
    title: "Pasión por la Moto",
    description: "I am a big fan of adventure motorcycling, passionate about exploring remote landscapes, unknown trails and paths full of mystery and beauty. I love exploring fantastic places, where every curve of the road hides a surprise, an unforgettable view or a challenge that makes me vibrate with excitement. On every trip, I feel freedom and adrenaline running through my veins, while nature surrounds me and drives me to continue exploring the unknown."
  },
  {
    image: "/viajero.png",
    title: "Experiencias de Viaje",
    description: "Traveling is one of my greatest passions; each new destination offers me the opportunity to explore different cultures, landscapes and perspectives that enrich my vision of the world. I enjoy getting lost in unknown cities, discovering their hidden corners and tasting unique flavors that tell their own story. For me, traveling is much more than just getting to know places; it is a constant learning process, an adventure that feeds my curiosity and drives me to connect with people and experiences that transform my life."
  },
  {
    image: "/tech.png",
    title: "Tecnología y Desarrollo",
    description: "Computers are one of my great passions; I love how they combine power, precision, and creativity in a single machine. From hardware architecture to user interfaces, I am interested in understanding every level that allows them to function. I like exploring new configurations, assembling components, and optimizing performance, always looking for ways to make them faster and more efficient. For me, working with computers is an exercise in ingenuity and dedication, where each project and each tweak is an opportunity to expand my knowledge and skills."
  }
];

export default function PersonalExperiences() {
  return (
    <div className="min-h-screen px-4 py-16">
      <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-800 via-purple-500 to-blue-500 text-center mb-16 font-display">
        Personal Experiences
      </h1>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Imagen circular */}
            <div className="relative w-64 h-64 mb-6 rounded-full overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                className="object-cover"
                quality={100}
              />
            </div>
            
            {/* Texto descriptivo */}
            <div className="bg-purple-900 backdrop-blur-sm p-6 rounded-3xl">
              <p className="text-sm text-gray-200 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
