import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout'
import { ContattiEDoveLavoro } from './pages/ContattiEDoveLavoro'
import { Home } from './pages/Home'
import { LaMiaFormazione } from './pages/LaMiaFormazione'
import { LaMiaStoria } from './pages/LaMiaStoria'
import { NotFound } from './pages/NotFound'
import { Percorsi } from './pages/Percorsi'
import { RisorseGratuite } from './pages/RisorseGratuite'
import { Testimonianze } from './pages/Testimonianze'
import { CookiePolicy } from './pages/CookiePolicy'
import { PrivacyPolicy } from './pages/PrivacyPolicy'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/la-mia-storia" element={<LaMiaStoria />} />
        <Route path="/la-mia-formazione" element={<LaMiaFormazione />} />
        <Route path="/testimonianze" element={<Testimonianze />} />
        <Route path="/percorsi" element={<Percorsi />} />
        <Route path="/contatti-e-dove-lavoro" element={<ContattiEDoveLavoro />} />
        <Route path="/risorse-gratuite" element={<RisorseGratuite />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
