import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  // Estado que controla se o menu mobile está aberto (true) ou fechado (false)
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado do menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Função para fechar o menu ao clicar em um link
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-tooth text-cyan-600 text-3xl"></i>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Sorriso<span className="text-cyan-600">Real</span>
          </span>
        </div>

        {/* MENU DESKTOP (Escondido em telas menores) */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#sobre" className="hover:text-cyan-600 transition">Sobre Nós</a>
          <a href="#servicos" className="hover:text-cyan-600 transition">Tratamentos</a>
          <a href="#depoimentos" className="hover:text-cyan-600 transition">Depoimentos</a>
          <a href="#contato" className="bg-cyan-600 text-white px-5 py-2.5 rounded-full hover:bg-cyan-700 transition">
            Agendar Consulta
          </a>
        </nav>

        {/* BOTÃO DO MENU MOBILE (Aparece apenas em telas pequenas) */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-slate-600 hover:text-cyan-600 text-3xl focus:outline-none transition-transform duration-200"
            aria-label="Alternar menu"
          >
            {/* O ícone muda dinamicamente entre o hambúrguer e o X */}
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* ANIMAÇÃO DO MENU MOBILE CORTINA */}
      {/* O AnimatePresence garante que a animação de fechamento (exit) aconteça antes do componente sumir do HTML */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-white border-t border-slate-100 absolute top-20 left-0 w-full shadow-xl z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pt-4 pb-8 space-y-4 flex flex-col font-medium text-slate-600">

              <a 
                href="#servicos" 
                onClick={closeMenu} 
                className="hover:text-cyan-600 transition py-3 border-b border-slate-50 flex items-center justify-between"
              >
                <span>Tratamentos</span>
                <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
              </a>
              <a 
                href="#depoimentos" 
                onClick={closeMenu} 
                className="hover:text-cyan-600 transition py-3 border-b border-slate-50 flex items-center justify-between"
              >
                <span>Depoimentos</span>
                <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
              </a>

               <a 
                href="#sobre" 
                onClick={closeMenu} 
                className="hover:text-cyan-600 transition py-3 border-b border-slate-50 flex items-center justify-between"
              >
                <span>Sobre Nós</span>
                <i className="fa-solid fa-chevron-right text-xs text-slate-300"></i>
              </a>
              
              {/* Botão de ação em destaque dentro do menu mobile */}
              <a 
                href="#contato" 
                onClick={closeMenu} 
                className="bg-cyan-600 text-white text-center px-5 py-3.5 rounded-xl hover:bg-cyan-700 transition font-semibold shadow-md shadow-cyan-100 block mt-4"
              >
                <i className="fa-solid fa-calendar-check mr-2"></i> Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}