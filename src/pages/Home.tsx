import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">Mental coaching</p>
        <h1 id="hero-title">Ansia e attacchi di panico: non sei sola/o.</h1>
        <p className="lead">
          Qui nascerà il sito di Silvia Semeraro. Nei prossimi step inseriamo
          contenuti, servizi, testimonianze e contatti.
        </p>
        <div className="ctaRow">
          <Link className="button primary" to="/contatti-e-dove-lavoro">
            Prenota una consulenza
          </Link>
          <Link className="button ghost" to="/percorsi">
            Scopri i percorsi
          </Link>
        </div>
      </section>

      <section className="section">
        <h2>In evidenza (placeholder)</h2>
        <p>Preview rapida di percorsi, risorse gratuite e testimonianze.</p>
      </section>
    </>
  )
}

