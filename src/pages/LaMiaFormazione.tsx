import { Link } from 'react-router-dom'

type EducationBlock = {
  id: string
  index: string
  title: string
  subtitle: string
  why: string
  learned: string
  correlation: string
  techniqueTitle: string
  technique: string
}

const blocks: EducationBlock[] = [
  {
    id: 'scienze-motorie',
    index: '01',
    title: 'Laurea in Scienze Motorie e Sportive',
    subtitle: 'La biologia dell’ansia e il potere del movimento',
    why: 'Ho iniziato dal corpo perché è lì che l’ansia “accade”. Volevo capire i meccanismi biochimici e fisiologici che governano la macchina umana.',
    learned:
      'Anatomia, fisiologia e neurologia del movimento. Ho studiato come il sistema nervoso autonomo passa dallo stato di allerta (simpatico) a quello di riposo (parasimpatico).',
    correlation:
      'L’ansia è un’attivazione fisiologica eccessiva. Per questo non tratto il panico come un “capriccio della mente”, ma come una risposta del corpo che va rieducato.',
    techniqueTitle: 'Movimento consapevole e propriocezione',
    technique:
      'Insegnando a percepire la posizione del corpo nello spazio e a modulare il tono muscolare, “scarichiamo” l’eccesso di adrenalina tipico dell’attacco di panico e riportiamo il sistema nervoso in equilibrio attraverso segnali fisici di sicurezza.',
  },
  {
    id: 'management-sport',
    index: '02',
    title: 'Magistrale in Management dello Sport',
    subtitle: 'L’architettura del cambiamento',
    why: 'Sentivo il bisogno di una visione d’insieme e di una capacità organizzativa di alto livello. Gestire società e grandi eventi richiede mente analitica e leadership solida sotto pressione.',
    learned:
      'Economia, marketing, gestione delle risorse umane e diritto. Ho imparato a pianificare, gestire crisi complesse e ottimizzare i processi per raggiungere obiettivi ambiziosi.',
    correlation:
      'Spesso l’ansia prospera nel caos. Uso queste competenze per aiutarti a mappare la situazione e costruire un piano d’azione strutturato.',
    techniqueTitle: 'Problem Solving Strategico e Time Management emotivo',
    technique:
      'Trasformiamo la sensazione di “essere sopraffatti” in una serie di micro-obiettivi chiari e gestibili, portando ordine dove prima c’era solo confusione mentale.',
  },
  {
    id: 'coaching-pnl',
    index: '03',
    title: 'Master in Coaching Umanistico e PNL',
    subtitle: 'La riprogrammazione del pensiero',
    why: 'Dopo aver compreso il corpo e la struttura, volevo entrare nel linguaggio della mente. La Programmazione Neuro‑Linguistica e il Coaching Umanistico sono chiavi per accedere al potenziale inespresso.',
    learned:
      'Modelli di comunicazione interna, credenze limitanti e tecniche per cambiare la percezione degli eventi.',
    correlation:
      'L’ansia si nutre di immagini catastrofiche e dialoghi interni negativi. Qui impariamo a cambiare il “software” che genera il panico.',
    techniqueTitle: 'Ristrutturazione cognitiva e sottomodalità',
    technique:
      'Se la mente visualizza l’ansia come un muro insormontabile, lavoriamo per cambiare forma, colore e distanza di quell’immagine mentale, togliendole potere e restituendoti la capacità di agire.',
  },
  {
    id: 'tecniche-coaching',
    index: '04',
    title: 'Specializzazione in Tecniche di Coaching',
    subtitle: 'L’efficacia dell’intervento',
    why: 'Ho scelto di migliorarmi ulteriormente per garantire un arsenale di strumenti pratici, eliminando il superfluo e focalizzandomi su ciò che funziona davvero.',
    learned:
      'Protocolli avanzati di intervento rapido e tecniche di potenziamento della performance.',
    correlation:
      'In sessione non ci limitiamo a capire “perché” stai male: ci alleniamo sul “come” stare meglio da subito.',
    techniqueTitle: 'Ancoraggi di risorsa',
    technique:
      'Costruiamo “punti di attivazione” (fisici o mentali) richiamabili durante lo stress per accedere a uno stato di calma, sicurezza e presenza.',
  },
]

export function LaMiaFormazione() {
  return (
    <article className="section pageSection eduPage">
      <header className="pageHeader eduHeader">
        <p className="eyebrow">Studi e metodo</p>
        <h1>La mia formazione</h1>
        <div className="storyMeta" aria-label="Dettagli pagina">
          <span className="storyMetaItem">Approccio integrato</span>
          <span className="storyMetaDot" aria-hidden="true">
            •
          </span>
          <span className="storyMetaItem">Corpo • Mente • Strategia</span>
        </div>
        <p className="lead">
          Per accompagnare qualcuno fuori dal labirinto dell’ansia e del panico, non basta “parlare”.
          Serve una comprensione profonda di come il corpo reagisce allo stress e di come la mente può
          riorganizzarsi per riprendere il controllo. Il mio percorso di studi è stato costruito per
          offrirti un metodo scientifico, strutturato ed efficace.
        </p>

        <nav className="storyNav eduNav" aria-label="Indice formazione">
          {blocks.map((b) => (
            <a key={b.id} className="storyNavLink" href={`#${b.id}`}>
              {b.index}. {b.title}
            </a>
          ))}
        </nav>

        <figure className="storyHero eduHeroImg">
          <img
            className="storyHeroImg"
            src="/Immagini/foto7.png"
            alt="Formazione e metodo: corpo, mente e strategia"
            loading="eager"
            decoding="async"
          />
        </figure>
      </header>

      <div className="eduLayout">
        <aside className="eduAside" aria-label="Sintesi metodo">
          <div className="eduAsideCard">
            <h2 className="eduAsideTitle">Una visione d’insieme per la tua libertà</h2>
            <p className="eduAsideText">
              La mia forza come Mental Coach è una triade concreta: so come risponde il corpo, so come
              organizzare il percorso di uscita e so come riprogrammare i pensieri.
            </p>
            <ul className="eduPills" aria-label="Triade competenze">
              <li className="eduPill">
                <span className="eduPillK">Corpo</span>
                <span className="eduPillV">Scienze Motorie</span>
              </li>
              <li className="eduPill">
                <span className="eduPillK">Strategia</span>
                <span className="eduPillV">Management</span>
              </li>
              <li className="eduPill">
                <span className="eduPillK">Mente</span>
                <span className="eduPillV">Coaching &amp; PNL</span>
              </li>
            </ul>
            <div className="eduAsideDivider" role="presentation" />
            <p className="eduAsideText">
              È un percorso di pulizia ed efficacia: smettiamo di lottare contro i sintomi e iniziamo a
              costruire una versione di te più consapevole, più forte e finalmente libera di muoversi nel
              mondo.
            </p>
          </div>
        </aside>

        <div className="prose eduProse">
          {blocks.map((b) => (
            <section key={b.id} className="eduBlock" id={b.id} aria-label={b.title}>
              <header className="eduBlockHead">
                <div className="eduIndex" aria-hidden="true">
                  {b.index}
                </div>
                <div className="eduBlockTitles">
                  <h2 className="proseHead eduH2">{b.title}</h2>
                  <p className="eduSubtitle">{b.subtitle}</p>
                </div>
              </header>

              <div className="eduCard">
                <div className="eduCardGrid">
                  <div className="eduCardCol">
                    <h3 className="eduH3">Il perché della scelta</h3>
                    <p>{b.why}</p>
                  </div>
                  <div className="eduCardCol">
                    <h3 className="eduH3">Cosa ho appreso</h3>
                    <p>{b.learned}</p>
                  </div>
                  <div className="eduCardCol eduCardColWide">
                    <h3 className="eduH3">Correlazione con l’ansia</h3>
                    <p>{b.correlation}</p>
                  </div>
                </div>

                <div className="eduTechnique" aria-label={`Esempio di tecnica: ${b.techniqueTitle}`}>
                  <div className="eduTechniqueBadge">Tecnica</div>
                  <div className="eduTechniqueBody">
                    <div className="eduTechniqueTitle">{b.techniqueTitle}</div>
                    <p className="eduTechniqueText">{b.technique}</p>
                  </div>
                </div>
              </div>
            </section>
          ))}

          <section className="eduClosing" aria-label="Chiusura">
            <div className="eduClosingCard">
              <h2 className="proseHead">Una triade, un metodo</h2>
              <p>
                So come risponde il tuo corpo (Scienze Motorie), so come organizzare il tuo percorso di
                uscita (Management) e so come riprogrammare i tuoi pensieri (Coaching e PNL).
              </p>
              <p>
                L’obiettivo non è “resistere” ai sintomi: è tornare a muoverti nel mondo con sicurezza,
                presenza e libertà.
              </p>
              <div className="ctaRow">
                <Link className="button primary" to="/contatti-e-dove-lavoro">
                  Contattami
                </Link>
                <Link className="button ghost" to="/percorsi">
                  Vedi i percorsi
                </Link>
                <Link className="button ghost" to="/risorse-gratuite">
                  Risorse gratuite
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  )
}

