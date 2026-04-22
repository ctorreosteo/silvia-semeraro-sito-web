import { useCallback, useEffect, useState, type FormEvent, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import './sessioneStrategica.css'
import { BeneficiSection } from './sections/BeneficiSection'
import { ChiESilviaSection } from './sections/ChiESilviaSection'
import { FaqSection } from './sections/FaqSection'
import { HeroSection } from './sections/HeroSection'
import { OffertaSection } from './sections/OffertaSection'
import { PainPointsSection } from './sections/PainPointsSection'

export function SessioneStrategica() {
  const [isFormPopupOpen, setIsFormPopupOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)

  const closeFormPopup = useCallback(() => {
    setIsFormPopupOpen(false)
  }, [])

  useEffect(() => {
    if (!isFormPopupOpen) {
      return undefined
    }

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeFormPopup()
      }
    }

    document.body.classList.add('sessioneStrategicaModalBodyLock')
    window.addEventListener('keydown', handleEscapePress)

    return () => {
      document.body.classList.remove('sessioneStrategicaModalBodyLock')
      window.removeEventListener('keydown', handleEscapePress)
    }
  }, [closeFormPopup, isFormPopupOpen])

  const handlePageClick = (event: MouseEvent<HTMLElement>) => {
    const eventTarget = event.target as HTMLElement | null
    const ctaLink = eventTarget?.closest('a[data-open-sessione-popup="true"]')

    if (!ctaLink) {
      return
    }

    event.preventDefault()
    setIsFormPopupOpen(true)
  }

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitMessage(null)
    setIsSubmitting(true)

    const form = event.currentTarget
    const formData = new FormData(form)

    const payload = new URLSearchParams({
      nome: String(formData.get('nome') ?? '').trim(),
      cognome: String(formData.get('cognome') ?? '').trim(),
      cellulare: String(formData.get('cellulare') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      offerta: 'SESSIONE59',
    })

    try {
      const response = await fetch('https://hooks.zapier.com/hooks/catch/19401274/ujehkkq/', {
        method: 'POST',
        mode: 'no-cors',
        body: payload,
      })
      void response

      form.reset()
      setSubmitMessage('Richiesta inviata con successo. Ti ricontatterò entro 24h lavorative.')
    } catch {
      setSubmitMessage('Non sono riuscita a inviare i dati. Riprova tra qualche secondo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <article className="sessioneStrategicaPage" aria-label="Landing Sessione Strategica" onClick={handlePageClick}>
      <HeroSection />
      <PainPointsSection />
      <ChiESilviaSection />
      <div className="sessioneStrategicaOffertaDivider" id="offerta-divider" aria-hidden="true">
        <span className="sessioneStrategicaOffertaDividerIcon">✦</span>
      </div>
      <OffertaSection />
      <BeneficiSection />
      <FaqSection />

      {isFormPopupOpen && (
        <div className="sessioneStrategicaModal" role="dialog" aria-modal="true" aria-labelledby="sessioneStrategicaFormTitle">
          <div className="sessioneStrategicaModalBackdrop" onClick={closeFormPopup} aria-hidden="true" />
          <div className="sessioneStrategicaModalPanel">
            <button type="button" className="sessioneStrategicaModalClose" aria-label="Chiudi popup" onClick={closeFormPopup}>
              ×
            </button>

            <h2 id="sessioneStrategicaFormTitle" className="sessioneStrategicaModalTitle">
              Compila il form
            </h2>
            <p className="sessioneStrategicaModalSubtitle">
              Verrai ricontattata direttamente da me entro 24h lavorative per prenotare la tua sessione strategica scontata
              (se i posti non sono esauriti).
            </p>

            <form className="sessioneStrategicaModalForm" onSubmit={handleFormSubmit}>
              <div className="sessioneStrategicaModalFieldGrid">
                <label className="sessioneStrategicaModalField">
                  <span>Nome</span>
                  <input type="text" name="nome" autoComplete="given-name" required />
                </label>

                <label className="sessioneStrategicaModalField">
                  <span>Cognome</span>
                  <input type="text" name="cognome" autoComplete="family-name" required />
                </label>
              </div>

              <label className="sessioneStrategicaModalField">
                <span>Cellulare</span>
                <input type="tel" name="cellulare" autoComplete="tel" required />
              </label>

              <label className="sessioneStrategicaModalField">
                <span>Email</span>
                <input type="email" name="email" autoComplete="email" required />
              </label>

              <label className="sessioneStrategicaModalConsent">
                <input type="checkbox" name="privacy" required />
                <span>
                  Accetto la{' '}
                  <Link to="/privacy-policy" className="sessioneStrategicaModalConsentLink">
                    privacy policy
                  </Link>
                </span>
              </label>

              <button type="submit" className="sessioneStrategicaModalSubmit" disabled={isSubmitting}>
                {isSubmitting ? 'Invio in corso...' : 'Prenota la Sessione Strategica'}
              </button>
              {submitMessage && (
                <p className="sessioneStrategicaModalFeedback" role="status" aria-live="polite">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </article>
  )
}
