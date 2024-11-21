import React from 'react';
import Socials from '@/components/Socials';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 font-jetbrainsMono">
      <div className="max-w-6xl w-full transition-all duration-700">
        {/* Versión móvil - Solo visible en pantallas pequeñas */}
        <div className="md:hidden flex flex-col items-center transition-all duration-700">
          {/* Imagen de perfil móvil */}
          <div className="relative w-64 h-64 mb-8 transition-all duration-700">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-fuchsia-500/30">
              <Image
                src="/jj12.png"
                alt="Juan Jose Calvache Ibarra"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          
          {/* Contenido móvil */}
          <div className="text-white text-center px-4 transition-all duration-700">
            <h2 className="text-white text-xl mb-4 font-light tracking-wider">
              Who I Am
            </h2>
            <h1 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-400">
              Hello
            </h1>
            <p className="text-gray-200 text-lg leading-relaxed mb-8 font-light">
              Estudiante de Ingeniería de Software con experiencia en Python, HTML y CSS,
              especializado en el desarrollo de aplicaciones web utilizando frameworks como
              Django, Next.js y Angular. Mi enfoque se centra en crear soluciones eficientes y
              escalables que ofrezcan una experiencia de usuario excepcional.
            </p>
            <div className="mt-8">
              <Socials
                containerStyles="flex gap-8 justify-center"
                iconsStyles="w-12 h-12 border border-fuchsia-500 rounded-full flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Versión desktop - Solo visible en pantallas medianas y grandes */}
        <div className="hidden md:flex flex-row items-center gap-16 transition-all duration-700">
          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="absolute top-35 left-[-1px] transform -translate-y-64 w-72 h-72 md:w-96 md:h-96 transition-all duration-700">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-fuchsia-500/30">
                <Image
                  src="/jj12.png"
                  alt="Juan Jose Calvache Ibarra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-white transform -translate-y-16">
            <h2 className="text-black text-xl mb-4 font-light tracking-wider">
              Who I Am
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-400">
              Hello
            </h1>
            <p className="text-black text-lg leading-relaxed mb-8 font-light">
              Software Engineering student with experience in Python, HTML and CSS,
              specialized in developing web applications using frameworks such as
              Django, Next.js and Angular. My focus is on creating efficient and scalable
              solutions that offer an exceptional user experience.
            </p>
            <div className="mt-8">
              <Socials
                containerStyles="flex gap-8 justify-center xl:justify-start"
                iconsStyles="w-12 h-12 border border-fuchsia-500 rounded-full flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
