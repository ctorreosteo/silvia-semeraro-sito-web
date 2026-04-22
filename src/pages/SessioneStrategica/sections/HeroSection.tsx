export function HeroSection() {
  return (
    <section className="sessioneStrategicaSection sessioneStrategicaHero" id="hero" aria-labelledby="hero-title">
      <div className="sessioneStrategicaHeroShell">
        <div className="sessioneStrategicaHeroCopy">
          <h1 id="hero-title" className="sessioneStrategicaHeroTitle">
            Se l&apos;ansia ti sta portando via pezzi di vita, c&apos;&egrave; una strada per uscirne e nessuno te l'ha mai
            mostrata.
          </h1>
          <p className="sessioneStrategicaHeroLead">
            Nella <span className="heroEmphasisStrong">sessione strategica di 1h30</span> scoprirai esattamente cosa mantiene attiva la tua ansia e come iniziare a
            uscirne, con un&apos;<span className="heroEmphasisUnderline">analisi personalizzata</span> della tua{' '}
            <span className="heroEmphasisItalic">situazione</span>.
          </p>
        </div>

        <figure className="sessioneStrategicaHeroMedia" aria-label="Silvia Semeraro">
          <picture>
            <source media="(max-width: 900px)" srcSet="/Immagini/foto17.png" />
            <img
              src="/Immagini/foto1.png"
              alt="Silvia Semeraro"
              loading="eager"
              decoding="async"
              className="sessioneStrategicaHeroMediaImg"
            />
          </picture>
        </figure>

        <div className="sessioneStrategicaHeroActions">
          <ul className="sessioneStrategicaHeroBullets" aria-label="Cosa ottieni dalla sessione">
            <li>
              <span className="sessioneStrategicaHeroBulletText">
                Capirai <span className="heroEmphasisStrong">esattamente</span> cosa sta mantenendo attiva la tua ansia, anche se
                la porti da <span className="heroEmphasisUnderline">10 o 20 anni</span>.
              </span>
            </li>
            <li>
              <span className="sessioneStrategicaHeroBulletText">
                Uscirai con un <span className="heroEmphasisStrong">piano d&apos;azione personalizzato</span>, costruito su
                di te e <span className="heroEmphasisItalic">non un protocollo standard</span>.
              </span>
            </li>
            <li>
              <span className="sessioneStrategicaHeroBulletText">
                Scoprirai se i metodi che hai provato hanno fallito per colpa tua o perch&eacute; erano{' '}
                <span className="heroEmphasisUnderline">gli strumenti sbagliati</span>.
              </span>
            </li>
            <li>
              <span className="sessioneStrategicaHeroBulletText">
                Imparerai a distinguere i sintomi che <span className="heroEmphasisStrong">peggiorano l&apos;ansia</span> da
                quelli che segnalano la tua <span className="heroEmphasisItalic">ripresa</span>.
              </span>
            </li>
          </ul>

          <div className="sessioneStrategicaHeroCtaBlock">
            <a className="sessioneStrategicaHeroCta" href="#offerta-divider">
              Candidati alla Sessione Strategica Scontata
            </a>
            <p className="sessioneStrategicaHeroGuarantee">100% analisi personalizzata</p>
          </div>
        </div>
      </div>
    </section>
  )
}
