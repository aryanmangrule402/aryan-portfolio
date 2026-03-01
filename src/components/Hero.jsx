import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Hero() {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#0a0a0a] text-white relative overflow-hidden">

      {/* Gradient Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500 opacity-20 blur-[150px] rounded-full top-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-cyan-500 opacity-20 blur-[150px] rounded-full bottom-[-200px]" />

      <motion.h1 
        initial={{ opacity: 0, y: 100 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-bold text-center tracking-tight"
      >
        Aryan Mangrule
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-xl text-gray-400 text-center max-w-2xl"
      >
        I build scalable web systems and immersive digital experiences.
      </motion.p>

      <motion.div 
        className="flex gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-110 transition">
          View Work
        </button>

        <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
          Contact Me
        </button>
      </motion.div>
    </section>
  );
}