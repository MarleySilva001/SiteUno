import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Regras from './pages/Regras'
import Ajuda from './pages/Ajuda'

function App() {
  
  return (
    <Router > 
      <Routes >
        <Route path="/" element={<Home />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/regras" element={<Regras />}/>
        <Route path="/ajuda" element={<Ajuda />}/>
      </Routes >
    </Router >
  )
}

export default App
