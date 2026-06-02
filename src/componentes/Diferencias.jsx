import React from 'react';
import { motion } from 'framer-motion';

export default function Diferenciais() {
  const itens = [
    { icone: "fa-user-doctor", titulo: "Especialistas Renomados", desc: "Equipe altamente qualificada e em constante atualização." },
    { icone: "fa-microscope", titulo: "Tecnologia Avançada", desc: "Equipamentos modernos para diagnósticos rápidos e precisos." },
    { icone: "fa-couch", titulo: "Ambiente Aconchegante", desc: "Clínica planejada para oferecer o máximo de conforto." }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 text-center">
        {itens.map((item, index) => (
          <motion.div 
            key={index} 
            className="p-4 space-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              <i className={`fa-solid ${item.icone}`}></i>
            </div>
            <h3 className="font-bold text-lg text-slate-900">{item.titulo}</h3>
            <p className="text-sm text-slate-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}