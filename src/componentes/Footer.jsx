import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  // Configuração padrão de transição para os elementos surgirem com suavidade
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.15 // Faz as 3 colunas de informação surgirem em sequência
      }
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer id="contato" className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900 overflow-hidden">
      
      {/* Container Principal Animado */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Dispara um pouco antes de tocar o rodapé
      >
        
        {/* Coluna 1: Sobre / Logo */}
        <motion.div variants={columnVariants} className="space-y-4">
          <div className="flex items-center gap-2 text-white">
            <i className="fa-solid fa-tooth text-cyan-400 text-2xl"></i>
            <span className="text-lg font-bold tracking-tight">
              Sorriso<span className="text-cyan-400">Real</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Transformando vidas através do sorriso desde 2015. Nosso compromisso é com a sua saúde e bem-estar.
          </p>
          {/* Ícones de redes sociais com micro-animação ao passar o mouse */}
          <div className="flex gap-4 pt-2 text-xl">
            <motion.a href="#instagram" whileHover={{ y: -3, text: "#22d3ee" }} className="hover:text-cyan-400 transition"><i className="fa-brands fa-instagram"></i></motion.a>
            <motion.a href="#facebook" whileHover={{ y: -3, text: "#22d3ee" }} className="hover:text-cyan-400 transition"><i className="fa-brands fa-facebook"></i></motion.a>
          </div>
        </motion.div>

        {/* Coluna 2: Contato */}
        <motion.div variants={columnVariants} className="space-y-4">
          <h4 className="text-white font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-[2px] after:bg-cyan-500">
            Contato & Endereço
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-phone text-cyan-400 mt-1"></i> 
              <span>(11) 4002-8922</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-envelope text-cyan-400 mt-1"></i> 
              <span className="break-all">contato@sorrisoreal.com.br</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot text-cyan-400 mt-1"></i> 
              <span>Av. Paulista, 1000 - Sala 42<br />Bela Vista - São Paulo/SP</span>
            </li>
          </ul>
        </motion.div>

        {/* Coluna 3: Horários */}
        <motion.div variants={columnVariants} className="space-y-4">
          <h4 className="text-white font-semibold relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-8 after:h-[2px] after:bg-cyan-500">
            Horário de Atendimento
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between border-b border-slate-900 pb-1">
              <span>Segunda a Sexta:</span>
              <span className="text-slate-200">08h às 19h</span>
            </li>
            <li className="flex justify-between border-b border-slate-900 pb-1">
              <span>Sábado:</span>
              <span className="text-slate-200">08h às 12h</span>
            </li>
            <li className="flex justify-between text-rose-400 font-medium">
              <span>Domingos e Feriados:</span>
              <span>Fechado</span>
            </li>
          </ul>
        </motion.div>

      </motion.div>

      {/* Linha dos Direitos Autorais e CRO */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-900 text-center text-xs text-slate-600 space-y-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} Sorriso Real Odontologia. Todos os direitos reservados.</p>
        <p>Responsável Técnico: Dr. Silva Sauro — CRO-SP 123456</p>
      </motion.div>

    </footer>
  );
}