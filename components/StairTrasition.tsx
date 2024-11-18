'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

export const StairTransition = () => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Usamos la clave de la ruta para asegurar que la animación se ejecute en el cambio de rutas */}
      <motion.div key={pathname} className="relative">
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
          <Stairs /> {/* Renderizar las escaleras como parte de la transición */}
        </div>

        {/* Transición de desvanecimiento de fondo */}
        <motion.div
          className="h-screen w-screen fixed bg-purple-950 top-0 pointer-events-none z-30"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default StairTransition;
