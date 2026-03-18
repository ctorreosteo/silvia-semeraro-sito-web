import { Link } from 'react-router-dom'

type DualCtasProps = {
  className?: string
}

export function DualCtas({ className }: DualCtasProps) {
  return (
    <div className={`ctaRow${className ? ` ${className}` : ''}`}>
      <Link className="button primary" to="/contatti-e-dove-lavoro">
        Prenota un incontro conoscitivo gratuito
      </Link>
      <Link className="button ghost" to="/percorsi">
        Scopri il percorso
      </Link>
    </div>
  )
}

