'use client';
import React from 'react';
import Image from 'next/image';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Software Engineering Student',
      description: 'Focused on building efficient and scalable applications using Python, JavaScript, and various frameworks like Django and Next.js.',
      image: '/img/img3.png', 
    },
    {
      title: 'Web Designer',
      description: 'Specialized in creating visually appealing and user-friendly designs, with expertise in HTML, CSS, and responsive layouts.',
      image: '/img/imagen2.jpg', 
    },
    {
      title: 'Systems Technician',
      description: 'Experience in troubleshooting and maintaining system infrastructures to ensure optimal performance and security.',
      image: '/img/technician.png', 
    },
  ];

  return (
    <div className="min-h-screen py-20 px-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-4xl md:text-6xl font-bold mb-16 text-center tracking-wider font-jetbrainsMono">
          Academic and Work Experience
        </h1>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative group">
              {/* Card */}
              <div className="relative bg-[#2A0F45]/60 border border-[#8B31FF]/30 rounded-3xl overflow-hidden p-8 h-[500px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:bg-[#3B1A64]/80 shadow-lg">
                {/* Image */}
                <img 
                  src={experience.image} 
                  alt={experience.title} 
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-75" 
                />
                
                {/* Title */}
                <h3 className="text-white text-2xl font-semibold mb-4 capitalize mt-4">
                  {experience.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {experience.description}
                </p>

                {/* Bottom Gradient Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8B31FF] to-transparent opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
