import { DualCtas } from '../components/DualCtas'

export function LaMiaStoria() {
  return (
    <article className="section pageSection">
      <header className="pageHeader">
        <h1>La mia storia</h1>
        <div className="storyMeta" aria-label="Dettagli pagina">
          <span className="storyMetaItem">Aggiornato di recente</span>
          <span className="storyMetaDot" aria-hidden="true">
            •
          </span>
          <span className="storyMetaItem">Lettura ~3 min</span>
        </div>
        <p className="lead">
          Se ti senti “difettosa”, “fragile” o semplicemente <strong>rotta</strong>… resta qui.
          Questa non è la solita lezione clinica. Questa è la mia storia. 👋🏼 Io sono Silvia!
        </p>
        <figure className="storyHero">
          <img
            className="storyHeroImg"
            src="/Immagini/foto1.png"
            alt="Silvia Semeraro"
            loading="eager"
            decoding="async"
          />
        </figure>
        <p className="lead">
          E in quell’<u>inferno</u>{' '}
          ci ho vissuto, ci ho dormito e ci ho urlato contro per anni. Ti racconto
          come sono passata dal non riuscire a camminare per il dolore, chiusa in
          casa con le coperte di pile a settembre, alla creazione di un’<strong>Accademia</strong>{' '}
          per insegnare alle persone a essere <em>efficaci, reali e finalmente libere</em> ✨.
        </p>

        <nav className="storyNav" aria-label="Indice capitoli">
          <a className="storyNavLink" href="#ansia-e-panico">
            Ansia e panico
          </a>
          <a className="storyNavLink" href="#quando-il-mondo-si-restringe">
            Quando il mondo si restringe
          </a>
          <a className="storyNavLink" href="#la-radice">
            La radice
          </a>
          <a className="storyNavLink" href="#pandemia-e-collasso">
            Pandemia e collasso
          </a>
          <a className="storyNavLink" href="#la-svolta">
            La svolta
          </a>
          <a className="storyNavLink" href="#oggi">
            Oggi
          </a>
        </nav>
      </header>

      <div className="prose storyProse">
        <section
          className="storyChapter storyChapterNoMedia"
          id="ansia-e-panico"
          aria-label="Ansia e panico"
        >
          <div className="storyChapterContent">
            <h2 className="proseHead">Ansia e panico non sono la stessa cosa</h2>
            <p>
              C’è una differenza atroce tra come l’ansia ti logora e come il panico ti schianta.
            </p>
            <p>
              L’ansia è quella <em>coinquilina molesta</em> che non se ne va mai: la tensione
              alla nuca che ti fa sentire la testa pesante, come un casco d’acciaio.
              Il <u>nodo allo stomaco</u> che ti toglie il gusto del cibo. Svegliarsi alle 3 o
              alle 4 con il cuore che batte un ritmo irregolare e la mente che costruisce{' '}
              <em>scenari catastrofici</em>. “E se perdessi il lavoro? E se succedesse qualcosa
              ai miei figli?”. È il sentirsi <u>sulle spine</u>, costantemente in attesa di una
              brutta notizia che non arriva, ma che sei certa sia dietro l’angolo 😮‍💨.
            </p>
            <figure className="storyInline">
              <img
                className="storyInlineImg"
                src="/Immagini/foto13.png"
                alt="Silvia Semeraro"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p>E poi c’è il panico.</p>
            <p>
              Il panico è un <strong>tradimento fisico</strong>: il tuo corpo che improvvisamente
              decide di dichiararti guerra. In un istante la realtà si deforma. I suoni
              diventano lontani, ovattati, come sott’acqua. Una <u>vampata di calore</u> che
              ti brucia il viso, seguita da un gelo che ti fa tremare le ginocchia. Il
              cuore non batte più: colpisce contro lo sterno come se volesse sfondarlo.
              Cerchi di fare un respiro profondo ma i polmoni sembrano <em>sigillati</em>. Più
              cerchi aria, più senti che l’ossigeno è finito 💥.
            </p>
            <p>
              In quel momento la voce nella tua testa non parla: <strong>urla</strong>. Ti dice che
              stai per morire, che stai per svenire davanti a tutti, che stai per{' '}
              <u>perdere il controllo</u>. Se hai provato questo, sai di cosa parlo.
            </p>
          </div>
        </section>

        <blockquote className="storyPullQuote" aria-label="Citazione">
          <p>
            Il vero problema non è il panico. Il problema è la <strong>paura della paura</strong>.
            È quel <em>monitoraggio ossessivo</em> che fai su te stessa ogni secondo: ti svegli
            e la prima cosa che fai, prima ancora di aprire gli occhi, è “sentire” come
            stai. “Il cuore batte bene? Ho la gola chiusa? Come sento le gambe?”. E se
            senti anche solo un piccolo sussulto, un <u>battito fuori tempo</u>, la tua
            giornata è finita. La tua mente ha già deciso: oggi si soffre 🧠.
          </p>
        </blockquote>

        <section
          className="storyChapter storyChapterAlt"
          id="quando-il-mondo-si-restringe"
          aria-label="Quando il mondo si restringe"
        >
          <div className="storyChapterContent">
            <h2 className="proseHead">Quando il mondo si restringe</h2>
            <figure className="storyInline">
              <img
                className="storyInlineImg"
                src="/Immagini/foto3.png"
                alt="Silvia Semeraro"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p>
              L’ansia e il panico <u>rimpiccioliscono il tuo mondo</u>. Prima era una prateria
              di possibilità; ora è diventato un corridoio stretto fatto solo di{' '}
              <em>“posti sicuri”</em> e <em>“persone sicure”</em>. Hai smesso di viaggiare, di
              frequentare certi locali, forse di guidare o di stare da sola a casa perché
              temi che nessuno possa soccorrerti 🧷.
            </p>
            <p>
              E ti dicono: <strong>“Devi solo rilassarti”</strong>. Una frase che è come benzina sul
              fuoco 🔥. Come se fosse colpa tua. Come se potessi spegnere un incendio boschivo
              con un bicchiere d’acqua.
            </p>
            <p>
              Per anni mi hanno detto che avrei dovuto convivere con le gocce, che la mia
              mente era <em>“fragile”</em>, un <u>difetto di fabbrica</u>. E io ci ho creduto.
              {' '}💔
            </p>
            <p>
              Il problema non sei tu che li prendi. Il problema è un sistema che troppo
              spesso ti dà una pastiglia e ti manda a casa senza spiegarti niente, senza
              dirti cosa sta succedendo dentro di te. Ti <strong>anestetizzano il sintomo</strong> ma
              non ti insegnano a <em>leggere il segnale</em>. Il tuo sistema nervoso non è
              “impazzito”: sta cercando di proteggerti, ma urla in una lingua che non
              conosci. E invece di insegnarti quella lingua, ti hanno detto di mettere i
              tappi alle orecchie.
            </p>
            <p>La via d’uscita non è la lotta. È l’<strong>efficacia della comprensione</strong>.</p>
          </div>
        </section>

        <section className="storyChapter" id="la-radice" aria-label="La radice">
          <div className="storyChapterContent">
            <h2 className="proseHead">
              La radice: la <strong>paura dell’imprevedibile</strong>
            </h2>
            <figure className="storyInline">
              <img
                className="storyInlineImg"
                src="/Immagini/foto4.png"
                alt="Silvia Semeraro"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p>
              Avevo solo 13 anni. Una sera qualunque: torniamo a casa e troviamo mia nonna
              colpita da un malore violento. Vedere la <em>fragilità della vita</em> manifestarsi
              così, senza preavviso, mi ha spaventata a morte 🕯️.
            </p>
            <p>
              In quel secondo il mio cervello di adolescente ha registrato un pensiero
              terribile: “E se fossimo tornati dieci minuti più tardi? Sarebbe ancora viva?”.
              In quel secondo è nata la paura dell’imprevedibile. Il terrore che la catastrofe
              sia sempre lì, pronta a colpirti appena abbassi la guardia. 😰
            </p>
            <p>
              Ho sepolto quel trauma sotto una vita frenetica. Ero una <u>ginnasta agonista</u>:
              l’ansia la chiamavo adrenalina, la usavo per portare a casa i risultati.
            </p>
            <p>
              Ma la corda era troppo tesa. A 18 anni il ritmo è diventato insostenibile—scuola,
              palestra fino alle 20, studio fino a notte fonda. Volevo dimostrare di essere
              una supereroina. Ma <em>il corpo ha le sue leggi</em>. Gli <strong>attacchi di panico</strong> hanno
              iniziato a colpirmi ovunque: al cinema nell’oscurità soffocante, tra gli amici
              mentre fingevo un sorriso, in macchina. 🫀
            </p>
            <p>
              Ricordo le volte in cui dovevo accostare d’urgenza perché sentivo il cuore
              esplodere. Andai dallo psicologo cercando risposte, ma ricevetti un’etichetta:{' '}
              <strong>Ipocondria</strong>.
            </p>
            <p>
              Mi prescrissero il <u>Lexotan</u>. In breve tempo ne sono diventata dipendente. Era
              la mia <em>coperta di Linus</em>. Non uscivo di casa se non lo avevo con me.
            </p>
          </div>
        </section>

        <section
          className="storyBand"
          id="pandemia-e-collasso"
          aria-label="La pandemia e il collasso"
        >
          <div className="storyBandInner">
            <div className="storyBandHead">
              <h2 className="proseHead">La pandemia e il collasso</h2>
            </div>
            <div className="storyBandGrid">
              <div className="storyBandContent">
                <p>
                  Poi è arrivata la pandemia. Mio papà in ospedale, 30 giorni tra la vita e la morte.
                </p>
                <p>
                  Lo stress è stato devastante. Sono tornata a vivere nel letto, <strong>paralizzata</strong>.
              Igienizzavo tutto, <em>terrorizzata di fare la sua fine</em> 🫧.
                </p>
                <p>
                  Quella chiamata dei medici alle 11:30 di sera, in cui dicevano che non sapevano
              se ce l’avrebbe fatta, mi è rimasta dentro come un senso di <u>angoscia perenne</u> 🫁.
                </p>
                <p>
                  Quando le cose sembravano tornare alla normalità ho sepolto tutto di nuovo
                  lavorando in una palestra. Due anni meravigliosi, una squadra fortissima.
                </p>
                <p>
                  Ma poi ha iniziato a rompersi qualcosa: ogni volta che entravo in quel posto mi
                  sembrava di essere in una <em>gabbia</em>. L’ansia ha preso una forma diversa. Si è
                  trasformata in <strong>dermatite</strong>.
                </p>
              </div>
              <figure className="storyBandMedia">
                <img
                  src="/Immagini/foto12.png"
                  alt="Silvia Semeraro"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </section>

        <section className="storyChapter storyChapterNoMedia" id="la-svolta" aria-label="La svolta">
          <div className="storyChapterContent">
            <h2 className="proseHead">La svolta: comprendere invece di combattere</h2>
            <p>
              Mi sono licenziata. Quel passo verso l’ignoto mi ha fatta sentire <u>nuda</u>,
              terribilmente sola. Mi ero tolta l’armatura del “fare” e non sapevo più chi
              fossi senza i miei mille impegni. 🕳️
            </p>
            <p>
              In quella solitudine il mio corpo ha reagito spurgando anni di <em>tossine mentali</em>.
              Una mattina mi sveglio piena di puntini e con un prurito indescrivibile; faccio
              una doccia e la pelle inizia a spaccarsi completamente.
            </p>
            <p>
              In ospedale mi dicono che sono infetta. Mi propongono una <strong>cura biologica a vita</strong>.
            </p>
            <p>
              Mi sentivo una fallita, una malata cronica, un’<em>ameba</em> destinata a trascinarsi
              per sempre.
            </p>
            <p>
              Ma è qui che il viaggio cambia. Il mio compagno non mi ha lasciata sola. Mi ha
              portato un libro.
            </p>
            <p>
              La nostra casa è diventata un <u>laboratorio di ricerca</u> sull’essere umano. Lui è
              stato il mio pilastro, il mio mentore. 🔬
            </p>
            <p>
              Ho iniziato a testare l’<strong>efficacia</strong> di ciò che imparavo: quando sentivo il
              panico salire, invece di scappare, mi fermavo.
            </p>
            <figure className="storyInline">
              <img
                className="storyInlineImg"
                src="/Immagini/foto6.png"
                alt="Silvia Semeraro"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <p>
              Lavoravo sul <em>respiro diaframmatico</em>, forzando quella “gabbia” nel petto. Usavo
              piccoli sblocchi fisici per scaricare l’elettricità dell’ansia. Ricordo pomeriggi in
              cui, mentre leggevo come calmare il sistema nervoso, venivo travolta da un attacco
              improvviso.
            </p>
            <p>Sudavo freddo sulle pagine, le mani tremavano.</p>
            <p>
              Ma è stato proprio lì, dicendo a quel tremore “Ti vedo, so che sei un segnale”, che
              ho capito la differenza tra <strong>lottare e comprendere</strong>.
            </p>
            <p>
              Due giorni prima di iniziare quella cura “a vita”, abbiamo analizzato gli effetti
              dei farmaci. Uno era un chemioterapico che avrebbe ucciso le mie difese.
            </p>
            <p>
              La mia ansia è tornata a bussare ferocemente. Ma mi sono fatta una domanda che mi ha
              salvata: “Saresti disposta a diventare un’<em>ameba</em> e non realizzare quello che vuoi
              costruire?”. 🚪
            </p>
            <p>
              Ho scelto di dire no. Ho scelto di non essere un’<em>ameba</em>. Ho scelto di essere{' '}
              <strong>reale</strong> 🧩.
            </p>
            <p>
              Ho capito che dovevo smettere di “curare” la malattia e iniziare a{' '}
              <strong>rieducare il mio sistema nervoso</strong>.
            </p>
            <p>
              Dopo mesi, senza farmaci a vita, la mia pelle era guarita. Non era magia: era{' '}
              <em>studio, consapevolezza e amore</em> 🌿.
            </p>
            <p>
              La magia è avvenuta quando ho smesso di vedere il mio corpo come un traditore e ho
              iniziato a trattarlo come un <u>bambino spaventato</u>.
            </p>
          </div>
        </section>

        <section className="storyEndCard" id="oggi" aria-label="Oggi">
          <div className="storyEndCardInner">
            <h2 className="proseHead">Oggi</h2>
            <p>È per questo che esiste questo canale, la mia Accademia e i percorsi che ho creato.</p>
            <p>
              Non per raccontarti la mia storia e basta, ma perché quello che ho imparato in quegli anni
              di studio, di test su me stessa, di notti passate a <em>tremare sulle pagine dei libri</em>,
              oggi può diventare il tuo <u>punto di partenza</u>.
            </p>
            <p>
              Tutto quello che ho attraversato l’ho trasformato in un metodo che ti insegna l’<strong>efficacia</strong>:
              come sbloccare il diaframma quando senti quella gabbia nel petto, come trasformare un attacco
              di panico in un <em>momento di ascolto</em> invece che di fuga, come tornare a muovere il tuo corpo
              senza la paura che ogni sensazione sia l’inizio di una catastrofe.
            </p>
            <p>
              Qui non sei un paziente con un’etichetta addosso. Sei una persona che sta per{' '}
              <strong>riprendere in mano il proprio corpo e la propria vita</strong>. ✊
            </p>
            <p>
              E non devi farlo da sola: chi ti accompagna in questo percorso sa esattamente che sapore ha
              quella paura, sa cosa vuol dire <em>sentirsi rotta</em>, e sa che quella sensibilità che oggi ti
              sembra una condanna può diventare la tua <u>forza più grande</u>.
            </p>
            <p>La cosa che meriti di più in questo momento è tornare a respirare a pieni polmoni. 🌬️</p>
            <p>
              Non diventare una supereroina: essere un essere umano <strong>reale, libero e finalmente efficace</strong>.
            </p>
          </div>
        </section>

        <blockquote className="storyPullQuote" aria-label="Citazione finale">
          <p>
            Che tu ci creda o no in questo momento, <strong>si può tornare a vivere</strong>. Le cicatrici non sono
            la prova che sei rotta: sono la prova che sei <u>sopravvissuta</u>. Il tuo sistema nervoso non è
            mai stato il tuo nemico. Ha sempre cercato di proteggerti; ha solo urlato in una{' '}
            <em>lingua che nessuno ti aveva insegnato a capire</em>. Adesso è il momento di impararla. È ora di
            smettere di scappare. È ora di <strong>tornare a respirare</strong>. Non vedo l'ora di aiutare anche te ❤️
          </p>
        </blockquote>

        <DualCtas />
      </div>
    </article>
  )
}

