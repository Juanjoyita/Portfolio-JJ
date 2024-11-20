// pages/homepage.tsx (u otro nombre que uses para tu página de inicio)
"use client";

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const HomePage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 font-jetbrainsMono">
      <div className="container mx-auto px-4 pt-20 pb-32">
        {/* Mobile Profile Image - Solo visible en móvil */}
        <div className="lg:hidden flex justify-center mb-12">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-fuchsia-500/30">
              <Image
                src="/juanjo.png"
                alt="Juan Jose Calvache Ibarra"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-light mb-2 mt-[-20px]">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-400">
              <span className="inline-block">Juan Jose </span>
              <span className="inline-block">Calvache Ibarra</span>
            </h1>
            <div className="text-xl md:text-2xl font-light mb-8 h-20 mt-[-20px]">
              <div className="bg-black text-white p-4 w-auto inline-block rounded-lg">
                <TypeAnimation
                  sequence={[
                    'I am an engineering student',
                    1000,
                    'I am a web designer',
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="text-center"
                />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6 mb-8 mt-[-30px]">
              <a
                href="https://github.com/Juanjoyita"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-fuchsia-500 rounded-full flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-jose-calvache-1b8a92334/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-fuchsia-500 rounded-full flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/juanjo.calvache.3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-fuchsia-500 rounded-full flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://x.com/Juanjoyita_12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-fuchsia-500 rounded-full flex items-center justify-center text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white transition-all duration-300"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Desktop Profile Image - Solo visible en desktop */}
          <div className="hidden lg:flex flex-1 justify-center lg:justify-end relative">
            <div className="absolute top-[-240px] left-[-10px] w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-fuchsia-500/30">
                <Image
                  src="/juanjo.png"
                  alt="Juan Jose Calvache Ibarra"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
