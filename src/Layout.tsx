import { useEffect, useMemo, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { SeoManager } from './seo/SeoManager'

function getNavClassName({ isActive }: { isActive: boolean }) {
  return isActive ? 'navLink navLinkActive' : 'navLink'
}

function getFooterNavClassName({ isActive }: { isActive: boolean }) {
  return isActive ? 'footerLink footerLinkActive' : 'footerLink'
}

export function Layout() {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isSessioneStrategicaPage = location.pathname === '/sessione-strategica'

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Prevent browsers from restoring previous scroll position on reload/back-forward.
    const { history } = window
    if (!history || !('scrollRestoration' in history)) return

    const previous = history.scrollRestoration
    history.scrollRestoration = 'manual'
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    return () => {
      history.scrollRestoration = previous
    }
  }, [])

  useEffect(() => {
    // When navigating to a new route, ensure the page starts from the top.
    // Skip hash-based navigation so anchor links can work as expected.
    if (typeof window === 'undefined') return
    if (location.hash) return

    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }, [location.pathname, location.search, location.hash])

  const navItems = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/percorsi', label: 'Percorso e Academia Online' },
      { to: '/la-mia-storia', label: 'La mia storia' },
      { to: '/la-mia-formazione', label: 'I miei studi' },
      { to: '/eventi', label: 'Eventi' },
      { to: '/testimonianze', label: 'Testimonianze' },
      { to: '/contatti-e-dove-lavoro', label: 'Contatti e dove lavoro' },
    ],
    [],
  )

  return (
    <div className="page">
      <SeoManager />
      <header className="header">
        <NavLink className="brand" to="/" aria-label="Homepage">
          <span className="brandLogoFrame" aria-hidden="true">
            <img
              className="brandLogo"
              src="/Logo.png"
              width={44}
              height={44}
              alt="Silvia Semeraro"
            />
          </span>
        </NavLink>
        <span className="brandText">Silvia Semeraro</span>
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

      <main className={isSessioneStrategicaPage ? 'main mainSessioneStrategica' : 'main'}>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footerInner">
          <div className="footerBrand">
            <NavLink className="footerBrandLink" to="/" aria-label="Homepage">
              <img
                className="footerLogo"
                src="/Logo.png"
                width={46}
                height={46}
                alt="Silvia Semeraro"
                loading="lazy"
              />
              <div className="footerBrandText">
                <strong className="footerTitle">Silvia Semeraro</strong>
              </div>
            </NavLink>

            <div className="footerContacts" aria-label="Contatti">
              <a className="footerContactLink" href="tel:+393479336648">
                3479336648
              </a>
              <span className="footerSep" aria-hidden="true">
                ·
              </span>
              <a
                className="footerContactLink"
                href="mailto:silvia.mentalcoach@gmail.com"
              >
                silvia.mentalcoach@gmail.com
              </a>
            </div>

            <div className="footerLocation">
              <span className="footerLocationLabel">Dove ricevo:</span> in 2 studi a
              Torino oppure online da remoto
            </div>
          </div>

          <div className="footerCols">
            <div className="footerCol">
              <div className="footerColTitle">Pagine</div>
              <nav
                className="footerLinks footerLinksGrid2"
                aria-label="Link pagine"
              >
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    className={getFooterNavClassName}
                    to={item.to}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            <div className="footerCol footerColRight">
              <div className="footerColTitle">Info legali</div>
              <nav className="footerLinks" aria-label="Link legali">
                <NavLink className={getFooterNavClassName} to="/privacy-policy">
                  Privacy Policy
                </NavLink>
                <NavLink className={getFooterNavClassName} to="/cookie-policy">
                  Cookie Policy
                </NavLink>
              </nav>
            </div>
          </div>
        </div>

        <div className="footerBottom">
          <small className="footerCopyright">
            © {new Date().getFullYear()} Silvia Semeraro
          </small>
        </div>
      </footer>
    </div>
  )
}

