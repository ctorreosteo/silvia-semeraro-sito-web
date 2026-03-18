import { DualCtas } from '../components/DualCtas'

export function Testimonianze() {
  return (
    <section className="section pageSection">
      <h1>Testimonianze</h1>
      <p className="lead">
        Questa pagina è momentaneamente in <strong>manutenzione</strong>.
        <br />
        Sto preparando un aggiornamento importante: presto qui troverai le nuove <strong>videotestimonianze</strong> di tante persone
        che sono riuscite a <strong>uscirne</strong> e, nel loro caso, a <strong>risolvere definitivamente</strong> ciò che le stava
        bloccando.
      </p>

      <div className="prose">
        <blockquote aria-label="Messaggio ispirazionale">
          <p>
            Se in questo momento ti sembra che l’ansia o il panico abbiano ristretto il tuo mondo, voglio che tu sappia una cosa:
            <strong> non sei il tuo sintomo</strong>.
          </p>
          <p>
            Il corpo non ti sta tradendo: sta mandando segnali in una lingua che nessuno ti ha insegnato a leggere. E quando impari
            quella lingua, succede qualcosa di potente: smetti di scappare, smetti di monitorarti, e inizi a tornare <strong>presente</strong>.
          </p>
          <p>
            Le storie che caricherò qui non sono “motivazione”. Sono prove. Persone reali che hanno ricominciato a guidare, uscire,
            parlare, vivere. Non perché l’ansia non sia mai più comparsa, ma perché ha smesso di comandare.
          </p>
          <p>
            Se sei nel punto in cui pensi “non funziona niente”, sei esattamente nel punto in cui serve una cosa sola:{' '}
            <strong>un metodo</strong>, una guida e la continuità giusta. Il resto si costruisce.
          </p>
        </blockquote>
      </div>
      <DualCtas />
    </section>
  )
}

