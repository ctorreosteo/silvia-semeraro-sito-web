import { Link } from 'react-router-dom'

type DualCtasProps = {
  className?: string
}

export function DualCtas({ className }: DualCtasProps) {
  return (
    <div className={`ctaRow${className ? ` ${className}` : ''}`}>
      <a
        className="button primary"
        href="https://docs.google.com/forms/d/e/1FAIpQLSelhK1xchCBznR7QEwt-ADWEuGfEPAcTI_0CKZIqvuwAUfzLA/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer"
      >
        Prenota un incontro conoscitivo gratuito
      </a>
      <Link className="button ghost" to="/percorsi">
        Scopri il percorso
      </Link>
    </div>
  )
}

