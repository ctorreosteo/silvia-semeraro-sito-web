import { useEffect, useRef, useState, type CSSProperties } from 'react'

const PAIN_POINTS = [
  {
    id: 'pain-1',
    icon: '🌙',
    title: (
      <>
        Ti svegli nel cuore della notte con <strong>il cuore in gola</strong>, e da lì <u>non dormi più</u>.
      </>
    ),
    body: (
      <>
        Magari alle 3, alle 4 del mattino. Il corpo è <strong>sveglissimo</strong>, la mente parte, e sai che la
        giornata dopo sarà <em>devastante</em>.
      </>
    ),
  },
  {
    id: 'pain-2',
    icon: '🕊️',
    title: (
      <>
        Hai smesso di fare <strong>cose che prima ti piacevano</strong>.
      </>
    ),
    body: (
      <>
        Cene, viaggi, autostrada, supermercati, concerti, metropolitana. Non è che non vuoi — è che una parte di te
        pensa <u>&quot;e se mi viene proprio lì?&quot;</u>.
      </>
    ),
  },
  {
    id: 'pain-3',
    icon: '🫀',
    title: (
      <>
        <strong>Controlli continuamente</strong> il tuo corpo.
      </>
    ),
    body: (
      <>
        Il battito, il respiro, la pressione al petto, le vertigini. Ogni sensazione è analizzata, ogni minimo
        cambiamento <em>ti mette in allerta</em>.
      </>
    ),
  },
  {
    id: 'pain-4',
    icon: '⚡',
    title: (
      <>
        Vivi con la <u>paura della paura</u>.
      </>
    ),
    body: (
      <>
        Anche quando stai bene, una parte della tua mente è sempre lì a chiedersi <strong>&quot;e se torna?&quot;</strong>.
        Non ti godi nemmeno i momenti sereni.
      </>
    ),
  },
  {
    id: 'pain-5',
    icon: '🫧',
    title: (
      <>
        Ti senti <strong>sola</strong>, anche quando sei circondata da persone.
      </>
    ),
    body: (
      <>
        Nessuno capisce davvero cosa stai vivendo. Te ne accorgi quando provi a spiegarlo e vedi gli occhi degli
        altri <em>diventare vuoti</em>.
      </>
    ),
  },
  {
    id: 'pain-6',
    icon: '🩺',
    title: (
      <>
        Hai fatto esami medici e sono tutti <u>&quot;a posto&quot;</u> — ma tu stai male lo stesso.
      </>
    ),
    body: (
      <>
        Elettrocardiogrammi, esami del sangue, visite di ogni tipo. E ogni volta ti dicono <strong>&quot;è tutto nella
        norma, è solo ansia&quot;</strong>. Come se <em>&quot;solo&quot;</em> fosse una consolazione.
      </>
    ),
  },
  {
    id: 'pain-7',
    icon: '🫶',
    title: (
      <>
        Ti senti <strong>un peso</strong> per chi ti ama.
      </>
    ),
    body: (
      <>
        Hai smesso di dire di sì, hai annullato piani, hai rovinato serate. E il senso di colpa che senti è forse
        <u>più pesante dell&apos;ansia stessa</u>.
      </>
    ),
  },
  {
    id: 'pain-8',
    icon: '🧩',
    title: (
      <>
        Stai perdendo <strong>pezzi di chi eri</strong>.
      </>
    ),
    body: (
      <>
        Guardi le foto di qualche anno fa e vedi una persona che sorrideva davvero. E ti chiedi se tornerai mai a
        essere quella — o se <em>ormai è tardi</em>.
      </>
    ),
  },
] as const

export function PainPointsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const cardRefs = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    const observer = new IntersectionObserver(
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
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.24,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    cardRefs.current.forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="sessioneStrategicaSection sessioneStrategicaPainSection" id="pain-points" aria-labelledby="pain-points-title">
      <div className="sessioneStrategicaSectionInner">
        <header className="sessioneStrategicaPainHeader">
          <h2 id="pain-points-title" className="sessioneStrategicaPainTitle">
            <span
              className="sessioneStrategicaPainTitleScript"
              data-text="Se ti riconosci anche solo in 2 di queste situazini, sei nel posto giusto."
            >
              Se ti riconosci anche solo in 2 di queste situazioni, sei nel posto giusto.
            </span>
          </h2>
          <p className="sessioneStrategicaPainLead">
            Non serve un manuale per spiegarti cos&apos;è l&apos;ansia. <strong>Sei tu che la vivi ogni giorno.</strong> Ma
            spesso quello che non hai è qualcuno che nomini <u>esattamente quello che ti sta succedendo</u> — senza
            minimizzarlo, senza patologizzarlo, senza dirti <em>&quot;è normale, respira&quot;</em>.
          </p>
        </header>

        <div className="sessioneStrategicaPainGrid" aria-label="Pain points principali">
          {PAIN_POINTS.map((item, index) => (
            <div
              key={item.id}
              className={`sessioneStrategicaPainStep ${visibleItems.includes(index) ? 'is-visible' : ''}`}
              data-item-index={index}
              style={{ '--pain-step-delay': `${index * 120}ms` } as CSSProperties}
              ref={(element) => {
                cardRefs.current[index] = element
              }}
            >
              <article className="sessioneStrategicaPainCard">
                <span className="sessioneStrategicaPainCardIcon" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="sessioneStrategicaPainCardTitle">{item.title}</h3>
                <p className="sessioneStrategicaPainCardText">{item.body}</p>
              </article>
            </div>
          ))}
        </div>

        <p className="sessioneStrategicaPainClosing">
          Se hai letto questi punti e hai pensato <strong>&quot;è esattamente così, è come se mi conoscesse&quot;</strong> —
          non è un caso. È perché <u>migliaia di persone vivono la stessa identica cosa</u>. E la buona notizia è che
          <em>da qui si esce</em>.
        </p>

        <aside className="sessioneStrategicaPainInlineCta" aria-label="Invito alla candidatura">
          <a className="sessioneStrategicaPainInlineCtaBtn" href="#offerta-divider">
            Candidati alla Sessione Strategica Scontata
          </a>
        </aside>
      </div>
    </section>
  )
}
