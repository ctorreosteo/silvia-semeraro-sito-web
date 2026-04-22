import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: 'Io però sono un caso difficile. La mia ansia non è come quella degli altri.',
    answer:
      'Lo pensano praticamente tutte le persone che vengono da me. Ed è esattamente quello che l’ansia vuole farti credere: che tu sei un’eccezione, che sei troppo rotta, che niente funzionerà mai. Ti dico la verità scomoda: in 10 anni di lavoro non ho mai incontrato un "caso impossibile". Ho incontrato persone che avevano provato gli strumenti sbagliati per troppo tempo. La Sessione Strategica serve esattamente a capire perché nel tuo caso specifico l’ansia non è passata — e da lì, finalmente, si riparte.',
  },
  {
    question: 'Ho già speso soldi in psicologi e terapie. Perché dovrei provare ancora?',
    answer:
      'Capisco perfettamente. E ti dico una cosa che gli altri non ti diranno: è giusto essere scettica. Hai imparato sulla tua pelle che non tutto funziona, e ora pretendere garanzie prima di investire è intelligenza, non diffidenza. Proprio per questo la Sessione Strategica costa 59€, non 300€: è un investimento ragionevole per capire se il mio metodo ha senso per te prima di decidere qualsiasi percorso. Alla fine della sessione, se pensi che non sia la cosa giusta per te, lo dici apertamente e ognuno va per la sua strada.',
  },
  {
    question: 'Tu non sei una psicologa. Come puoi aiutarmi se gli psicologi non ci sono riusciti?',
    answer:
      'È la domanda più onesta che mi si possa fare. Rispondo con la stessa onestà: la psicologia tradizionale lavora sui pensieri, sulla storia personale, sui traumi. È un lavoro serio e importante. Ma sull’ansia, per molte persone, non basta — perché l’ansia non è solo nei pensieri, è nel corpo, nel sistema nervoso. Io lavoro esattamente lì, con un metodo che unisce Scienze Motorie, PNL e protocolli specifici per interrompere il meccanismo di allarme. Non sono contro gli psicologi. Sono complementare, e mirata. E per molti dei miei clienti è stata la differenza tra "ci sto provando da anni" e "finalmente ne sono fuori".',
  },
  {
    question: 'E se investo in un percorso e poi non funziona neanche con te?',
    answer:
      'Questa paura blocca la maggior parte delle persone, e ha un senso profondo. Ti rispondo in modo pratico: la Sessione Strategica è pensata esattamente per evitare che tu investa al buio. In 90 minuti valutiamo insieme la tua situazione, ti mostro concretamente come funzionerebbe il percorso per te, e alla fine decidi tu con tutti gli elementi in mano. Non ti chiedo di fidarti prima di conoscermi. Ti chiedo di darti l’opportunità di capire, e poi scegliere.',
  },
  {
    question: 'Ho ansia da 10 anni. Ci vorrà un’eternità per uscirne, no?',
    answer:
      'No. Questo è uno dei miti più paralizzanti. Il tuo sistema nervoso non deve "disimparare" 10 anni di ansia: deve solo tornare a uscire dallo stato di allerta. È un processo molto più rapido di quanto pensi. Le persone con cui lavoro soffrivano in media da 5, 10, 15 anni — e iniziano a vedere cambiamenti reali nelle prime settimane. Non settimane di miracoli, settimane di lavoro strutturato. Il tempo non è tuo nemico. Il vero nemico è continuare ad aspettare pensando "ci vorrà troppo".',
  },
  {
    question: 'E se durante la sessione mi rendo conto che non fa per me?',
    answer:
      'Perfetto, anzi. La Sessione Strategica serve proprio a questo: a fare chiarezza. Alla fine dei 90 minuti può succedere una di tre cose. Uno: capisci che il mio metodo è esattamente quello che ti serve e parti col percorso. Due: capisci che ti serve altro (un altro tipo di professionista, un’altra strada) e te lo dico apertamente, indicandoti dove andare. Tre: hai bisogno di tempo per pensarci, e ti lascio pensare senza nessuna pressione. Qualunque di queste tre, esci comunque con una comprensione della tua ansia che prima non avevi. I 59€ non sono mai sprecati.',
  },
  {
    question: 'Prendo farmaci per l’ansia. Posso comunque fare la sessione?',
    answer:
      'Sì, senza problemi. Molte persone con cui lavoro assumono ansiolitici o antidepressivi prescritti dal medico, e il lavoro che facciamo insieme è complementare, non alternativo. Non sono io a decidere se e quando ridurre i farmaci: è il tuo medico. Io lavoro su ciò che i farmaci da soli non risolvono — il meccanismo profondo che mantiene attiva l’ansia. Con il tempo, molte delle persone con cui lavoro, insieme al loro medico, riescono a ridurre progressivamente la terapia farmacologica. Ma è un processo che va fatto con i tempi e la supervisione giusti.',
  },
  {
    question: 'Preferisco farla online o in presenza: cambia qualcosa? Dove ricevi?',
    answer:
      'L’efficacia è identica. La scelta dipende solo da cosa è più comodo per te. La Sessione Strategica si può fare in presenza nei miei due studi di Torino (Via Lamarmora 35 e Via Peyron 54) oppure in videochiamata, comodamente da casa tua. Molte persone scelgono il video proprio perché uno dei pain dell’ansia è dover uscire: anche questa piccola libertà fa parte del lavoro. Quando prenoti scegli tu la modalità che preferisci.',
  },
  {
    question: 'Cosa succede dopo la sessione? Mi proporrai altre cose?',
    answer:
      'Non necessariamente. La Sessione Strategica è pensata per essere completa e autoconclusiva — in 1h30 ottieni l’analisi, il piano d’azione e la chiarezza che ti servono per agire. Da lì, è la tua vita e le tue scelte. Se dopo la sessione vorrai tu stessa approfondire qualcosa con me, saprai dove trovarmi. Ma quella decisione sarà solo tua, nei tempi tuoi, senza che nessuno ti cerchi per convincerti.',
  },
  {
    question: 'Come prenoto esattamente? Cosa succede dopo che clicco sul pulsante?',
    answer:
      'Semplice. Clicchi sul pulsante qui sotto, compili un breve modulo con i tuoi dati e qualche informazione sulla tua situazione (serve a Silvia per arrivare già preparata alla sessione). Dopodiché ricevi via mail il link per pagare i 59€ e scegliere il giorno e l’orario che preferisci dal calendario di Silvia. Prima della sessione ricevi una mail di conferma con tutti i dettagli, compreso il link per la videochiamata se l’hai scelta. Il giorno prestabilito, ci vediamo. Tempo totale per prenotare: 3 minuti.',
  },
] as const

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="sessioneStrategicaSection sessioneStrategicaFaqSection" id="faq" aria-labelledby="faq-title">
      <div className="sessioneStrategicaSectionInner">
        <header className="sessioneStrategicaFaqHeader">
          <h2 id="faq-title" className="sessioneStrategicaFaqTitle">
            Sicuramente avrai delle domande
          </h2>
          <p className="sessioneStrategicaFaqSubtitle">
            Se stai leggendo fin qui, <strong>una parte di te vuole davvero fare questo passo</strong>. E un&apos;altra
            parte sta cercando <em>un motivo per rimandare ancora</em>. Queste sono le domande che{' '}
            <u>quasi tutte le persone mi fanno</u> — ti rispondo come risponderei di persona,{' '}
            <strong>senza giri di parole</strong>.
          </p>
        </header>

        <div className="sessioneStrategicaFaqList" role="list" aria-label="Domande frequenti sulla Sessione Strategica">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            const questionId = `faq-question-${index}`

            return (
              <article className={`sessioneStrategicaFaqItem ${isOpen ? 'is-open' : ''}`} role="listitem" key={item.question}>
                <button
                  type="button"
                  className="sessioneStrategicaFaqQuestion"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  id={questionId}
                >
                  <span>{item.question}</span>
                  <span className="sessioneStrategicaFaqIcon" aria-hidden="true">
                    +
                  </span>
                </button>

                <div
                  className="sessioneStrategicaFaqAnswerWrap"
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                >
                  <div className="sessioneStrategicaFaqAnswerInner">
                    <p className="sessioneStrategicaFaqAnswer">{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="sessioneStrategicaFaqClosing">
          <p>
            Se chiudi questa pagina e torni alla tua vita, tra un mese <strong>l&apos;ansia sar&agrave; ancora l&igrave;</strong>.
            Forse un po&apos; peggio. Forse uguale. <u>Di sicuro non meglio</u> — perch&eacute; le cose che fanno stare male da
            sole non si sistemano.
          </p>
          <p>
            Ti dirai che <em>non era il momento giusto</em>. Che avevi altre priorit&agrave;. Che magari pi&ugrave; avanti. E
            intanto continuerai a svegliarti alle 4 del mattino, a evitare cose che prima amavi, a sentirti sempre
            pi&ugrave; lontana dalla persona che eri.
          </p>
          <p>
            <strong>Oppure fai diversamente.</strong>
          </p>
          <p>
            Non devi decidere di guarire adesso. Non devi impegnarti in un percorso di anni. Devi solo decidere una
            cosa molto pi&ugrave; piccola: <u>darti 1h30 per capire davvero cosa ti sta succedendo</u>, con qualcuno che
            lavora su questo ogni giorno.
          </p>
          <p>
            Alla fine di quelle 1h30, <strong>saprai qualcosa di te che oggi non sai</strong>. E quello che fai con quella
            conoscenza — <em>&egrave; solo affar tuo</em>.
          </p>
          <p>
            <u>Ma almeno l&apos;avrai.</u>
          </p>
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
