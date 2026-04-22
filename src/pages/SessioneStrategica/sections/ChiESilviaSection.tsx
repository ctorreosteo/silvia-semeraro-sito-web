import { useEffect, useRef, useState, type CSSProperties } from 'react'

export function ChiESilviaSection() {
  const [isSectionVisible, setIsSectionVisible] = useState(false)
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement | null>(null)
  const listRefs = useRef<Array<HTMLLIElement | null>>([])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) {
          setIsSectionVisible(true)
          sectionObserver.disconnect()
        }
      },
      {
        threshold: 0.22,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    const listObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const index = Number(entry.target.getAttribute('data-item-index'))
          if (Number.isNaN(index)) {
            return
          }

          setVisibleItems((current) => (current.includes(index) ? current : [...current, index]))
          listObserver.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current)
    }

    listRefs.current.forEach((element) => {
      if (element) {
        listObserver.observe(element)
      }
    })

    return () => {
      sectionObserver.disconnect()
      listObserver.disconnect()
    }
  }, [])

  return (
    <section
      className={`sessioneStrategicaChiSection ${isSectionVisible ? 'is-visible' : ''}`}
      id="chi-e-silvia"
      aria-labelledby="chi-e-silvia-title"
      ref={sectionRef}
    >
      <article className="sessioneStrategicaChiCard" aria-label="Perche Silvia e diversa">
        <figure className="sessioneStrategicaChiMedia" aria-label="Foto di Silvia Semeraro">
          <picture>
            <source media="(max-width: 900px)" srcSet="/Immagini/foto1.png" />
            <img
              src="/Immagini/foto17.png"
              alt="Silvia Semeraro"
              loading="lazy"
              decoding="async"
              className="sessioneStrategicaChiMediaImg"
            />
          </picture>
        </figure>

        <div className="sessioneStrategicaChiBody">
          <h2 id="chi-e-silvia-title" className="sessioneStrategicaChiTitle">
            Perch&eacute; Silvia &egrave; diversa da tutti gli altri che hai provato.
          </h2>

          <p className="sessioneStrategicaChiSubtitle">
            Non &egrave; una psicologa che ti ascolta per un&apos;ora e ti rimanda a settimana prossima. Non &egrave; una
            coach motivazionale che ti dice <em>&quot;ce la puoi fare&quot;</em>. &Egrave; l&apos;<strong>unica combinazione in
            Italia</strong> di <u>tre competenze</u> che insieme risolvono l&apos;ansia.
          </p>

          <ul className="sessioneStrategicaChiList" aria-label="Perche il metodo di Silvia funziona">
            <li
              className={visibleItems.includes(0) ? 'is-visible' : ''}
              data-item-index={0}
              style={{ '--chi-item-delay': '80ms' } as CSSProperties}
              ref={(element) => {
                listRefs.current[0] = element
              }}
            >
              <h3>Conosce il tuo corpo meglio di chi ti dice &quot;&egrave; solo mentale&quot;.</h3>
              <p>
                <strong>Laureata in Scienze Motorie</strong>, studia da anni come il sistema nervoso entra in allerta e
                - soprattutto - come se ne esce. L&apos;ansia non &egrave; un pensiero, &egrave; una reazione
                <u>fisica</u>. E finch&eacute; non la tratti come tale, <em>non passa</em>.
              </p>
            </li>
            <li
              className={visibleItems.includes(1) ? 'is-visible' : ''}
              data-item-index={1}
              style={{ '--chi-item-delay': '180ms' } as CSSProperties}
              ref={(element) => {
                listRefs.current[1] = element
              }}
            >
              <h3>Ha formato la mente ad agire sotto pressione, non solo a capire.</h3>
              <p>
                <strong>Master in Coaching e PNL.</strong> Mentre la terapia classica ti fa esplorare
                &quot;perch&eacute;&quot; soffri, Silvia lavora su <u>&quot;come esci&quot;</u> - con protocolli precisi per
                interrompere il meccanismo dell&apos;ansia mentre sta succedendo, <em>non dopo</em>.
              </p>
            </li>
            <li
              className={visibleItems.includes(2) ? 'is-visible' : ''}
              data-item-index={2}
              style={{ '--chi-item-delay': '280ms' } as CSSProperties}
              ref={(element) => {
                listRefs.current[2] = element
              }}
            >
              <h3>Costruisce strategie, non chiacchiere.</h3>
              <p>
                <strong>Magistrale in Management dello Sport.</strong> Dove gli altri ti lasciano con
                &quot;ogni caso &egrave; diverso&quot; e ti fanno aspettare mesi per capire se stai migliorando, lei ti
                d&agrave; un <u>piano strutturato</u> con tappe chiare e <em>misurabili</em>.
              </p>
            </li>
            <li
              className={visibleItems.includes(3) ? 'is-visible' : ''}
              data-item-index={3}
              style={{ '--chi-item-delay': '380ms' } as CSSProperties}
              ref={(element) => {
                listRefs.current[3] = element
              }}
            >
              <h3>Ha aiutato centinaia di persone che pensavano di essere casi senza speranza.</h3>
              <p>
                Persone che avevano girato psicologi, psichiatri, farmaci, terapie alternative. Persone che si erano
                arrese all&apos;idea di &quot;dovercene fare una ragione&quot;. Oggi vivono di nuovo la loro vita - e nessuna di
                loro pensava fosse possibile. <strong>Eppure &egrave; successo.</strong>
              </p>
            </li>
            <li
              className={visibleItems.includes(4) ? 'is-visible' : ''}
              data-item-index={4}
              style={{ '--chi-item-delay': '480ms' } as CSSProperties}
              ref={(element) => {
                listRefs.current[4] = element
              }}
            >
              <h3>
                Non ti tratta come un paziente fragile. Ti tratta come una persona pronta a riprendersi la sua vita.
              </h3>
              <p>
                Nessun pietismo, nessun &quot;povera te&quot;. Silvia sa che sei <strong>pi&ugrave; forte di quanto pensi</strong>, e
                il suo metodo &egrave; costruito per farti recuperare la <u>forza</u> che l&apos;ansia ti ha fatto
                dimenticare di avere.
              </p>
            </li>
          </ul>

          <p className="sessioneStrategicaChiClosing">
            Questa &egrave; la combinazione che non trovi n&eacute; nello studio di uno psicologo, n&eacute;
            nell&apos;ambulatorio di uno psichiatra, n&eacute; nei corsi di un coach generico. E questa &egrave; la
            ragione per cui il suo metodo <strong>funziona</strong> anche dove tutto il resto ha
            <em> fallito</em>.
          </p>

          <aside className="sessioneStrategicaPainInlineCta" aria-label="Invito alla candidatura">
            <a className="sessioneStrategicaPainInlineCtaBtn" href="#offerta-divider">
              Candidati alla Sessione Strategica Scontata
            </a>
          </aside>
        </div>
      </article>
    </section>
  )
}
