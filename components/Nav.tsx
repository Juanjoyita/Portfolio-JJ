'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { ReactNode } from 'react';

const links = [
  { name: "Home", path: "/" },
  { name: "About me", path: "/AboutMe" },
  { name: "projects", path: "/Projects" },
  { name: "experiences", path: "/experiences" },
  { name: "Tastes", path: "/tastes" }, 
  { name: "contact", path: "/contact" }
];

interface NavProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode; 
}

const Nav = ({ isOpen, onClose }: NavProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  const currentIndex = links.findIndex(link => link.path === pathname);

  const navigate = (direction: 'next' | 'prev') => {
    setIsNavigating(true);
    
    let nextIndex: number;
    if (direction === 'next') {
      nextIndex = currentIndex + 1 >= links.length ? 0 : currentIndex + 1;
    } else {
      nextIndex = currentIndex - 1 < 0 ? links.length - 1 : currentIndex - 1;
    }
    
    router.push(links[nextIndex].path);
    onClose();
  };

  useEffect(() => {
    if (isNavigating) {
      const timer = setTimeout(() => setIsNavigating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isNavigating]);


  const showNavButtons = !isOpen;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="xl:flex xl:gap-6 xl:items-center flex-row gap-4">
        {links.map((link, index) => (
          <Link 
            href={link.path} 
            key={index}
            onClick={onClose}
            className={`${
              link.path === pathname 
                ? "text-accent border-b-2 border-accent" 
                : "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <div 
        className={`xl:hidden fixed top-0 left-0 w-full h-full bg-black/50 z-30 transition-all ${isOpen ? 'block' : 'hidden'}`} 
        onClick={onClose} 
      />
      <div 
        className={`xl:hidden fixed top-0 left-0 w-[70%] h-full bg-[#1E0B31] text-white z-40 p-6 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-accent"
        >
          <X size={24} />
        </button>
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <Link 
              href={link.path} 
              key={index}
              onClick={onClose}
              className={`${
                link.path === pathname 
                  ? "text-accent border-b-2 border-accent" 
                  : "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
              } capitalize font-medium hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Botones de navegación - Ahora visibles en todas las secciones cuando el menú está cerrado */}
      {showNavButtons && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <button
            onClick={() => navigate('prev')}
            disabled={isNavigating}
            className="absolute bottom-8 left-8 w-12 h-12 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => navigate('next')}
            disabled={isNavigating}
            className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-accent text-white shadow-lg hover:bg-accent/90 flex items-center justify-center transition-all duration-300 hover:scale-110 pointer-events-auto"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
};

export default Nav;
