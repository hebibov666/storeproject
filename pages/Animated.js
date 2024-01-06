// components/AnimatedComponent.js
"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const AnimatedComponent = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, x: 0 }); // Animasyonu başlat
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }} // Giriş animasyonu
      animate={controls} // Kontrolleri kullanarak animasyonu yönet
      exit={{ opacity: 0, x: -100 }} // Çıkış animasyonu
      className="w-[40%] max-[900px]:w-[80%] max-[450px]:w-[95%]"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
