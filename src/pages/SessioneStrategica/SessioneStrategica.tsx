import './sessioneStrategica.css'
import { BeneficiSection } from './sections/BeneficiSection'
import { ChiESilviaSection } from './sections/ChiESilviaSection'
import { FaqSection } from './sections/FaqSection'
import { HeroSection } from './sections/HeroSection'
import { OffertaSection } from './sections/OffertaSection'
import { PainPointsSection } from './sections/PainPointsSection'

export function SessioneStrategica() {
  return (
    <article className="sessioneStrategicaPage" aria-label="Landing Sessione Strategica">
      <HeroSection />
      <PainPointsSection />
      <ChiESilviaSection />
      <div className="sessioneStrategicaOffertaDivider" id="offerta-divider" aria-hidden="true">
        <span className="sessioneStrategicaOffertaDividerIcon">✦</span>
      </div>
      <OffertaSection />
      <BeneficiSection />
      <FaqSection />
    </article>
  )
}
