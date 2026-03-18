import { Link } from 'react-router-dom'
import { DualCtas } from '../components/DualCtas'

export function NotFound() {
  return (
    <section className="section pageSection">
      <h1>Pagina non trovata</h1>
      <p className="lead">La pagina che cerchi non esiste (o è stata spostata).</p>
      <DualCtas />
      <div className="ctaRow">
        <Link className="button ghost" to="/">
          Torna alla Home
        </Link>
      </div>
    </section>
  )
}

