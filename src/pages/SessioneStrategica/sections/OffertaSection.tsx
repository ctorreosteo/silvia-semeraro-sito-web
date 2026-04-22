export function OffertaSection() {
  return (
    <section className="sessioneStrategicaSection sessioneStrategicaOffertaSection" id="offerta" aria-labelledby="offerta-title">
      <div className="sessioneStrategicaSectionInner sessioneStrategicaOffertaInner">
        <h2 id="offerta-title" className="sessioneStrategicaOffertaTitle">
          Smetti di dover "gestire" la tua ansia. Risolviamo definitivamente insieme.
        </h2>
        <p className="sessioneStrategicaOffertaSubtitle">
          La sessione di <strong>1h30</strong> con me è perfetta per capire esattamente cosa ti tiene bloccata e iniziare
          a uscirne <em>davvero</em> (non tra anni, <strong>da subito</strong>).
        </p>

        <ul className="sessioneStrategicaOffertaList" aria-label="Cosa ottieni nella Sessione Strategica">
          <li>
            <strong>L&apos;analisi precisa</strong> di cosa tiene attiva la tua ansia, anche se la porti da anni.
          </li>
          <li>
            Il tuo piano d&apos;azione personalizzato, con i passi <strong>concreti</strong> da iniziare da domani.
          </li>
          <li>
            <strong>Tre tecniche immediate</strong> per interrompere l&apos;ansia quando arriva, calibrate sul tuo profilo.
          </li>
          <li>
            La chiarezza definitiva sulla tua situazione, per smettere di girare a vuoto <em>una volta per tutte</em>.
          </li>
        </ul>

        <p className="sessioneStrategicaOffertaPrice" aria-label="Prezzo promozionale">
          <span className="sessioneStrategicaOffertaPriceNow">59€</span>
          <span className="sessioneStrategicaOffertaPriceWas">(invece di 90€)</span>
        </p>

        <aside className="sessioneStrategicaPainInlineCta" aria-label="Invito alla candidatura">
          <a className="sessioneStrategicaPainInlineCtaBtn" href="#offerta-divider" data-open-sessione-popup="true">
            Candidati alla Sessione Strategica Scontata
          </a>
        </aside>
      </div>
    </section>
  )
}
