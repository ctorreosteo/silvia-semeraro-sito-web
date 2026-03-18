import { DualCtas } from '../components/DualCtas'

export function ContattiEDoveLavoro() {
  return (
    <article className="section pageSection">
      <header className="pageHeader">
        <h1>Contatti e dove lavoro</h1>
        <p className="lead">
          Se vuoi capire se posso esserti d’aiuto, il modo migliore è partire da
          una conversazione semplice. Qui trovi i miei contatti e tutte le
          informazioni su come e dove possiamo lavorare insieme.
        </p>
        <figure className="storyHero" aria-label="Foto di Silvia">
          <img
            className="storyHeroImg"
            src="/Immagini/foto10.png"
            alt="Silvia Semeraro"
            loading="eager"
            decoding="async"
          />
        </figure>
      </header>

      <div className="prose">
        <section className="storyChapter storyChapterNoMedia" aria-label="Contatti">
          <div className="storyChapterContent">
            <h2 className="proseHead">Come contattarmi</h2>
            <p>
              Scrivimi o chiamami: ti rispondo appena posso e, se serve, fissiamo
              insieme un primo confronto per mettere a fuoco il tuo punto di
              partenza e capire con chiarezza quale direzione prendere.
            </p>

            <div className="homeCompareRow" aria-label="Telefono">
              <p className="homeCompareRowK">Telefono</p>
              <p className="homeCompareRowV">
                <a className="footerContactLink" href="tel:+393479336648">
                  347 933 6648
                </a>
              </p>
            </div>

            <div className="homeCompareRow" aria-label="Email">
              <p className="homeCompareRowK">Email</p>
              <p className="homeCompareRowV">
                <a
                  className="footerContactLink"
                  href="mailto:silvia.mentalcoach@gmail.com"
                >
                  silvia.mentalcoach@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        <section
          className="storyChapter storyChapterNoMedia"
          aria-label="Dove ricevo"
        >
          <div className="storyChapterContent">
            <h2 className="proseHead">Dove ricevo</h2>
            <p>
              Lavoro in presenza a <strong>Torino</strong>, in <strong>due studi</strong>, e
              anche <strong>online</strong> da remoto. In questo modo possiamo scegliere la
              modalità più adatta alla tua quotidianità, senza perdere
              continuità nel percorso.
            </p>

            <div className="homeCompareRow homeCompareRowShift" aria-label="Modalità">
              <p className="homeCompareRowK">Modalità</p>
              <p className="homeCompareRowV">
                In studio a Torino (2 sedi) oppure online da remoto
              </p>
            </div>
          </div>
        </section>

        <section className="storyEndCard" aria-label="Prossimo passo">
          <div className="storyEndCardInner">
            <h2 className="proseHead">Il prossimo passo</h2>
            <p>
              Se ti va, puoi prenotare un incontro conoscitivo gratuito: è uno
              spazio protetto per fare ordine, fare domande e decidere con calma
              se e come proseguire.
            </p>
            <DualCtas />
          </div>
        </section>
      </div>
    </article>
  )
}

