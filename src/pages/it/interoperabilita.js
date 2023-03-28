import React from 'react';

const Page = () => (
  <>
  <div className="container">
    <section className="apilist__content mt-2 mt-md-5 pt-2 pt-md-4 pb-2">
      <div className="container">
        <h2>Cos’è l'ecosistema Interoperabilità</h2>
        <div className="row mt-5 mb-4">
          <div className="col-md-6">
            <p class="lead h3">
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

        <h3 className="mt-5">Come funziona</h3>
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
            <p>
              <a href="#">
                Base Dati di Interesse Nazionale (BDIN)
                <svg class="icon icon-sm align-top">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </a>
            </p>

          </div>
          <div className="col-md-3 border-right px-3">
            <h4 className="h6">2. SVILUPPA</h4>
            <p>
              Crea le API usando gli strumenti e i canali di supporto disponibili.
              Consulta e riutilizza ontologie, vocabolari controllati e schemi dati
            </p>

            <h5 className="h6">Strumenti correlati</h5>
            <p><a href="https://developers.italia.it/it/piattaforme">Software development KIT (SDK)</a></p>
            <p>
              <a href="https://schema.gov.it">
                Schema
                <svg class="icon icon-sm align-top">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </a>
            </p>
          </div>
          <div className="col-md-3 border-right px-3">
            <h4 className="h6">3. VALIDA</h4>
            <p>
              Controlla che le tue API siano sintatticamente corrette con l’aiuto del
              validatore
            </p>

            <h5 className="h6">Strumenti correlati</h5>
            <p>
              <a href="https://italia.github.io/api-oas-checker/">
                Validatore Sintattico
                <svg class="icon icon-sm align-top">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </a>
            </p>
          </div>
          <div className="col-md-3 border-right pl-3">
            <h4 className="h6">4. PUBBLICA</h4>
            <p>
              Pubblica i tuoi e-service nell’ambiente di collaudo della PDND,
              fai i test necessari e poi rendili disponibili anche in quello
              di esercizio
            </p>

            <h5 className="h6">Strumenti correlati</h5>
            <p>
              <a href="https://selfcare.pagopa.it/auth/login">
                Piattaforma Digitale Nazionale Dati (PDND)
                <svg class="icon icon-sm align-top">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </a>
            </p>

          </div>
        </div>

        <h3 className="mt-5">Gli strumenti</h3>
        <div className="row">
          <div className="col-md-6 mt-3">
            <p className="pb-2">
              Scopri i principali strumenti che supportano l’interoperabilità di dati tra gli enti
              della Pubblica Amministrazione, creando vantaggi per cittadini e imprese
            </p>

            <h3 className="h5 mt-4">Piattaforma Digitale Nazionale Dati (PDND)</h3>
            <p>
              Garantisce lo scambio di informazioni, verificando l‘autenticazione e i livelli
              di autorizzazione dei soggetti abilitati, affinchè avvenga in modo semplice e sicuro
            </p>
            <button type="button" className="btn btn-outline-secondary mb-4">Scopri di più</button>

            <h3 className="h5 mt-4">Schema</h3>
            <p>
              È il catalogo nazionale della semantica dei dati che permette di ricercare
              e utilizzare risorse già standardizzate e condivise per supportare lo
              sviluppo di API semanticamente e sintatticamente interoperabili
            </p>
            <button type="button" className="btn btn-outline-secondary mb-4">Scopri di più</button>

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
      </div>
    </section>
  </div>

  <section className="background-color-1 pb-5">
    <div className="container mt-5 pt-5">
      <h3 className="mb-5">I vantaggi</h3>
      <div className="row">
        <div className="col-md-6">
          <div class="row align-items-center">
            <div class="col-2">
              <img src="/assets/smile.svg" alt="" className="img-fluid" />
            </div>
            <div class="col-8">
              <h4 className="text-muted">Cittadini e imprese</h4>
              <p>Semplificazione dei servizi offerti a cittadini e imprese</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div class="row align-items-center">
            <div class="col-2">
              <img src="/assets/building.svg" alt="" className="img-fluid" />
            </div>
            <div class="col-8">
              <h4 className="text-muted">Ente</h4>
              <p>
                Facilitazione e sicurezza dello scambio dati tramite la standardizzazione
                del processo per enti erogatori e fruitori
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div class="row align-items-center">
            <div class="col-2">
              <img src="/assets/smile.svg" alt="" className="img-fluid" />
            </div>
            <div class="col-8">
              <h4 className="text-muted">Sviluppatori</h4>
              <p>
                Integrazione degli e-service attraverso gli standard offerti dalla
                Piattaforma Digitale Nazionale Dati (PDND)
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div class="row align-items-center">
            <div class="col-2">
              <img src="/assets/happy-privacy.svg" alt="" className="img-fluid" />
            </div>
            <div class="col-8">
              <h4 className="text-muted">Responsabile per la protezione dei dati (DPO)</h4>
              <p>
                Standardizzazione del processo per tutti coloro che aderiscono e
                riutilizzo di quanto messo a disposizione dagli altri
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="text-white background-color-2 pt-5 pb-5">
    <div className="container mt-5">
      <h3 className="text-white">Hai bisogno di supporto?</h3>
      <p className="mb-5">Utilizza uno dei canali a disposizione per chiedere chiarimenti</p>

      <div class="row row-eq-height">
        <div class="col-sm-6 col-md-6 col-lg-4 my-4 mb-md-4 my-md-0 px-3">
            <a target="_blank" href="https://forum.italia.it/" class="decoration-none" title="Forum">
                <article class="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                    <figure class="d-flex w-100 align-items-center">
                        <img src="https://developers.italia.it/assets/images/tools/Forum_Logo.svg" alt="Logo Forum Italia" height="32" />
                    </figure>
                    <div class="decoration-none">
                      <p>
                        Unisciti alla discussione su <strong>forum.italia.it</strong> per cercare un confronto,
                        esporre i tuoi dubbi e trovare risposte in scambi già aperti da altri
                      </p>
                    </div>
                </article>
            </a>
        </div>

        <div class="col-sm-6 col-md-6 col-lg-4 my-4 mb-md-4 my-md-0 px-3">
            <a target="_blank" href="https://slack.developers.italia.it/" class="decoration-none" title="Slack">
                <article class="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                    <figure class="d-flex w-100 align-items-center">
                        <img src="https://developers.italia.it/assets/images/tools/Slack_Logo.svg" alt="Logo Slack" height="32" />
                    </figure>
                    <div class="decoration-none">
                      <p>
                        Dialoga con gli sviluppatori sul canale <strong>Slack Developers Italia</strong> per chiedere un chiarimento
                      </p>
                    </div>
                </article>
            </a>
        </div>

        <div class="col-sm-6 col-md-6 col-lg-4 my-4 mb-md-4 my-md-0 px-3">
            <a target="_blank" href="https://github.com/italia" class="decoration-none" title="GitHub Italia">
                <article class="d-flex flex-column align-items-start h-100 bg-white p-2 p-4 ">
                    <figure class="d-flex w-100 align-items-center">
                        <img src="https://developers.italia.it/assets/images/tools/GitHub_Logo.svg" alt="Logo GitHub" height="32" />
                    </figure>
                    <div class="decoration-none">
                      <p>
                        Utilizza <strong>github.com/italia</strong> per leggere, esplorare e usare il codice. Apri segnalazioni e proponi modifiche
                      </p>
                    </div>
                </article>
            </a>
        </div>
      </div>
    </div>
  </section>
  </>
)
export default Page;
