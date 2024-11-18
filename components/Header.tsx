'use client';
import Link from "next/link";
import { useState } from "react";
import { Menu } from 'lucide-react';
import Nav from "./Nav";
import ThemeSwitch from "./ThemeSwitch"; // Importar ThemeSwitch

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <>
      <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Juanjo<span className="text-accent">.</span>
            </h1>
          </Link>

          {/* Mobile Nav Trigger */}
          <button 
            onClick={toggleMobileNav}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-accent"
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex ml-auto items-center space-x-4">
            {/* Colocar ThemeSwitch al lado izquierdo de la navegación */}
            <ThemeSwitch />
            <Nav isOpen={false} onClose={() => {}} />
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <Nav isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)}>
          {/* Agregar el ThemeSwitch dentro del menú hamburguesa */}
          <div className="flex justify-between items-center p-4">
            <ThemeSwitch />
          </div>
        </Nav>
      )}
    </>
  );
};

export default Header;
