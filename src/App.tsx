import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout'
import { ContattiEDoveLavoro } from './pages/ContattiEDoveLavoro'
import { Home } from './pages/Home'
import { LaMiaStoria } from './pages/LaMiaStoria'
import { NotFound } from './pages/NotFound'
import { Percorsi } from './pages/Percorsi'
import { RisorseGratuite } from './pages/RisorseGratuite'
import { Testimonianze } from './pages/Testimonianze'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/la-mia-storia" element={<LaMiaStoria />} />
        <Route path="/testimonianze" element={<Testimonianze />} />
        <Route path="/percorsi" element={<Percorsi />} />
        <Route path="/contatti-e-dove-lavoro" element={<ContattiEDoveLavoro />} />
        <Route path="/risorse-gratuite" element={<RisorseGratuite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
