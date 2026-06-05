import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado do Conteúdo (Texto) */}
        <motion.div 
          className="space-y-6 z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase">
            Cuidado & Tecnologia
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            O sorriso dos seus sonhos começa aqui.
          </h1>
          <p className="text-lg text-slate-300 max-w-xl">
            Combinamos profissionais qualificados, tecnologia de ponta e um atendimento humanizado para transformar a sua saúde bucal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="https://wa.me/seu-numero" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-3 transition transform hover:-translate-y-1"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i> Agendar pelo WhatsApp
            </a>
            <a href="#servicos" className="border border-slate-600 hover:border-slate-400 text-white font-semibold px-8 py-4 rounded-xl flex items-center justify-center transition">
              Conhecer Tratamentos
            </a>
          </div>
        </motion.div>

        {/* Lado da Imagem */}
        <motion.div 
          className="relative lg:block hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
            alt="Dentista Sorrindo" 
            className="rounded-2xl shadow-2xl border-4 border-slate-700/50 object-cover w-full h-[450px]"
          />
        </motion.div>
      </div>
    </section>
  );
}