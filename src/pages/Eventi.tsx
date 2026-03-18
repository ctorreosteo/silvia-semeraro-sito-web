import { DualCtas } from '../components/DualCtas'

export function Eventi() {
  return (
    <section className="section pageSection">
      <h1>Eventi</h1>
      <p className="lead">
        Questa pagina è momentaneamente in <strong>preparazione</strong>.
        <br />
        Silvia organizza <strong>workshop ed eventi dal vivo</strong> per aiutare le persone a uscire dal loop
        e a risolvere ciò che le blocca. Presto qui troverai il calendario e le descrizioni degli incontri.
      </p>

      <div className="prose">
        <blockquote aria-label="Messaggio ispirazionale">
          <p>
            Uscire dal loop non è una teoria: è un’<strong>esperienza</strong>. Per questo Silvia crea spazi
            dove le persone si incontrano, si mettono in gioco e imparano insieme. Workshop pratici, esercizi
            guidati e momenti di condivisione per fare quel passo che da soli sembra troppo grande.
          </p>
          <p>
            Una volta all’anno organizza anche un <strong>evento speciale</strong>: un weekend o una settimana
            fuori, in posti esotici e rigeneranti. Non è una vacanza qualunque: è un’esperienza meravigliosa
            dove le persone stanno insieme, si supportano a vicenda e lavorano su sé stesse in un contesto
            unico. Un momento per staccare dalla routine, riconnettersi e tornare con strumenti nuovi.
          </p>
          <p>
            Se senti che ti serve qualcosa di più del lavoro individuale — un gruppo, un’esperienza dal vivo,
            un luogo dove sentirti capita e sostenuta — qui è dove troverai le prossime date. Presto.
          </p>
        </blockquote>
      </div>
      <DualCtas />
    </section>
  )
}
