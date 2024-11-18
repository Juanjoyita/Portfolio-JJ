'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode; // Especifica que children es un nodo de React
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <div key={pathname}>
      <motion.div
        initial={{ opacity: 1 }} // Estado inicial de la animación
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }, // Animación de opacidad cuando el componente entra
        }}
        exit={{
          opacity: 1,
          transition: { duration: 0.4, ease: 'easeInOut' }, // Animación de opacidad cuando el componente sale
        }}
        className="h-screen w-screen fixed bg-violet-900 top-0 pointer-events-none"
      />
      {children}
    </div>
  );
};

export default PageTransition;
