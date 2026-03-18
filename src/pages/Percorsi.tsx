import { DualCtas } from '../components/DualCtas'

export function Percorsi() {
  return (
    <article className="section pageSection percorsoPage">
      <header className="pageHeader percorsoHeader">
        <h1>Il Percorso</h1>
        <div className="storyMeta" aria-label="Dettagli percorso">
          <span className="storyMetaItem">90 giorni</span>
          <span className="storyMetaDot" aria-hidden="true">
            •
          </span>
          <span className="storyMetaItem">9 sedute 1:1</span>
        </div>

        <p className="lead">
          Un percorso di <strong>90 giorni</strong> per uscire dal loop ansia–panico con un lavoro
          <strong> pratico</strong>, guidato e progressivo.
          <br />
          L’obiettivo non è “sentirti meglio per un po’”: è diventare <strong>autonomo</strong>, con strumenti
          che sai usare nella vita vera.
        </p>

        <figure className="storyHero" aria-label="Foto di Silvia">
          <img
            className="storyHeroImg"
            src="/Immagini/foto11.png"
            alt="Silvia Semeraro"
            loading="eager"
            decoding="async"
          />
        </figure>

        <nav className="storyNav" aria-label="Indice contenuti">
          <a className="storyNavLink" href="#come-funziona">
            Come funziona
          </a>
          <a className="storyNavLink" href="#cosa-include">
            Cosa include
          </a>
          <a className="storyNavLink" href="#le-3-fasi">
            Le 3 fasi
          </a>
          <a className="storyNavLink" href="#le-9-sedute">
            Le 9 sedute
          </a>
          <a className="storyNavLink" href="#faq-percorso">
            FAQ
          </a>
        </nav>
      </header>

      <div className="prose percorsoProse">
        <section className="storyChapter storyChapterNoMedia" id="come-funziona" aria-label="Come funziona">
          <div className="storyChapterContent">
            <h2 className="proseHead">In parole semplici</h2>
            <p>
              Questo percorso unisce <strong>incontri 1:1</strong> (online o in presenza), esercizi da fare a casa
              per <strong>postura</strong> e <strong>respirazione</strong>, educazione sulle dinamiche ansia/panico e
              protocolli concreti per gestire i sintomi quando si presentano.
            </p>
            <p>
              Non “parliamo dell’ansia”: impari a <strong>decodificarla</strong>, a regolare il corpo quando si accende
              l’allarme e a tornare a fare, passo dopo passo, ciò che oggi eviti.
            </p>

            <div className="percorsoHighlights" aria-label="Punti chiave">
              <div className="homeCompareRow homeCompareRowShift" aria-label="Struttura">
                <p className="homeCompareRowK">Struttura</p>
                <p className="homeCompareRowV">9 sedute 1:1 in 90 giorni (progressive, con compiti mirati)</p>
              </div>
              <div className="homeCompareRow homeCompareRowShift" aria-label="Supporto quotidiano">
                <p className="homeCompareRowK">Supporto</p>
                <p className="homeCompareRowV">
                  Supporto <strong>ogni giorno</strong>, 1:1, direttamente con me per qualsiasi esigenza e necessità
                </p>
              </div>
              <div className="homeCompareRow" aria-label="Modalità">
                <p className="homeCompareRowK">Modalità</p>
                <p className="homeCompareRowV">Online oppure in presenza (Torino)</p>
              </div>
              <div className="homeCompareRow" aria-label="Focus">
                <p className="homeCompareRowK">Focus</p>
                <p className="homeCompareRowV">Corpo + mente + azione (niente pezzi mancanti)</p>
              </div>
            </div>

            <DualCtas />
          </div>
        </section>

        <section className="storyBand" id="cosa-include" aria-label="Cosa include">
          <div className="storyBandInner">
            <div className="storyBandHead">
              <h2 className="proseHead">Cosa include (davvero)</h2>
            </div>

            <div className="percorsoIncludeGrid" role="list" aria-label="Elementi inclusi">
              <article className="percorsoIncludeCard" role="listitem" aria-label="Sessioni 1:1 e piano">
                <h3 className="percorsoIncludeTitle">Sessioni 1:1 + piano</h3>
                <ul className="percorsoIncludeList">
                  <li>9 sedute individuali in 90 giorni</li>
                  <li>Obiettivo chiaro: cosa fai tra 90 giorni che oggi non riesci a fare</li>
                  <li>Piano di azione progressivo (non motivazionale)</li>
                </ul>
              </article>

              <article className="percorsoIncludeCard" role="listitem" aria-label="Diario terapeutico e supporto">
                <h3 className="percorsoIncludeTitle">Diario terapeutico + supporto</h3>
                <ul className="percorsoIncludeList">
                  <li>Diario guidato (check-in + riflessione)</li>
                  <li>Tracciamento dei sintomi senza giudizio</li>
                  <li>
                    Supporto <strong>ogni giorno</strong>, 1:1, direttamente con me per qualsiasi esigenza e necessità
                  </li>
                </ul>
              </article>

              <article className="percorsoIncludeCard" role="listitem" aria-label="Esercizi e protocolli">
                <h3 className="percorsoIncludeTitle">Esercizi e protocolli</h3>
                <ul className="percorsoIncludeList">
                  <li>Respirazione diaframmatica e sblocco del “freno a mano”</li>
                  <li>Postura e regolazione del sistema nervoso</li>
                  <li>Protocollo SOS per acuto (panico / ansia da prestazione)</li>
                </ul>
              </article>

              <article className="percorsoIncludeCard" role="listitem" aria-label="Esposizione progressiva">
                <h3 className="percorsoIncludeTitle">Esposizione progressiva</h3>
                <ul className="percorsoIncludeList">
                  <li>Scala delle sfide “su misura”</li>
                  <li>Rientro graduale in luoghi e situazioni che oggi eviti</li>
                  <li>Public speaking e paura del giudizio (se è un tuo tema)</li>
                </ul>
              </article>

              <article className="percorsoIncludeCard" role="listitem" aria-label="Academy e workshop">
                <h3 className="percorsoIncludeTitle">Academy + workshop</h3>
                <ul className="percorsoIncludeList">
                  <li>Pillole base: “Cos’è l’ansia?”, “Respiro 101”</li>
                  <li>Metodo avanzato: protocolli, casi studio, mindset</li>
                  <li>Workshop / webinar (live o replay, quando disponibili)</li>
                </ul>
              </article>

              <article className="percorsoIncludeCard" role="listitem" aria-label="Audio guida e meditazione">
                <h3 className="percorsoIncludeTitle">Audio guida</h3>
                <ul className="percorsoIncludeList">
                  <li>Rilassamento rapido</li>
                  <li>Gestione crisi e performance ad alta intensità</li>
                  <li>Meditazioni brevi per accettazione attiva</li>
                </ul>
              </article>
            </div>

            <div className="percorsoPrice" aria-label="Investimento">
              <div className="homeCompareRow homeCompareRowShift">
                <p className="homeCompareRowK">Investimento</p>
                <p className="homeCompareRowV">Dettagli e modalità di accesso vengono condivisi durante l’incontro conoscitivo.</p>
              </div>
              <p className="percorsoPriceNote">
                Il vero valore non è “fare esercizi”. È arrivare a un punto in cui sai cosa fare quando il corpo si attiva, senza
                tornare a scappare.
              </p>
            </div>

            <DualCtas />
          </div>
        </section>

        <section className="storyChapter storyChapterNoMedia" id="le-3-fasi" aria-label="Le 3 fasi">
          <div className="storyChapterContent">
            <h2 className="proseHead">Le 3 fasi del percorso</h2>
            <p>
              Lavoriamo in tre passaggi. Ogni fase ha un compito preciso: prima spegnere l’allarme rosso, poi riprogrammare la
              risposta e infine consolidare l’autonomia.
            </p>

            <div className="percorsoPhases" role="list" aria-label="Fasi">
              <article className="percorsoPhase" role="listitem" aria-label="Decodifica">
                <header className="percorsoPhaseHead">
                  <p className="percorsoPhaseTag">Mese 1</p>
                  <h3 className="percorsoPhaseTitle">Decodifica</h3>
                </header>
                <p className="percorsoPhaseText">
                  Capisci come “parla” l’ansia nel tuo corpo e togliamo l’allarme rosso: sintomi, trigger, respiro, resistenza.
                </p>
              </article>

              <article className="percorsoPhase" role="listitem" aria-label="Riprogrammazione">
                <header className="percorsoPhaseHead">
                  <p className="percorsoPhaseTag">Mese 2</p>
                  <h3 className="percorsoPhaseTitle">Riprogrammazione</h3>
                </header>
                <p className="percorsoPhaseText">
                  Passi dalla reazione subita all’azione: postura, protocolli SOS, esposizione progressiva “su misura”.
                </p>
              </article>

              <article className="percorsoPhase" role="listitem" aria-label="Consolidamento">
                <header className="percorsoPhaseHead">
                  <p className="percorsoPhaseTag">Mese 3</p>
                  <h3 className="percorsoPhaseTitle">Consolidamento e libertà</h3>
                </header>
                <p className="percorsoPhaseText">
                  Sganci valore e sicurezza dal giudizio, allinei scelte e valori, costruisci il tuo “manuale d’uso” personale per
                  prevenire ricadute.
                </p>
              </article>
            </div>

            <blockquote className="storyPullQuote" aria-label="Promessa del percorso">
              <p>
                Il punto è arrivare a un nuovo standard: non “una persona ansiosa che si gestisce”, ma una persona che sa leggere i
                segnali e usare strumenti concreti.
              </p>
            </blockquote>
          </div>
        </section>

        <section className="storyChapter storyChapterNoMedia" id="le-9-sedute" aria-label="Le 9 sedute">
          <div className="storyChapterContent">
            <h2 className="proseHead">Le 9 sedute (step by step)</h2>
            <p>
              Qui sotto vedi la struttura completa. Ogni seduta chiude con un’azione concreta: non lasciamo “tutto in testa”.
            </p>

            <div className="percorsoSessions" aria-label="Sedute">
              <details className="homeFaqItem" open>
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 1 — Il Messaggero e la Mappa</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Identifichiamo come si manifesta l’ansia (corpo, pensieri, blocchi) e spostiamo il focus da “perché sto male” a
                    “cosa mi sta comunicando il corpo”. Impostiamo il diario per tracciare i sintomi senza giudizio.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 2 — Sbloccare il “Freno a Mano” (Diaframma)</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    L’ansia blocca il respiro: impari respirazione diaframmatica e una routine breve (“5 minuti di calma”) per
                    inviare segnali reali di sicurezza al sistema nervoso.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 3 — La fine della Resistenza</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Più combatti il sintomo, più lo alimenti. Lavoriamo su accettazione attiva, togliamo benzina al fuoco e
                    iniziamo a ridurre una “stampella” (evitamento/controllo) alla volta.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 4 — Alchimia corporea (Postura e chimica)</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    La mente segue il corpo. Analizziamo postura e tensioni, introduciamo esercizi di apertura e un check rapido
                    quotidiano (mascella/spalle) per togliere carico al sistema.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 5 — Gestione dell’acuto (Protocollo SOS)</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Creiamo il tuo protocollo personale: grounding 5-4-3-2-1, respirazione avanzata e una frase guida per restare
                    efficace. L’obiettivo: non scappare, gestire.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 6 — Il confine della Zona di Comfort</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Definiamo la scala delle sfide e iniziamo l’esposizione progressiva: obiettivo non è “senza ansia”, ma “con
                    l’ansia, usando strumenti”.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 7 — Comunicazione e giudizio</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Lavoriamo su assertività e paura del giudizio. Usiamo trasparenza e micro-azioni “imperfette” in pubblico per
                    sganciare valore personale dal parere altrui.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 8 — Valori, presenza, public speaking</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Ripuliamo priorità e allineamento: cosa stai facendo per compiacere e cosa per te. Se serve, lavoriamo su voce,
                    postura e presenza per parlare davanti agli altri in modo stabile.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Sessione 9 — Il tuo nuovo standard</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Revisione dei 90 giorni, piano d’emergenza per il futuro e manifesto personale. Chiudiamo il percorso con un
                    manuale d’uso che ti rende davvero autonomo.
                  </p>
                </div>
              </details>
            </div>

            <div className="percorsoClosingCtas" aria-label="Call to action finale sedute">
              <DualCtas />
            </div>
          </div>
        </section>

        <section className="storyEndCard" id="faq-percorso" aria-label="FAQ percorso">
          <div className="storyEndCardInner">
            <h2 className="proseHead">FAQ</h2>
            <div className="homeFaqGrid percorsoFaqGrid" aria-label="Domande frequenti sul percorso">
              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">È online o in presenza?</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Puoi farlo <strong>online</strong> da remoto oppure <strong>in presenza</strong> a Torino. Scegliamo ciò che ti permette più
                    continuità (quella che fa la differenza).
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">E se durante il percorso mi torna il panico?</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Non è un fallimento: è materiale di lavoro. Il percorso serve proprio a trasformare quei momenti in pratica
                    guidata, così smetti di temerli e ti alleni a gestirli.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Devo essere “pronto” per iniziare?</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    No. Serve solo una cosa: la disponibilità a fare un percorso pratico, anche quando la mente vorrebbe tornare a
                    evitare. La struttura è fatta per sostenerti.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Quanto tempo devo dedicare agli esercizi?</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Poco ma spesso. Costruiamo routine brevi (anche 5–10 minuti) e micro-azioni nella vita quotidiana: è questo che
                    crea cambiamento stabile.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">È adatto anche se ho ansia da prestazione / public speaking?</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Sì. Lavoriamo su esposizione progressiva, presenza corporea e gestione dell’acuto. L’obiettivo è portarti a
                    restare “centrato” anche sotto intensità.
                  </p>
                </div>
              </details>

              <details className="homeFaqItem">
                <summary className="homeFaqSummary">
                  <span className="homeFaqQ">Come capiamo se fa per me?</span>
                  <span className="homeFaqIcon" aria-hidden="true" />
                </summary>
                <div className="homeFaqA">
                  <p className="homeFaqAText">
                    Prenota un incontro conoscitivo gratuito: facciamo ordine sul tuo punto di partenza e capiamo se ha senso
                    iniziare ora, con questo formato.
                  </p>
                </div>
              </details>
            </div>

            <DualCtas />
          </div>
        </section>
      </div>
    </article>
  )
}

