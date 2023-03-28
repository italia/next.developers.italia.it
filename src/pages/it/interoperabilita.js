import React from 'react';

const Page = () => (
  <div className="container">
    <h2>Cos’è l'ecosistema Interoperabilità</h2>
    <div className="row mt-5 mb-4">
      <div className="col-md-6">
        <p class="lead">
          Abilita lo scambio semplice e sicuro di informazioni tra tutte le
          Pubbliche Amministrazioni
        </p>
      </div>
      <div className="col-md-6">
        <h3 className="h5">Linea guida modello interoperabilità (ModI)</h3>
        <p>
          Individuano le tecnologie e gli standard che le Pubbliche Amministrazioni
          devono considerare durante la realizzazione dei propri sistemi
          informatici, al fine di permettere l’interoperabilità.
        </p>
        <a href="#">
          Consulta le linee guida
          <svg class="icon icon-sm align-top">
            <use href="/assets/sprite.svg#it-external-link"></use>
          </svg>
        </a>
      </div>
    </div>

    <h3>Come funziona</h3>
    <div className="row mt-5">
      <div className="col-md-3 border-right pr-2">
        <h4 className="h6">1. RICERCA</h4>
        <p>
          Scopri le API disponibili e quali veicolano dati di interesse
          nazionale e valuta come integrarle nei tuoi servizi
          o come crearne di innovativi
        </p>

        <h5 className="h6">Strumenti correlati</h5>
        <p><a href="#">Catalogo API</a></p>
        <p><a href="#">Base Dati di Interesse Nazionale (BDIN)</a></p>
      </div>
      <div className="col-md-3 border-right px-3">
        <h4 className="h6">2. SVILUPPA</h4>
        <p>
          Crea le API usando gli strumenti e i canali di supporto disponibili.
          Consulta e riutilizza ontologie, vocabolari controllati e schemi dati
        </p>

        <h5 className="h6">Strumenti correlati</h5>
        <p><a href="#">Software development KIT (SDK)</a></p>
        <p><a href="#">Schema</a></p>
      </div>
      <div className="col-md-3 border-right px-3">
        <h4 className="h6">3. VALIDA</h4>
        <p>
          Controlla che le tue API siano sintatticamente corrette con l’aiuto del
          validatore
        </p>

        <h5 className="h6">Strumenti correlati</h5>
        <p><a href="#">Validatore sintattico</a></p>
      </div>
      <div className="col-md-3 border-right pl-3">
        <h4 className="h6">4. PUBBLICA</h4>
        <p>
          Pubblica i tuoi e-service nell’ambiente di collaudo della PDND,
          fai i test necessari e poi rendili disponibili anche in quello
          di esercizio
        </p>

        <h5 className="h6">Strumenti correlati</h5>
        <p><a href="#">Piattaforma Digitale Nazionale Dati (PDND)</a></p>
      </div>
    </div>

    <h3>Gli strumenti</h3>
    <div className="row">
      <div className="col-md-6 mt-4">
        <p>
          Scopri i principali strumenti che supportano l’interoperabilità di dati tra gli enti
          della Pubblica Amministrazione, creando vantaggi per cittadini e imprese
        </p>

        <h3 className="h5 mt-4">Piattaforma Digitale Nazionale Dati (PDND)</h3>
        <p>
          Garantisce lo scambio di informazioni, verificando l‘autenticazione e i livelli
          di autorizzazione dei soggetti abilitati, affinchè avvenga in modo semplice e sicuro
        </p>
        <button type="button" className="btn btn-outline-secondary">Scopri di più</button>

        <h3 className="h5 mt-4">Schema</h3>
        <p>
          È il catalogo nazionale della semantica dei dati che permette di ricercare
          e utilizzare risorse già standardizzate e condivise per supportare lo
          sviluppo di API semanticamente e sintatticamente interoperabili
        </p>
        <button type="button" className="btn btn-outline-secondary">Scopri di più</button>

        <h3 className="h5 mt-4">Catalogo API</h3>
        <p>
          Promuove la visibilità e l’uso degli e-service pubblicati su PDND, permettendo
          agli enti di valutare come integrarli efficacemente con i propri servizi, rendendoli
          ancora più funzionali per l’utente
        </p>
        <button type="button" className="btn btn-outline-secondary">Scopri di più</button>
      </div>
      <div className="col-md-6 mt-4">
        <img width="100%" src="/assets/graph.svg" alt="" />
      </div>
    </div>

    <div className="container bg-light mt-5 pt-5">
      <h3>I vantaggi</h3>
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <img width="36px" src="/assets/smile.svg" alt="" />
            <h4>Cittadino</h4>
            <p>Semplificazione dei servizi offerti a cittadini e imprese</p>
          </div>
          <div className="row">
            <h4>Sviluppatori</h4>
            <p>
              Integrazione degli e-service attraverso gli standard offerti dalla
              Piattaforma Digitale Nazionale Dati(PDND)
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <h4>Ente</h4>
            <p>
              Facilitazione e sicurezza dello scambio dati tramite la standardizzazione
              del processo per enti erogatori e fruitori
            </p>
          </div>
          <div className="row">
            <h4>DPO</h4>
            <p>
              Standardizzazione del processo per tutti coloro che aderiscono e
              riutilizzo di quanto messo a disposizione dagli altri
            </p>
          </div>
        </div>
      </div>
    </div>

    <h3 className="h2 mt-5">Hai bisogno di supporto?</h3>
    <p className="mb-5">Utilizza uno dei canali a disposizione per chiedere chiarimenti</p>
    <hr/>

    <div className="row">
      <section>
      <div className="container">
        <div className="row row-eq-height">
            <div className="col-sm-6 col-md-6 col-lg-4 my-3 mb-md-4 my-md-0 px-3">
                <a target="_blank" href="https://forum.italia.it/" className="decoration-none" title="Forum">
                    <article className="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                        <figure className="d-flex w-100 align-items-center">
                            <img src="https://developers.italia.it/assets/images/tools/Forum_Logo.svg" alt="Logo Forum Italia" height="32" />
                        </figure>
                    </article>
                </a>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4 my-3 mb-md-4 my-md-0 px-3">
                <a target="_blank" href="https://slack.developers.italia.it/" className="decoration-none" title="Slack">
                    <article className="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                        <figure className="d-flex w-100 align-items-center">
                            <img src="https://developers.italia.it/assets/images/tools/Slack_Logo.svg" alt="Logo Slack" height="32"/>
                        </figure>
                    </article>
                </a>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-4 my-3 mb-md-4 my-md-0 px-3">
                <a target="_blank" href="https://github.com/italia" className="decoration-none" title="Codice sorgente">
                    <article className="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                        <figure className="d-flex w-100 align-items-center">
                            <img src="https://developers.italia.it/assets/images/tools/GitHub_Logo.svg" alt="Logo GitHub" height="32"/>
                        </figure>
                    </article>
                </a>
            </div>
        </div>
      </div>
    </section>
    </div>
  </div>
)
export default Page;
