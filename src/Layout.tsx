import { useMemo, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function getNavClassName({ isActive }: { isActive: boolean }) {
  return isActive ? 'navLink navLinkActive' : 'navLink'
}

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/la-mia-storia', label: 'La mia storia' },
      { to: '/testimonianze', label: 'Testimonianze' },
      { to: '/percorsi', label: 'Percorsi' },
      { to: '/contatti-e-dove-lavoro', label: 'Contatti e dove lavoro' },
      { to: '/risorse-gratuite', label: 'Risorse gratuite' },
    ],
    [],
  )

  return (
    <div className="page">
      <header className="header">
        <NavLink className="brand" to="/" aria-label="Homepage">
          <img
            className="brandLogo"
            src="/Logo.png"
            width={44}
            height={44}
            alt="Silvia Semeraro"
          />
          <span className="brandText">Silvia Semeraro</span>
        </NavLink>
        <nav className="nav" aria-label="Principale">
          {navItems.map((item) => (
            <NavLink key={item.to} className={getNavClassName} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="menuButton"
          aria-label={isMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          Menu
        </button>
      </header>

      {isMenuOpen ? (
        <div
          className="mobileNavOverlay"
          role="presentation"
          onClick={() => setIsMenuOpen(false)}
        >
          <nav
            className="mobileNavPanel"
            aria-label="Navigazione mobile"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobileNavHeader">
              <div className="mobileNavBrand">
                <img
                  className="mobileNavLogo"
                  src="/Logo.png"
                  width={36}
                  height={36}
                  alt="Silvia Semeraro"
                />
                <div className="mobileNavBrandText">
                  <span className="mobileNavTitle">Menu</span>
                  <span className="mobileNavSubtitle">Silvia Semeraro</span>
                </div>
              </div>
              <button
                type="button"
                className="menuButton menuButtonInline"
                aria-label="Chiudi menu"
                onClick={() => setIsMenuOpen(false)}
              >
                Chiudi
              </button>
            </div>
            <div className="mobileNavLinks">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  className={getNavClassName}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        </div>
      ) : null}

      <main className="main">
        <Outlet />
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Silvia Semeraro</small>
      </footer>
    </div>
  )
}

