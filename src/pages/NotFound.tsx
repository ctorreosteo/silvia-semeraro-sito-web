import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="section pageSection">
      <h1>Pagina non trovata</h1>
      <p className="lead">La pagina che cerchi non esiste (o è stata spostata).</p>
      <div className="ctaRow">
        <Link className="button primary" to="/">
          Torna alla Home
        </Link>
      </div>
    </section>
  )
}

