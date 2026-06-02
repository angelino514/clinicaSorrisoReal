import React from 'react';
import { motion } from 'framer-motion';

export default function Depoimentos() {
  const depoimentos = [
    { nome: "Mariana Souza", texto: '"O atendimento é impecável desde a recepção. Eu tinha muito medo de dentista, mas a equipe me transmitiu tanta segurança que hoje venho tranquilo!"', direcao: -50 },
    { nome: "Carlos Eduardo", texto: '"Fiz meu tratamento com alinhadores invisíveis e o resultado superou as expectativas. Rápido, prático e a clínica é super moderna."', direcao: 50 }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900">O que dizem nossos pacientes</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {depoimentos.map((d, i) => (
            <motion.div 
              key={i} 
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 space-y-4"
              initial={{ opacity: 0, x: d.direcao }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.2 }}
            >
              <div className="flex text-amber-400 gap-1">
                {[...Array(5)].map((_, starIdx) => <i key={starIdx} className="fa-solid fa-star"></i>)}
              </div>
              <p className="text-slate-600 italic">{d.texto}</p>
              <h4 className="font-bold text-slate-900">- {d.nome}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}