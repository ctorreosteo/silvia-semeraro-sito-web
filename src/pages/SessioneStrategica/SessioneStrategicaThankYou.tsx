import { useEffect } from 'react'

const WHATSAPP_MESSAGE =
  'Buongiorno Dr.ssa Semeraro, volevo sapere quando avrebbe posto per la sessione strategica. Grazie e a presto'
const WHATSAPP_LINK = `https://wa.me/393479336648?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export function SessioneStrategicaThankYou() {
  useEffect(() => {
    const fbq = (window as Window & { fbq?: (...args: unknown[]) => void }).fbq
    fbq?.('track', 'Lead')
  }, [])

  return (
    <article className="sessioneStrategicaThankYouPage" aria-label="Conferma invio richiesta sessione strategica">
      <section className="sessioneStrategicaThankYouCard">
        <p className="sessioneStrategicaThankYouEyebrow">Richiesta ricevuta</p>
        <h1 className="sessioneStrategicaThankYouTitle">Grazie, la tua candidatura è arrivata.</h1>
        <p className="sessioneStrategicaThankYouText">
          Ti contattero al piu presto per confermarti la disponibilita e organizzare la tua Sessione Strategica.
        </p>
        <p className="sessioneStrategicaThankYouPhoneHint">Salva il mio numero in rubrica pre evitare che finisca nello spam:</p>
        <p className="sessioneStrategicaThankYouPhone" aria-label="Numero di telefono">
          347 9336648
        </p>
        <p className="sessioneStrategicaThankYouWhatsappHint">
          Per saltare la coda e contattarmi direttamente, premi il tasto WhatsApp qui sotto.
        </p>

        <a
          className="sessioneStrategicaThankYouWhatsappCta"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivi su WhatsApp per saltare la lista d'attesa"
        >
          Scrivi su WhatsApp e salta la lista d'attesa
        </a>

      </section>
    </article>
  )
}
