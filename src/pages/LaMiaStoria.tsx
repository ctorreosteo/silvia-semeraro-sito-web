import { Link } from 'react-router-dom'

export function LaMiaStoria() {
  return (
    <article className="section pageSection">
      <header className="pageHeader">
        <h1>La mia storia</h1>
        <p className="lead">
          Se vivi ansia o attacchi di panico, forse riconoscerai alcune parole.
          Non sono qui per “spiegarti” cosa provi dall’esterno: io quell’inferno
          l’ho attraversato, e da lì è nato il mio metodo.
        </p>
      </header>

      <figure className="storyHero">
        <img
          className="storyHeroImg"
          src="/Immagini/foto1.png"
          alt="Silvia Semeraro"
          loading="eager"
          decoding="async"
        />
      </figure>

      <div className="prose">
        <h2>Ansia e panico non sono la stessa cosa</h2>
        <p>
          L’ansia è una presenza costante: un nodo allo stomaco, la testa
          pesante, il respiro alto, le notti spezzate da pensieri che costruiscono
          scenari catastrofici. È il “sentirsi sulle spine”, come se la brutta
          notizia fosse sempre dietro l’angolo.
        </p>
        <p>
          Il panico, invece, è un tradimento fisico improvviso: i suoni si
          allontanano, arriva una vampata di calore, poi il gelo; il cuore sembra
          colpire contro lo sterno; l’aria non entra. E nella testa non c’è una
          voce: c’è un urlo. Paura di morire, di svenire, di impazzire, di perdere
          il controllo.
        </p>

        <figure className="storyInline">
          <img
            className="storyInlineImg"
            src="/Immagini/foto2.png"
            alt="Silvia Semeraro"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <blockquote>
          <p>
            Il vero problema non è il panico: è la paura della paura. È quel
            monitoraggio ossessivo che ti fa “controllare” te stessa appena ti
            svegli.
          </p>
        </blockquote>

        <h2>Quando il mondo si restringe</h2>
        <p>
          A un certo punto ansia e panico iniziano a rimpicciolire la tua vita:
          restano solo “posti sicuri” e “persone sicure”. Viaggiare diventa
          difficile, guidare diventa un rischio, stare da sola sembra impossibile.
          E sentirsi dire “devi solo rilassarti” fa male, perché suona come colpa.
        </p>
        <p>
          Per anni mi hanno proposto la convivenza con i farmaci senza spiegarmi
          cosa stesse succedendo davvero. Non è colpa tua se li prendi: il punto è
          che spesso si spegne il sintomo senza insegnarti a leggere il segnale.
        </p>

        <figure className="storyInline">
          <img
            className="storyInlineImg"
            src="/Immagini/foto3.png"
            alt="Silvia Semeraro"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <h2>La radice: la paura dell’imprevedibile</h2>
        <p>
          Avevo 13 anni quando ho visto la fragilità della vita in modo brutale.
          Da lì è nata una convinzione silenziosa: la catastrofe può arrivare
          quando abbassi la guardia. Ho sepolto quel trauma sotto una vita
          frenetica: ginnastica agonistica, obiettivi, prestazione.
        </p>
        <p>
          A 18 anni il ritmo è diventato insostenibile e gli attacchi di panico
          hanno iniziato a colpire ovunque: al cinema, con gli amici, in auto.
          Cercavo risposte, ma ricevetti un’etichetta. E intanto il corpo
          registrava.
        </p>

        <figure className="storyInline">
          <img
            className="storyInlineImg"
            src="/Immagini/foto4.png"
            alt="Silvia Semeraro"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <h2>La pandemia e il collasso</h2>
        <p>
          Poi è arrivata la pandemia. Mio papà in ospedale, 30 giorni tra la vita
          e la morte. Lo stress mi ha schiacciata: sono tornata a vivere nel letto,
          paralizzata, nel terrore. Quando le cose sembravano migliorare ho provato
          a seppellire di nuovo tutto nel lavoro… ma qualcosa si è rotto ancora:
          l’ansia ha cambiato forma, è diventata dermatite.
        </p>

        <figure className="storyInline">
          <img
            className="storyInlineImg"
            src="/Immagini/foto5.png"
            alt="Silvia Semeraro"
            loading="lazy"
            decoding="async"
          />
        </figure>

        <h2>La svolta: comprendere invece di combattere</h2>
        <p>
          In quel periodo mi sono licenziata: un passo verso l’ignoto che mi ha
          fatta sentire nuda, sola, senza l’armatura del “fare”. La pelle era in
          fiamme e mi proposero una terapia a vita. Mi sentivo “fallata”.
        </p>
        <p>
          È qui che è iniziato un lavoro diverso: studio, test, ascolto del corpo.
          Ho iniziato a restare con la sensazione invece di fuggire: respiro
          diaframmatico, piccoli sblocchi fisici per scaricare l’elettricità
          dell’ansia, presenza. Non per zittirmi, ma per capire.
        </p>
        <p>
          A un certo punto ho scelto di dire no alla strada che “sopprimeva la
          vita” pur di non sentire. Ho capito che dovevo rieducare il mio sistema
          nervoso. E che il mio corpo non era un traditore: era un bambino
          spaventato che chiedeva ascolto.
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

        <h2>Oggi</h2>
        <p>
          Da quello che ho attraversato è nato il mio lavoro: un metodo pratico,
          educativo e concreto per aiutarti a capire cosa sta succedendo dentro
          di te e a tornare a respirare. Qui non sei “rotta”: sei una persona che
          può tornare a vivere.
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
    </article>
  )
}

