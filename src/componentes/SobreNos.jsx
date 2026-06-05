import React from 'react';
import { motion } from 'framer-motion';

export default function SobreNos() {
  const estatisticas = [
    { valor: "+10k", legenda: "Sorrisos Transformados" },
    { valor: "15+", legenda: "Anos de Experiência" },
    { valor: "100%", legenda: "Compromisso com Você" }
  ];

  // Variantes de animação para os textos entrarem em sequência
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100 overflow-hidden" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Bloco de Imagem/Visual */}
        <motion.div 
          className="relative order-2 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Elemento decorativo de fundo nas cores da clínica */}
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-cyan-50 rounded-3xl -z-10" />
          
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 aspect-[4/3] flex items-center justify-center">
            {/* Substitui o SRC pela foto real da clínica ou equipe */}
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
              alt="Consultório Odontológico Moderno" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card Flutuante de Confiança */}
          <motion.div 
            className="absolute -bottom-6 -right-4 bg-white p-4 rounded-xl shadow-lg border border-slate-50 flex items-center gap-3"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            <div className="w-10 h-10 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center text-lg">
              <i className="fa-solid fa-tooth"></i>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium leading-none">Tecnologia</p>
              <p className="text-sm font-bold text-slate-800">Referência Digital</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Conteúdo de Texto Institucional */}
        <motion.div 
          className="space-y-6 order-1 lg:order-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span variants={itemVariants} className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full inline-block">
            Nossa Clínica
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Cuidando da sua saúde bucal com <span className="text-cyan-600">excelência</span> e afeto
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-base text-slate-500 leading-relaxed">
            Desde a nossa fundação, temos como missão transformar vidas através do sorriso. Combinamos a alta qualificação de especialistas renomados com as técnicas odontológicas mais avançadas do mercado, proporcionando diagnósticos precisos e tratamentos humanizados.
          </motion.p>

          <motion.p variants={itemVariants} className="text-sm text-slate-500 leading-relaxed">
            Acreditamos que ir ao dentista deve ser uma experiência confortável e segura. Por isso, projetamos um ambiente acolhedor, biosseguro e totalmente focado no bem-estar de toda a sua família.
          </motion.p>

          {/* Grade de Estatísticas Dinâmicas */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100"
          >
            {estatisticas.map((est, i) => (
              <div key={i} className="space-y-1">
                <p className="text-2xl sm:text-3xl font-black text-cyan-600 tracking-tight">
                  {est.valor}
                </p>
                <p className="text-xs font-medium text-slate-400 leading-snug">
                  {est.legenda}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}