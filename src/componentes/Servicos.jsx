import React from 'react';
import { motion } from 'framer-motion';

export default function Servicos() {
  const tratamentos = [
    { icone: "fa-wand-magic-sparkles", titulo: "Estética Dental", desc: "Facetas, lentes de contato de porcelana e clareamento a laser para o sorriso perfeito." },
    { icone: "fa-teeth-open", titulo: "Implantes", desc: "Recupere a mastigação e a autoconfiança com implantes seguros e indolores." },
    { icone: "fa-align-center", titulo: "Ortodontia", desc: "Aparelhos tradicionais e os modernos alinhadores invisíveis (Invisalign)." },
    { icone: "fa-shield-halved", titulo: "Clínica Geral", desc: "Limpeza profunda, restaurações, tratamento de canal e prevenção diária." }
  ];

  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título com animação */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Nossos Tratamentos</h2>
          <p className="text-slate-500">Cuidado completo para todas as idades, da prevenção à estética avançada.</p>
        </motion.div>

        {/* Grid de Cards com animação stagger baseada no index */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tratamentos.map((t, i) => (
            <motion.div 
              key={i} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-300 border border-slate-100 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }} // Efeito interativo extra ao passar o mouse
            >
              <div>
                <div className="text-cyan-600 text-3xl mb-5"><i className={`fa-solid ${t.icone}`}></i></div>
                <h3 className="font-bold text-xl mb-3 text-slate-900">{t.titulo}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}