import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgendamentoForm() {
  // Estados para os campos do formulário
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tratamento, setTratamento] = useState('');
  const [mensagem, setMensagem] = useState('');

  // Estados para validação e feedback
  const [erroMensagem, setErroMensagem] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação específica: mensagem não pode ser vazia (tamanho zero)
    if (mensagem.trim().length === 0) {
      setErroMensagem('Por favor, digite uma breve mensagem sobre o seu caso.');
      return; // Bloqueia o envio
    }

    // Se passou na validação, limpa os erros
    setErroMensagem('');

    // Aqui você integraria com sua API ou enviaria para o WhatsApp.
    // Exemplo de simulação de sucesso:
    setSucesso(true);

    // Limpa o formulário após o envio
    setNome('');
    setTelefone('');
    setTratamento('');
    setMensagem('');

    // Esconde a mensagem de sucesso após 5 segundos
    setTimeout(() => setSucesso(false), 5000);
  };

  return (
    <section id="contato" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Bloco de Título */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">Agende sua Avaliação</h2>
          <p className="text-slate-500">Preencha os dados abaixo e nossa equipe entrará em contato para confirmar o melhor horário.</p>
        </motion.div>

        {/* Card do Formulário */}
        <motion.div
          className="bg-white p-8 sm:p-10 rounded-2xl shadow-md border border-slate-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >

          {/* Alerta de Sucesso (Aparece suavemente se enviado com sucesso) */}
          <AnimatePresence>
            {sucesso && (
              <motion.div
                className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl flex items-center gap-3 text-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <i className="fa-solid fa-circle-check text-emerald-500 text-lg"></i>
                <div>
                  <span className="font-bold">Solicitação enviada!</span> Em breve entraremos em contato com você.
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">

              {/* Campo Nome */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex: João Silva"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition text-sm"
                />
              </div>

              {/* Campo Telefone */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 block">WhatsApp / Telefone</label>
                <input
                  type="tel"
                  required
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Ex: (+244) 940-000-000"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition text-sm"
                />
              </div>
            </div>

            {/* Campo Tipo de Tratamento */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 block">Tratamento de Interesse</label>
              <select
                required
                value={tratamento}
                onChange={(e) => setTratamento(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition text-sm text-slate-600"
              >
                <option value="" disabled>Selecione uma opção...</option>
                <option value="estetica">Estética Dental (Lentes/Clareamento)</option>
                <option value="implantes">Implantes Dentários</option>
                <option value="ortodontia">Ortodontia / Invisalign</option>
                <option value="rotina">Consulta de Rotina / Limpeza</option>
              </select>
            </div>

            {/* Campo Mensagem (Com validação de tamanho zero) */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 block">
                Como podemos ajudar? <span className="text-slate-400 font-normal">(Obrigatório)</span>
              </label>
              <textarea
                rows="4"
                value={mensagem}
                onChange={(e) => {
                  setMensagem(e.target.value);
                  if (e.target.value.trim().length > 0) setErroMensagem(''); // Limpa o erro em tempo real enquanto digita
                }}
                placeholder="Conte-nos brevemente o que você precisa ou suas dúvidas..."
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition text-sm ${erroMensagem ? 'border-rose-400 bg-rose-50/10' : 'border-slate-200'
                  }`}
              ></textarea>

              {/* Mensagem de Erro da validação */}
              <AnimatePresence>
                {erroMensagem && (
                  <motion.p
                    className="text-rose-500 text-xs font-medium flex items-center gap-1"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    <i className="fa-solid fa-circle-exclamation"></i> {erroMensagem}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Botão de Envio */}
            <motion.button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-cyan-100 transition duration-200 mt-2 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <i className="fa-solid fa-paper-plane text-sm"></i>   <span> {"Enviar Solicitação "} </span>
            </motion.button>

          </form>
        </motion.div>
      </div>
    </section>
  );
}