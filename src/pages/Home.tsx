import { useMemo, useRef, useState } from 'react'
import { DualCtas } from '../components/DualCtas'

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

type FaqItem = {
  id: string
  question: string
  answer: string
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

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'ansia-vs-panico',
    question: 'Come faccio a capire se quello che provo è ansia o attacchi di panico?',
    answer:
      'Molte persone si fanno questa domanda perché i sintomi sono molto simili e spaventano. L’ansia è più costante, mentre il panico è improvviso e molto intenso. Capire la differenza è fondamentale, perché cambia completamente il modo in cui si lavora sul problema e su come si interviene.',
  },
  {
    id: 'liberarsi-davvero',
    question: 'È possibile liberarsi davvero dall’ansia o bisogna conviverci per sempre?',
    answer:
      'Molti pensano che l’ansia sia qualcosa da gestire a vita. In realtà non sei “fatto così”. Se lavori sul meccanismo corretto, puoi smettere di esserne limitato e tornare a vivere senza quella paura costante che ti accompagna ogni giorno.',
  },
  {
    id: 'ansia-quando-va-bene',
    question: 'Perché l’ansia mi viene anche quando va tutto bene?',
    answer:
      'È una delle cose più frustranti. Non c’è un motivo evidente, eppure il corpo si attiva lo stesso. Succede perché il sistema nervoso è rimasto in uno stato di allerta, indipendentemente da quello che sta succedendo fuori.',
  },
  {
    id: 'fermarsi-panico',
    question: 'Come faccio a fermare un attacco di panico quando sta iniziando?',
    answer:
      'Quando il panico parte, sembra ingestibile. In realtà esistono strategie precise per gestire quel momento senza scappare e senza peggiorare il loop, ma vanno imparate e allenate nel modo corretto.',
  },
  {
    id: 'controllo-peggiora',
    question: 'Perché più cerco di controllare l’ansia, più peggiora?',
    answer:
      'Molti provano a controllare il respiro, i pensieri o le sensazioni. Il problema è che il cervello interpreta quel controllo come un segnale di pericolo, e mantiene il sistema in allerta. È per questo che spesso sembra peggiorare.',
  },
  {
    id: 'sintomi-fisici',
    question: 'È normale avere sintomi fisici così forti anche se “non ho nulla”?',
    answer:
      'Tachicardia, respiro corto, vertigini, nausea… sono sintomi reali. Non è “tutto nella testa”. È il corpo che reagisce a uno stato di allerta del sistema nervoso, anche in assenza di un pericolo reale.',
  },
  {
    id: 'vita-normale',
    question: 'Posso tornare a fare una vita normale senza paura?',
    answer:
      'Chi soffre di ansia o panico spesso ha limitato la propria vita: viaggi, lavoro, relazioni. La risposta è sì, ma non evitando il problema. Serve imparare a gestire quello che succede dentro mentre vivi.',
  },
  {
    id: 'durata-percorso',
    question: 'Quanto dura il percorso?',
    answer:
      'Il percorso ha una durata di 90 giorni ed è strutturato in modo progressivo, per accompagnarti passo dopo passo a uscire dal loop ansia-panico e costruire autonomia reale, non dipendenza.',
  },
  {
    id: 'dove-percorso',
    question: 'Dove si effettua il percorso?',
    answer:
      'Puoi scegliere se fare il percorso in presenza, nei due studi in cui lavoro a Torino, oppure completamente online da remoto. In questo modo puoi adattarlo alle tue esigenze e iniziare senza ostacoli.',
  },
  {
    id: 'panico-durante-percorso',
    question: 'E se durante il percorso mi torna un attacco di panico?',
    answer:
      'È una paura molto comune. In realtà il percorso serve proprio a questo: darti strumenti concreti per gestire quei momenti senza tornare al punto di partenza, ma anzi utilizzarli per rafforzarti.',
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
    <div className="homePage">
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
              Aiutare chi soffre di Ansia e Attacchi di Panico a uscirne in maniera Veloce.
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

        <DualCtas className="homeHeroCtas" />
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

        <DualCtas />
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

        <DualCtas />
      </section>

      <section className="section homePromise" aria-labelledby="promise-title">
        <div className="homePromiseShell">
          <header className="homePromiseHead">
            <p className="homePromiseKicker">Soluzione / promessa</p>
            <h2 id="promise-title" className="homePromiseTitle">
              Non si tratta di “non provare più ansia”.
              <span className="homePromiseTitleSub">Si tratta di smettere di esserne dominato.</span>
            </h2>
            <p className="homePromiseLead">
              Se oggi vivi controllandoti, anticipando, evitando e tenendo sempre un piano B, il punto non è “capire di più”.
              Il punto è cambiare la risposta automatica nel momento reale in cui il sistema si attiva.
            </p>
          </header>

          <div className="homePromiseGrid" aria-label="Promessa, paure e metodo">
            <article className="homePromisePane homePromisePaneStory" aria-labelledby="promise-story-title">
              <header className="homePromisePaneHead">
                <p className="homePromisePaneTag">Risultato promesso</p>
                <h3 id="promise-story-title" className="homePromisePaneTitle">
                  Una giornata “normale” senza doverti monitorare
                </h3>
              </header>

              <div className="homePromisePaneBody">
                <p>
                  Prova a immaginare, anche solo per un attimo, come sarebbe la tua giornata se non dovessi più controllarti
                  continuamente.
                </p>
                <p>
                  Ti svegli al mattino e, invece di fare il check automatico su come sta il tuo corpo, sul battito, sul respiro o
                  su eventuali sensazioni strane, semplicemente inizi la giornata. Senza quel sottofondo costante di tensione che ti
                  accompagna appena apri gli occhi.
                </p>
                <p>
                  Esci di casa senza dover pensare a dove potresti sentirti male, senza dover individuare mentalmente vie di fuga,
                  senza dover avere sempre un piano B. Vai al lavoro, parli con le persone, vivi le situazioni quotidiane con una
                  sensazione di normalità che magari oggi ti sembra lontana.
                </p>
                <p>
                  E soprattutto, il tuo corpo smette di essere qualcosa da controllare e da temere, e torna a essere un posto in cui
                  sentirti al sicuro. Se arriva una sensazione, non scatta più il panico. La riconosci, la lasci passare, e continui
                  a fare quello che stavi facendo.
                </p>
                <p>
                  Questo non significa non provare mai più ansia. Significa non esserne più dominato. Significa tornare ad avere il
                  controllo della tua vita, senza dover combattere ogni giorno contro quello che senti.
                </p>
              </div>
            </article>

            <aside className="homePromisePane homePromisePaneFears" aria-labelledby="promise-fears-title">
              <header className="homePromisePaneHead">
                <p className="homePromisePaneTag homePromisePaneTagAlt">Gestione delle paure</p>
                <h3 id="promise-fears-title" className="homePromisePaneTitle">
                  “E se non funzionasse anche per me?”
                </h3>
              </header>

              <div className="homePromisePaneBody">
                <p>
                  È molto probabile che, mentre stai leggendo, una parte di te stia pensando: <strong>“E se non funzionasse anche per me?”</strong>
                </p>
                <p>
                  Magari hai già provato altre strade, hai cercato soluzioni, hai investito tempo, energie e forse anche soldi… e non
                  hai ottenuto il cambiamento che speravi. È normale che oggi tu abbia dei dubbi.
                </p>
                <p>
                  Così come è normale avere paura di iniziare. Paura che possa essere l’ennesimo tentativo andato a vuoto, paura di
                  non farcela, o addirittura paura di stare peggio entrando davvero nel problema invece di evitarlo.
                </p>
                <p>
                  Qui non ti viene chiesto di fidarti ciecamente o di “crederci” senza senso. Non devi essere già pronto, forte o
                  sicuro di te. Devi semplicemente essere disposto a guardare quello che stai vivendo in modo diverso da come hai
                  fatto finora.
                </p>
                <p>
                  Il percorso è strutturato per accompagnarti passo dopo passo, anche nei momenti in cui la tua mente ti dirà di
                  mollare o di tornare indietro. <strong>Non sarai lasciato solo</strong> a gestire tutto questo — ed è proprio questa la differenza
                  che permette di arrivare a un cambiamento reale.
                </p>
              </div>
            </aside>

            <article className="homePromisePane homePromisePaneMethod" aria-labelledby="promise-method-title">
              <header className="homePromisePaneHead">
                <p className="homePromisePaneTag homePromisePaneTagMethod">Metodo (visivo)</p>
                <h3 id="promise-method-title" className="homePromisePaneTitle">
                  Il loop ansia-panico cambia solo se lavori su 3 livelli insieme
                </h3>
              </header>

              <div className="homePromisePaneBody">
                <p className="homePromiseMethodLead">
                  Se lavori su una sola parte (solo pensieri, solo corpo o solo evitamento), il meccanismo resta attivo: cambia forma,
                  ma continua a esserci.
                </p>

                <div className="homePromiseMethodDiagram" role="list" aria-label="Corpo, mente, azione">
                  <div className="homePromiseNode homePromiseNodeBody" role="listitem">
                    <div className="homePromiseNodeBadge">1</div>
                    <div className="homePromiseNodeCopy">
                      <p className="homePromiseNodeTitle">Corpo</p>
                      <p className="homePromiseNodeText">
                        Impari a leggere e regolare le reazioni fisiche. Tachicardia, respiro corto o tensione smettono di essere
                        qualcosa da combattere.
                      </p>
                    </div>
                  </div>

                  <div className="homePromiseNode homePromiseNodeMind" role="listitem">
                    <div className="homePromiseNodeBadge">2</div>
                    <div className="homePromiseNodeCopy">
                      <p className="homePromiseNodeTitle">Mente</p>
                      <p className="homePromiseNodeText">
                        Interrompi il ciclo di controllo, analisi e pensieri catastrofici. Esci dal loop “e se succede…”.
                      </p>
                    </div>
                  </div>

                  <div className="homePromiseNode homePromiseNodeAction" role="listitem">
                    <div className="homePromiseNodeBadge">3</div>
                    <div className="homePromiseNodeCopy">
                      <p className="homePromiseNodeTitle">Azione</p>
                      <p className="homePromiseNodeText">
                        Porti tutto nella vita reale: torni gradualmente nelle situazioni che oggi eviti, fino a riprenderti gli
                        spazi.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="homePromiseMethodNote">
                  La differenza è l’integrazione: insegnare al tuo sistema mente-corpo che sei al sicuro <em>mentre</em> torni a vivere
                  davvero.
                </p>
              </div>
            </article>
          </div>
        </div>

        <DualCtas />
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

                <DualCtas className="homeCompareAsideCtas" />
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

        <DualCtas />
      </section>

      <section className="section homeFaq" aria-labelledby="faq-title">
        <header className="homeFaqHead">
          <p className="homeFaqKicker">FAQ</p>
          <h2 id="faq-title" className="homeFaqTitle">
            Hai domande? Ho le risposte
          </h2>
          <p className="homeFaqLead">
            Le domande più frequenti su ansia, attacchi di panico e sul percorso.
          </p>
        </header>

        <div className="homeFaqGrid" aria-label="Domande frequenti">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className="homeFaqItem">
              <summary className="homeFaqSummary">
                <span className="homeFaqQ">{item.question}</span>
                <span className="homeFaqIcon" aria-hidden="true" />
              </summary>
              <div className="homeFaqA">
                <p className="homeFaqAText">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <DualCtas />
      </section>
    </div>
  )
}

