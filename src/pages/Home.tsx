import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type CompareItem = {
  id: string
  label: string
  title: string
  promise: string
  limit: string
  shift: string
  quote?: string
}

const COMPARE_ITEMS: CompareItem[] = [
  {
    id: 'psicoterapia',
    label: 'Psicoterapia',
    title: 'Psicologi e psicoterapia tradizionale',
    promise:
      'Ti aiuta a dare senso, collegare eventi, costruire una narrazione più chiara di ciò che vivi.',
    limit:
      'Fuori dalla stanza spesso non cambia quasi niente: capisci benissimo “perché”… ma continui a evitare e a vivere in funzione del sintomo.',
    shift: 'Non nasce per farti raccontare meglio l’ansia. Nasce per farti smettere di organizzare la vita intorno a lei.',
  },
  {
    id: 'farmaci',
    label: 'Farmaci',
    title: 'Farmaci',
    promise: 'Quando stai male davvero, abbassano tutto. E a volte sono l’unica via possibile, in quel momento.',
    limit:
      'Rischiano di diventare un “piano B”: ti senti al sicuro solo se puoi spegnere tutto. Non è libertà: è gestione controllata del rischio.',
    shift: 'Non ti do qualcosa su cui appoggiarti. Ti insegno a non averne più bisogno.',
  },
  {
    id: 'mindfulness',
    label: 'Rilassamento',
    title: 'Mindfulness, yoga e tecniche rilassanti',
    promise: 'Creano spazio, rallentano, aiutano a respirare — ottime finché sei in un contesto “protetto”.',
    limit:
      'Il panico non arriva sul tappetino: arriva in macchina, in riunione, tra le persone. In quel momento non ti serve un concetto: ti serve una risposta.',
    shift: 'Il lavoro inizia dove le tecniche generiche finiscono: nel momento in cui l’ansia si attiva davvero.',
  },
  {
    id: 'app',
    label: 'Contenuti',
    title: 'App, corsi online e contenuti gratuiti',
    promise: 'Informazioni, esercizi, audio, protocolli. Ti fanno sentire che stai facendo qualcosa.',
    limit:
      'Non ti vedono quando stai evitando, quando usi la tecnica per scappare o quando rinforzi il meccanismo. E non ci sono quando il corpo parte davvero.',
    shift: 'Non è qualcosa che consumi. È qualcosa che ti accompagna mentre cambi.',
  },
  {
    id: 'coach',
    label: 'Coach',
    title: 'Mental coach generici',
    promise: 'Risultati, disciplina, “spingi di più”.',
    limit:
      'Se sei già in allarme costante, quella spinta non ti libera: ti schiaccia e aggiunge ansia all’ansia (anche la paura di non farcela “come dovresti”).',
    shift: 'Non ti spingo oltre il sintomo. Ti insegno a entrarci senza paura.',
  },
  {
    id: 'rassicurazioni',
    label: 'Controllo',
    title: 'Rassicurazioni, controlli e ricerca continua',
    promise: 'Ti danno tregua: esami, Google, conferme, check del corpo.',
    limit:
      'Ogni tregua insegna al sistema lo stesso messaggio: “Da solo non sono al sicuro, devo verificare”. E la vita diventa controllo, non libertà.',
    shift: 'Interrompiamo il meccanismo alla radice: non ti “forzo” a smettere, ti porto nel punto in cui non ti serve più.',
  },
]

export function Home() {
  const railRef = useRef<HTMLDivElement | null>(null)
  const [activeId, setActiveId] = useState(COMPARE_ITEMS[0]?.id ?? 'psicoterapia')

  const activeIndex = useMemo(() => {
    const idx = COMPARE_ITEMS.findIndex((i) => i.id === activeId)
    return idx === -1 ? 0 : idx
  }, [activeId])

  function scrollToItem(id: string) {
    setActiveId(id)
    const rail = railRef.current
    if (!rail) return
    const el = rail.querySelector<HTMLElement>(`[data-compare-card="${id}"]`)
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  function stepRail(dir: -1 | 1) {
    const next = Math.max(0, Math.min(COMPARE_ITEMS.length - 1, activeIndex + dir))
    const id = COMPARE_ITEMS[next]?.id
    if (id) scrollToItem(id)
  }

  return (
    <>
      <section className="hero homeHero" aria-labelledby="hero-title">
        <div className="homeHeroCopy">
          <p className="homeHeroTag" aria-label="Etichetta">
            Sono qui per te
          </p>
          <h1 id="hero-title">
            <span className="homeHeroTitleLine1">
              Ogni giorno mi alzo con una sola <span className="homeHeroAccent">Missione</span>:
            </span>
            <span className="homeHeroTitleLine2">
              aiutare chi soffre di ansia e attacchi di panico a risolvere definitivamente il problema.
            </span>
          </h1>
        </div>

        <figure className="homeHeroVideo" aria-label="Video introduttivo">
          <div className="videoEmbed">
            <iframe
              src="https://iframe.videodelivery.net/6ce867ac62c039c989cad30f7699d750"
              title="Video: introduzione"
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </figure>

        <div className="ctaRow homeHeroCtas">
          <Link className="button primary" to="/contatti-e-dove-lavoro">
            Prenota una consulenza
          </Link>
          <Link className="button ghost" to="/percorsi">
            Scopri i percorsi
          </Link>
        </div>
      </section>

      <section className="section homeFit" aria-labelledby="fit-title">
        <header className="homeFitHead">
          <p className="homeFitKicker">Chiarezza, prima di tutto</p>
          <h2 id="fit-title" className="homeFitTitle">
            Il percorso di Silvia è un lavoro vero.
            <span className="homeFitTitleSub">E non è per tutti.</span>
          </h2>
          <p className="homeFitLead">
            Leggi queste due liste come un filtro. Se ti riconosci nella seconda, sei nel posto giusto.
          </p>
        </header>

        <div className="homeFitGrid" role="list">
          <section className="homeFitCard homeFitCardNo" aria-label="Per chi NON è il percorso di Silvia">
            <div className="homeFitCardTop">
              <p className="homeFitCardTag">Per chi NON è</p>
              <h3 className="homeFitCardTitle">Il percorso di Silvia</h3>
            </div>
            <ul className="homeFitList homeFitListNo">
              <li>
                Non è per chi cerca la <strong>pillola magica</strong> o <em>la frase giusta</em> che faccia sparire
                tutto senza <u>mettersi in gioco</u>. Qui non si promettono <strong>scorciatoie</strong>, ma un
                <strong>lavoro vero</strong> per <u>rieducare</u> <em>corpo, mente e comportamento</em>.
              </li>
              <li>
                Non è per chi vuole solo <strong>sfogarsi all’infinito</strong> senza mai <u>passare all’azione</u>.
                Questo percorso non serve a restare inchiodati nel <em>racconto del problema</em>, ma a
                tornare <strong>progressivamente a vivere</strong>.
              </li>
              <li>
                Non è per chi vuole continuare a <u>delegare la propria sicurezza</u> a <strong>farmaci</strong>,
                <em>rassicurazioni</em>, accompagnatori o rituali protettivi senza mettere mano alla
                <strong>radice</strong> del <em>meccanismo ansioso</em>.
              </li>
              <li>
                Non è per chi pretende <strong>perfezione immediata</strong>. Se vuoi sentirti “guarito” in modo
                <em>lineare</em>, senza <u>ricadute</u>, senza fatica e senza <u>esposizione al disagio</u>, questo
                non è il posto giusto.
              </li>
            </ul>
          </section>

          <figure className="homeFitPortrait" aria-label="Foto di Silvia">
            <img
              className="homeFitPortraitImg"
              src="/Immagini/foto1.png"
              alt="Silvia Semeraro"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <section className="homeFitCard homeFitCardYes" aria-label="Per chi è il percorso di Silvia">
            <div className="homeFitCardTop">
              <p className="homeFitCardTag">Per chi è davvero</p>
              <h3 className="homeFitCardTitle">Il percorso di Silvia</h3>
            </div>
            <ul className="homeFitList homeFitListYes">
              <li>
                È per chi è stanco di vivere con il <strong>corpo sempre in allarme</strong>: tachicardia, fame
                d’aria, tensione, nausea, tremori, insonnia, e vuole finalmente <u>capire quei segnali</u>
                invece di <em>temerli</em>.
              </li>
              <li>
                È per chi sente che <strong>ansia o panico</strong> stanno <u>restringendo la propria vita</u>:
                evitare luoghi, persone, riunioni, viaggi, guida, momenti sociali o opportunità lavorative,
                e vuole <strong>riprendersi i propri spazi</strong>.
              </li>
              <li>
                È per chi non vuole più sentirsi <em>fragile</em>, <em>rotto</em> o dipendente da qualcosa o qualcuno
                per stare bene, ma desidera costruire <strong>autonomia reale</strong> e <u>fiducia concreta</u> in se
                stesso.
              </li>
              <li>
                È per chi vuole un percorso <strong>pratico</strong>, <em>umano</em> e <strong>trasformativo</strong>: non solo
                parole, ma <u>strumenti</u> da usare nella <em>vita vera</em> per tornare a essere <strong>libero</strong>,
                <strong>presente</strong> ed <strong>efficace</strong>.
              </li>
            </ul>
          </section>
        </div>
      </section>

      <section className="section homeCompare" aria-labelledby="compare-title">
        <header className="homeCompareHead">
          <p className="homeCompareKicker">Noi vs loro (senza sconti)</p>
          <h2 id="compare-title" className="homeCompareTitle">
            Il mio percorso vs le soluzioni che hai già provato
          </h2>
          <p className="homeCompareLead">
            Se sei qui, probabilmente non stai cercando <strong>un’altra soluzione</strong>. Stai cercando quella che
            ti fa smettere di vivere in funzione di quello che senti nel corpo — perché quello che ansia e panico ti
            rubano, ogni giorno, è <strong>libertà</strong>.
          </p>
        </header>

        <div className="homeCompareTop">
          <aside className="homeCompareAside" aria-label="Sintesi del confronto">
            <div className="homeCompareAsideCard">
              <p className="homeCompareAsideTag">Il punto non è “gestire”</p>
              <p className="homeCompareAsideText">
                Molte soluzioni diffuse sono costruite per aiutarti a <strong>gestire</strong>… non a uscire davvero.
              </p>
              <div className="homeCompareAsideDivider" role="separator" />
              <ul className="homeComparePills" aria-label="Cosa cambia nel mio percorso">
                <li className="homeComparePill">
                  <span className="homeComparePillK">Focus</span>
                  <span className="homeComparePillV">momento reale di attivazione</span>
                </li>
                <li className="homeComparePill">
                  <span className="homeComparePillK">Obiettivo</span>
                  <span className="homeComparePillV">autonomia, non appoggi</span>
                </li>
                <li className="homeComparePill">
                  <span className="homeComparePillK">Risultato</span>
                  <span className="homeComparePillV">vita che si riallarga</span>
                </li>
              </ul>

              <div className="homeCompareAsideCtas">
                <Link className="button primary" to="/percorsi">
                  Vedi come funziona
                </Link>
                <Link className="button ghost" to="/contatti-e-dove-lavoro">
                  Parliamone
                </Link>
              </div>
            </div>
          </aside>

          <div className="homeCompareRailWrap" aria-label="Confronto orizzontale">
            <div className="homeCompareRailControls" aria-label="Controlli scorrimento">
              <button className="homeCompareRailBtn" type="button" onClick={() => stepRail(-1)} aria-label="Precedente">
                ‹
              </button>
              <div className="homeCompareRailTabs" role="tablist" aria-label="Categorie">
                {COMPARE_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    role="tab"
                    aria-selected={item.id === activeId}
                    className={`homeCompareTab ${item.id === activeId ? 'homeCompareTabActive' : ''}`}
                    type="button"
                    onClick={() => scrollToItem(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button className="homeCompareRailBtn" type="button" onClick={() => stepRail(1)} aria-label="Successivo">
                ›
              </button>
            </div>

            <div className="homeCompareRail" ref={railRef}>
              {COMPARE_ITEMS.map((item) => (
                <article
                  key={item.id}
                  className={`homeCompareCard ${item.id === activeId ? 'homeCompareCardActive' : ''}`}
                  data-compare-card={item.id}
                  tabIndex={-1}
                  aria-label={item.title}
                >
                  <header className="homeCompareCardHead">
                    <p className="homeCompareCardTag">Soluzione comune</p>
                    <h3 className="homeCompareCardTitle">{item.title}</h3>
                  </header>

                  <div className="homeCompareCardBody">
                    <div className="homeCompareRow">
                      <p className="homeCompareRowK">Cosa ti promette</p>
                      <p className="homeCompareRowV">{item.promise}</p>
                    </div>
                    <div className="homeCompareRow homeCompareRowWarn">
                      <p className="homeCompareRowK">Dove si rompe</p>
                      <p className="homeCompareRowV">{item.limit}</p>
                    </div>
                    <div className="homeCompareRow homeCompareRowShift">
                      <p className="homeCompareRowK">Nel mio percorso</p>
                      <p className="homeCompareRowV">{item.shift}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="homeCompareHint" aria-label="Suggerimento">
              Scorri orizzontalmente o usa le categorie: l’idea è semplice — smettere di <strong>monitorare</strong> e
              ricominciare a <strong>vivere</strong>.
            </p>
          </div>
        </div>

        <div className="homeCompareGrid" aria-label="Tabella comparativa">
          <div className="homeCompareGridHead">
            <h3 className="homeCompareGridTitle">In sintesi: gestione vs libertà</h3>
            <p className="homeCompareGridLead">
              Non diventi “senza ansia”. Diventi <strong>libero anche quando il corpo si attiva</strong>.
            </p>
          </div>

          <div className="homeCompareTable" role="table" aria-label="Confronto">
            <div className="homeCompareTableRow homeCompareTableRowHead" role="row">
              <div className="homeCompareTableCell homeCompareTableCellHead" role="columnheader">
                Soluzioni che hai già provato
              </div>
              <div className="homeCompareTableCell homeCompareTableCellHead homeCompareTableCellRight" role="columnheader">
                Il mio percorso
              </div>
            </div>

            <div className="homeCompareTableRow" role="row">
              <div className="homeCompareTableCell" role="cell">
                Ti aiutano a “stare meglio” per un po’
              </div>
              <div className="homeCompareTableCell homeCompareTableCellRight" role="cell">
                Ti allena a stare nel momento e cambiare la risposta automatica
              </div>
            </div>

            <div className="homeCompareTableRow" role="row">
              <div className="homeCompareTableCell" role="cell">
                Ti danno appoggi (rituali, controlli, piani B)
              </div>
              <div className="homeCompareTableCell homeCompareTableCellRight" role="cell">
                Togli, una alla volta, le “sicurezze” che oggi ti tengono fermo
              </div>
            </div>

            <div className="homeCompareTableRow" role="row">
              <div className="homeCompareTableCell" role="cell">
                Funzionano soprattutto in condizioni protette
              </div>
              <div className="homeCompareTableCell homeCompareTableCellRight" role="cell">
                Funziona nella vita vera: macchina, riunioni, persone, luoghi “difficili”
              </div>
            </div>

            <div className="homeCompareTableRow" role="row">
              <div className="homeCompareTableCell" role="cell">
                Ti fanno diventare bravo a capire
              </div>
              <div className="homeCompareTableCell homeCompareTableCellRight" role="cell">
                Ti fa tornare bravo a vivere
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

