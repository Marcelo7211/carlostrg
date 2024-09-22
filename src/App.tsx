
import './App.css'
import { animated, useSpring } from '@react-spring/web';
import { useInView } from 'react-intersection-observer'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/navbar/header';
import Footer from './components/footer/footer';
import HomePage from './pages/home/homePage';
import Sobre from './pages/about/sobre'
import Agenda from './pages/agenda/agenda';



function App() {
  
  const [ref, inView] = useInView({
    triggerOnce: true, // Dispara apenas uma vez quando o elemento entra na tela
  });

  const fadePropsHeader = useSpring(
    {
      opacity: inView ? 1 : 0,
      from: { opacity: 0 },
      config: { duration: 500, delay: 1000 }
    }); // Adicione a animação de fade com delay de 2 segundos


  return (
   <div className="bg-white" >
     <Header />
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path = "/agenda" element = {<Agenda />} />
        </Routes>
      </BrowserRouter>
     <animated.div style={fadePropsHeader} ref={ref}>
        <Footer />
      </animated.div>
    </div>
  )
}

export default App
