import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type PainPoint = {
  id: string
  title: string
  description: string
}

type CompareItem = {
  id: string
  label: string
  title: string
  promise: string
  limit: string
  shift: string
  quote?: string
}

const ANSIA_PAIN_POINTS: PainPoint[] = [
  {
    id: 'rumore-mentale',
    title: 'Vivere sempre con il “rumore mentale” acceso',
    description:
      'Non è solo pensare troppo. È non riuscire mai a spegnere davvero. Anche quando dovresti rilassarti, la mente continua a girare: scenari, problemi, “e se…”. Ti sembra di non avere mai un vero momento di pausa. E più cerchi di fermarti, più i pensieri aumentano. Non sei mai completamente presente, perché una parte di te è sempre altrove, a cercare di controllare il futuro.',
  },
  {
    id: 'allerta-costante',
    title: 'Sentirti costantemente in allerta senza un motivo reale',
    description:
      'È come vivere con un allarme acceso anche quando non sta succedendo niente. Il corpo è teso, il respiro corto, le spalle rigide. Non c’è un pericolo reale, ma la sensazione è quella. E questa tensione continua ti consuma, perché non hai mai un vero momento di “ok, sono tranquillo”. È una stanchezza che non passa nemmeno quando ti fermi.',
  },
  {
    id: 'non-fidarti-corpo',
    title: 'Non fidarti più del tuo corpo',
    description:
      'Ogni sensazione diventa un potenziale problema. Il cuore accelera e pensi che ci sia qualcosa che non va. Il respiro cambia e ti preoccupi. Inizi a controllarti continuamente. Il risultato? Più controlli, più amplifichi tutto. E così il corpo diventa qualcosa da gestire, non un posto in cui sentirti al sicuro.',
  },
  {
    id: 'rimandare-paura',
    title: 'Rimandare continuamente per paura di non farcela',
    description:
      'Sai cosa dovresti fare. Sai anche che probabilmente ne saresti capace. Ma rimandi. Perché dentro c’è sempre quel dubbio: “E se non reggo?”, “E se va male?”. Così aspetti il momento perfetto, la condizione ideale… che non arriva mai. E nel frattempo la tua vita resta ferma.',
  },
  {
    id: 'inadeguato-altri',
    title: 'Sentirti inadeguato rispetto agli altri',
    description:
      'Guardi gli altri e ti sembra che per loro sia tutto più semplice. Parlano, decidono, agiscono senza pensarci troppo. Tu invece ti senti sempre un passo indietro, come se avessi qualcosa in meno. Questo crea un senso di inferiorità silenzioso, che ti porta a chiuderti sempre di più.',
  },
  {
    id: 'stanco-sempre',
    title: 'Essere sempre stanco, anche senza fare nulla',
    description:
      'L’ansia ti consuma energia anche quando sei fermo. Il corpo è sempre attivo, la mente sempre accesa. Dormi ma non recuperi, ti svegli già stanco, e durante il giorno fai fatica a concentrarti. Non è pigrizia. È un sistema nervoso che non si spegne mai.',
  },
]

const PANICO_PAIN_POINTS: PainPoint[] = [
  {
    id: 'paura-ritorni',
    title: 'La paura costante che possa succedere di nuovo',
    description:
      'Il vero problema non è solo l’attacco. È quello che succede dopo. Anche quando stai bene, vivi con la paura che possa tornare da un momento all’altro. E questo ti tiene sempre in allerta. Non sei mai davvero tranquillo.',
  },
  {
    id: 'morire-infarto',
    title: 'Sentire che stai per morire o avere un infarto',
    description:
      'Durante un attacco, la sensazione è reale. Il cuore impazzisce, il respiro si blocca, il petto si stringe. E nella mente arriva subito il pensiero: “Sto morendo”. Anche se poi passa, quella paura resta. E la prossima volta fa ancora più paura.',
  },
  {
    id: 'perdere-controllo',
    title: 'Perdere il controllo davanti agli altri',
    description:
      'Non è solo stare male. È farlo davanti agli altri. La paura di svenire, di crollare, di “fare una scena”. Questo rende tutto più intenso, perché non puoi semplicemente sparire. Ti senti intrappolato.',
  },
  {
    id: 'evitare-luoghi',
    title: 'Evitare luoghi e situazioni per paura del panico',
    description:
      'Inizi a evitare. Prima i posti affollati, poi le situazioni scomode, poi sempre di più. Ogni evitamento ti dà sollievo… ma restringe la tua vita. Fino a sentirti limitato anche nelle cose più semplici.',
  },
  {
    id: 'non-stare-solo',
    title: 'Non riuscire più a stare da solo',
    description:
      'Hai bisogno di qualcuno. Una persona, un riferimento, qualcosa che ti faccia sentire al sicuro. L’idea di stare da solo ti mette ansia, perché pensi: “E se succede qualcosa?”. E così perdi autonomia.',
  },
  {
    id: 'derealizzazione',
    title: 'Sentirti fuori dalla realtà (derealizzazione)',
    description:
      'Durante il panico, a volte tutto sembra irreale. I suoni lontani, la realtà ovattata, come se fossi dentro un film. È una sensazione fortissima e spaventosa, perché sembra di perdere il contatto con il mondo. E questo aumenta ancora di più la paura di impazzire.',
  },
]

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

  const ansiaRailRef = useRef<HTMLDivElement | null>(null)
  const panicoRailRef = useRef<HTMLDivElement | null>(null)
  const [ansiaActiveId, setAnsiaActiveId] = useState(ANSIA_PAIN_POINTS[0]?.id ?? 'rumore-mentale')
  const [panicoActiveId, setPanicoActiveId] = useState(PANICO_PAIN_POINTS[0]?.id ?? 'paura-ritorni')

  const activeIndex = useMemo(() => {
    const idx = COMPARE_ITEMS.findIndex((i) => i.id === activeId)
    return idx === -1 ? 0 : idx
  }, [activeId])

  const ansiaActiveIndex = useMemo(() => {
    const idx = ANSIA_PAIN_POINTS.findIndex((i) => i.id === ansiaActiveId)
    return idx === -1 ? 0 : idx
  }, [ansiaActiveId])

  const panicoActiveIndex = useMemo(() => {
    const idx = PANICO_PAIN_POINTS.findIndex((i) => i.id === panicoActiveId)
    return idx === -1 ? 0 : idx
  }, [panicoActiveId])

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

  function scrollPain(kind: 'ansia' | 'panico', id: string) {
    if (kind === 'ansia') setAnsiaActiveId(id)
    if (kind === 'panico') setPanicoActiveId(id)
    const rail = kind === 'ansia' ? ansiaRailRef.current : panicoRailRef.current
    if (!rail) return
    const el = rail.querySelector<HTMLElement>(`[data-pain-card="${kind}:${id}"]`)
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  function stepPain(kind: 'ansia' | 'panico', dir: -1 | 1) {
    const items = kind === 'ansia' ? ANSIA_PAIN_POINTS : PANICO_PAIN_POINTS
    const activeIdx = kind === 'ansia' ? ansiaActiveIndex : panicoActiveIndex
    const next = Math.max(0, Math.min(items.length - 1, activeIdx + dir))
    const id = items[next]?.id
    if (id) scrollPain(kind, id)
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
              aiutare chi soffre di ansia e attacchi di panico a uscirne in modo stabile, nella vita vera.
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

          <section
            className="homeFitCard homeFitCardYes homeFitCardYesCombined"
            aria-label="Per chi è il percorso di Silvia"
          >
            <div className="homeFitYesInner">
              <figure className="homeFitYesPortrait" aria-label="Foto di Silvia">
                <img
                  className="homeFitYesPortraitImg"
                  src="/Immagini/foto1.png"
                  alt="Silvia Semeraro"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <div className="homeFitYesContent">
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
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="section homePain" aria-labelledby="pain-title">
        <div className="homePainPanel" aria-label="Introduzione pain points">
          <figure className="homePainPanelMedia" aria-label="Foto di Silvia">
            <img
              className="homePainPanelMediaImg"
              src="/Immagini/foto2.png"
              alt="Silvia Semeraro"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <header className="homePainHead">
            <p className="homePainKicker">Pain points (senza zucchero)</p>
            <h2 id="pain-title" className="homePainTitle">
              Se ti riconosci qui, non è “carattere”.
              <span className="homePainTitleSub">È un sistema che si è incastrato.</span>
            </h2>
            <p className="homePainLead">
              Li separiamo in modo netto: <strong>ansia</strong> (stato) e <strong>attacchi di panico</strong> (evento).
              Così capisci subito dov’è il tuo punto critico.
            </p>
          </header>
        </div>

        <div className="homePainBlocks" aria-label="Caroselli pain points">
          <section className="homePainBlock" aria-labelledby="pain-ansia-title">
            <header className="homePainBlockHead">
              <div className="homePainBlockHeadCopy">
                <p className="homePainBlockTag">Ansia</p>
                <h3 id="pain-ansia-title" className="homePainBlockTitle">
                  Stato continuo
                </h3>
                <p className="homePainBlockLead">È quel sottofondo che non stacca mai.</p>
              </div>
              <div className="homePainControls" aria-label="Controlli carosello ansia">
                <button className="homePainBtn" type="button" onClick={() => stepPain('ansia', -1)} aria-label="Precedente">
                  ‹
                </button>
                <button className="homePainBtn" type="button" onClick={() => stepPain('ansia', 1)} aria-label="Successivo">
                  ›
                </button>
              </div>
            </header>

            <div className="homePainRail" ref={ansiaRailRef} aria-label="Pain points ansia">
              {ANSIA_PAIN_POINTS.map((item) => (
                <article
                  key={item.id}
                  className={`homePainCard ${item.id === ansiaActiveId ? 'homePainCardActive' : ''}`}
                  data-pain-card={`ansia:${item.id}`}
                  tabIndex={-1}
                  aria-label={item.title}
                >
                  <header className="homePainCardHead">
                    <p className="homePainCardTag">Ansia</p>
                    <h4 className="homePainCardTitle">{item.title}</h4>
                  </header>
                  <div className="homePainCardBody">
                    <p className="homePainCardText">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="homePainHint" aria-label="Suggerimento">
              Scorri orizzontalmente oppure usa le frecce.
            </p>
          </section>

          <section className="homePainBlock" aria-labelledby="pain-panico-title">
            <header className="homePainBlockHead">
              <div className="homePainBlockHeadCopy">
                <p className="homePainBlockTag homePainBlockTagPanic">Attacchi di panico</p>
                <h3 id="pain-panico-title" className="homePainBlockTitle">
                  Evento improvviso
                </h3>
                <p className="homePainBlockLead">Arriva, esplode, e poi ti cambia i giorni dopo.</p>
              </div>
              <div className="homePainControls" aria-label="Controlli carosello attacchi di panico">
                <button className="homePainBtn" type="button" onClick={() => stepPain('panico', -1)} aria-label="Precedente">
                  ‹
                </button>
                <button className="homePainBtn" type="button" onClick={() => stepPain('panico', 1)} aria-label="Successivo">
                  ›
                </button>
              </div>
            </header>

            <div className="homePainRail" ref={panicoRailRef} aria-label="Pain points attacchi di panico">
              {PANICO_PAIN_POINTS.map((item) => (
                <article
                  key={item.id}
                  className={`homePainCard ${item.id === panicoActiveId ? 'homePainCardActive' : ''}`}
                  data-pain-card={`panico:${item.id}`}
                  tabIndex={-1}
                  aria-label={item.title}
                >
                  <header className="homePainCardHead">
                    <p className="homePainCardTag homePainCardTagPanic">Panico</p>
                    <h4 className="homePainCardTitle">{item.title}</h4>
                  </header>
                  <div className="homePainCardBody">
                    <p className="homePainCardText">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="homePainHint" aria-label="Suggerimento">
              Se ti “blocca” la vita dopo, sei qui.
            </p>
          </section>
        </div>
      </section>

      <section className="section homeCompare" aria-labelledby="compare-title">
        <div className="homeComparePanel" aria-label="Noi vs loro (senza sconti)">
          <figure className="homeComparePanelMedia" aria-label="Foto di Silvia">
            <img
              className="homeComparePanelMediaImg"
              src="/Immagini/foto3.png"
              alt="Silvia Semeraro"
              loading="lazy"
              decoding="async"
            />
          </figure>

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
        </div>

        <div className="homeCompareGrid" aria-label="Tabella comparativa">
          <div className="homeCompareGridHead">
            <div className="homeCompareGridHeadInner">
              <div className="homeCompareGridHeadCopy">
                <h3 className="homeCompareGridTitle">In sintesi: gestione vs libertà</h3>
                <p className="homeCompareGridLead">
                  Non diventi “senza ansia”. Diventi <strong>libero anche quando il corpo si attiva</strong>.
                </p>
              </div>

              <figure className="homeCompareGridMedia" aria-label="Immagine riepilogo">
                <img
                  className="homeCompareGridMediaImg"
                  src="/Immagini/foto4.png"
                  alt="Silvia Semeraro"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
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

