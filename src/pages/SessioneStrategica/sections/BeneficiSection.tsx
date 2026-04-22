const BENEFICI_INTERIORI = [
  {
    key: 'beneficio-interiore-1',
    content: (
      <>
        <strong>Capirai esattamente</strong> cosa mantiene attiva la tua ansia, anche se la porti da{' '}
        <u>10 o 20 anni</u>. Non una spiegazione generica, ma <em>il meccanismo preciso che riguarda te</em>.
      </>
    ),
  },
  {
    key: 'beneficio-interiore-2',
    content: (
      <>
        Uscirai con un <strong>piano d&apos;azione costruito su di te</strong>, non un protocollo standard. Saprai
        <u> dove intervenire prima</u>, cosa evitare, e cosa aspettarti <em>settimana dopo settimana</em>.
      </>
    ),
  },
  {
    key: 'beneficio-interiore-3',
    content: (
      <>
        Scoprirai se i metodi che hai provato hanno fallito <strong>per colpa tua</strong> o perché erano{' '}
        <u>gli strumenti sbagliati</u>. In quasi tutti i casi, <em>non sei stata tu il problema</em>.
      </>
    ),
  },
  {
    key: 'beneficio-interiore-4',
    content: (
      <>
        Imparerai a distinguere i sintomi che <strong>peggiorano l&apos;ansia</strong> da quelli che segnalano la tua{' '}
        <u>ripresa</u>. Smetterai di confondere i segnali di guarigione con <em>nuove minacce</em>.
      </>
    ),
  },
] as const

const BENEFICI_DELIVERABLE = [
  {
    key: 'beneficio-deliverable-1',
    content: (
      <>
        <strong>90 minuti 1-1 con Silvia</strong>, in presenza a Torino o in videochiamata. Tempo tutto tuo,
        <u> senza agende condivise</u> né orologi sul muro.
      </>
    ),
  },
  {
    key: 'beneficio-deliverable-2',
    content: (
      <>
        Un&apos;<strong>analisi approfondita della tua situazione specifica</strong>, che tocca corpo, mente e storia
        personale. Finalmente qualcuno che <em>mette insieme i pezzi</em> invece di guardare solo i sintomi.
      </>
    ),
  },
  {
    key: 'beneficio-deliverable-3',
    content: (
      <>
        Un <strong>piano d&apos;azione strutturato</strong>, con <u>primi passi concreti</u> da fare già nei giorni
        successivi alla sessione e indicazioni per il medio termine.
      </>
    ),
  },
  {
    key: 'beneficio-deliverable-4',
    content: (
      <>
        <strong>Chiarezza totale sulla tua situazione</strong>: al termine della sessione saprai se il percorso di
        Silvia è quello giusto per te oppure no, <em>senza ambiguità e senza pressione</em>.
      </>
    ),
  },
] as const

export function BeneficiSection() {
  return (
    <section className="sessioneStrategicaSection sessioneStrategicaBeneficiSection" id="benefici" aria-labelledby="benefici-title">
      <div className="sessioneStrategicaSectionInner">
        <header className="sessioneStrategicaBeneficiHeader">
          <h2 id="benefici-title" className="sessioneStrategicaBeneficiTitle">
            Cosa cambia in te dopo la sessione strategica con Silvia.
          </h2>
          <p className="sessioneStrategicaBeneficiLead">
            La Sessione Strategica non è una chiacchierata generica né la classica &quot;prima visita conoscitiva&quot;. È un intervento specifico,
            costruito sul tuo caso, con un prima e un dopo tangibili.
          </p>
        </header>

        <div className="sessioneStrategicaBeneficiGrid" role="region" aria-label="Carosello benefici della sessione strategica">
          <article className="sessioneStrategicaBeneficiBlock" aria-labelledby="benefici-interni-title">
            <h3 id="benefici-interni-title" className="sessioneStrategicaBeneficiBlockTitle">
              Quello che ti porti dentro.
            </h3>
            <ul className="sessioneStrategicaBeneficiList">
              {BENEFICI_INTERIORI.map((item) => (
                <li key={item.key}>{item.content}</li>
              ))}
            </ul>
            <p className="sessioneStrategicaBeneficiBlockSwipeHint" aria-hidden="true">
              <span>&larr;</span> SCORRI PER VEDERE ANCHE L&apos;ALTRO RIQUADRO <span>&rarr;</span>
            </p>
          </article>

          <article className="sessioneStrategicaBeneficiBlock" aria-labelledby="benefici-deliverable-title">
            <h3 id="benefici-deliverable-title" className="sessioneStrategicaBeneficiBlockTitle">
              Quello che ti porti a casa.
            </h3>
            <ul className="sessioneStrategicaBeneficiList">
              {BENEFICI_DELIVERABLE.map((item) => (
                <li key={item.key}>{item.content}</li>
              ))}
            </ul>
            <p className="sessioneStrategicaBeneficiBlockSwipeHint" aria-hidden="true">
              <span>&larr;</span> SCORRI PER VEDERE ANCHE L&apos;ALTRO RIQUADRO <span>&rarr;</span>
            </p>
          </article>
        </div>

        <aside className="sessioneStrategicaPainInlineCta" aria-label="Invito alla candidatura">
          <a className="sessioneStrategicaPainInlineCtaBtn" href="#offerta-divider">
            Candidati alla Sessione Strategica Scontata
          </a>
        </aside>
      </div>
    </section>
  )
}
