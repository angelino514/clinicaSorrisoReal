import './App.css'
import Servicos from './componentes/Servicos'
import Depoimentos from './componentes/Depoimentos'
import Hero from './componentes/Hero'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import Diferenciais from './componentes/Diferencias'
import AgendamentoForm from './componentes/Angendamento'

function App() {
   return (
    <> 
      <Header />
      <Hero />
      <Diferenciais />
      <Servicos />
      <Depoimentos />
      <AgendamentoForm />
      <Footer />
    </>
   )
}

export default App
