import React from 'react';
import { Link } from 'gatsby';

import "./interoperabilita.scss";

const Page = () => (
  <>
  <div className="container">
    <section className="apilist__content mt-2 mt-md-5 pt-2 pt-md-4 pb-2">
      <div className="container">
        <h2>Cos’è l'ecosistema Interoperabilità</h2>
        <div className="row mt-5 mb-4">
          <div className="col-md-6">
            <p class="lead h3">
              Abilita l’accesso semplice e sicuro alle informazioni di tutte le
              Pubbliche Amministrazioni.
            </p>
          </div>
        </div>

        <h3 className="mt-5">Come funziona</h3>
        <div className="row mt-5">
          <div className="col-md-3 border-right px-3">
            <div className="content-section">
              <h4 className="h6">1. RICERCA</h4>
              <p>
                Dopo aver aderito alla Piattaforma Digitale Nazionale Dati (PDND),
                scopri le API disponibili e quali veicolano dati di interesse nazionale
                e valuta come integrarle nei servizi o come crearne di innovativi
              </p>
            </div>

            <h5 className="h6">Strumenti correlati</h5>
            <p>
              <Link
                to="https://www.interop.pagopa.it"
              >
                Piattaforma Digitale Nazionale Dati (PDND)
                <svg className="icon icon-sm align-top external-link-icon">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </Link>
            </p>
            <p>
              <a href="https://www.agid.gov.it/it/dati/basi-dati-interesse-nazionale">
                Basi Dati di Interesse Nazionale <br/ > (BDIN)
                <svg className="icon icon-sm align-top external-link-icon">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </a>
            </p>
          </div>

          <div className="col-md-3 border-right px-3">
            <div className="content-section">
              <h4 className="h6">2. SVILUPPA</h4>
              <p>
                Crea le API usando gli strumenti e i canali di supporto disponibili.
                Consulta e riutilizza ontologie, vocabolari controllati e schemi dati
              </p>
            </div>

            <h5 className="h6">Strumenti correlati</h5>
            <p>
              <a href="https://teamdigitale.github.io/dati-semantic-doc-introduzione-semantica/">
                Introduzione alla semantica dei dati
                <svg className="icon icon-sm align-top external-link-icon">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </a>
            </p>
            <p><a href="https://developers.italia.it/it/pdnd">Risorse</a></p>
            <p>
              <a href="https://schema.gov.it">
                Schema
                <svg className="icon icon-sm align-top external-link-icon">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </a>
            </p>

          </div>
          <div className="col-md-3 border-right px-3">
            <div className="content-section">
              <h4 className="h6">3. VALIDA</h4>
              <p>
                Controlla che le tue API siano corrette dal punto di vista sintattico
                con l’aiuto del validatore durante le fasi di sviluppo
              </p>
            </div>

            <h5 className="h6">Strumenti correlati</h5>
            <p>
              <a href="https://italia.github.io/api-oas-checker/">
                Validatore Sintattico
                <svg className="icon icon-sm align-top external-link-icon">
                  <use href="/assets/sprite.svg#it-external-link"></use>
                </svg>
              </a>
            </p>
          </div>
          <div className="col-md-3 border-right px-3">
            <div className="content-section">
              <h4 className="h6">4. PUBBLICA</h4>
              <p>
                Pubblica gli e-service, composti da una o più API, in ambiente di collaudo della
                PDND, fai i test e rendili disponibili sul catalogo anche in esercizio
              </p>
            </div>

            <h5 className="h6">Strumenti correlati</h5>
            <p>
              <a href="https://selfcare.pagopa.it/auth/login">
                Catalogo API
                <svg className="icon icon-sm align-top external-link-icon">
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
              Garantisce lo scambio di informazioni tramite API, verificando l‘autenticazione
              e i livelli di autorizzazione dei soggetti abilitati, affinché avvenga in modo
              semplice e sicuro.
            </p>
            <Link
              className="btn btn-white btn-outline-primary mb-4"
              to="https://developers.italia.it/it/pdnd"
            >
              Scopri di più
            </Link>

            <h3 className="h5 mt-4">Catalogo API</h3>
            <p>
              Rende disponibili le API pubblicate su PDND agli Enti aderenti, permettendo
              loro di valutare come integrarle efficacemente con i propri servizi, facendoli
              diventare ancora più funzionali per l’utente.
            </p>
            <Link
              className="btn btn-white btn-outline-primary mb-4"
              to="https://selfcare.pagopa.it/auth/login"
            >
              Scopri di più
            </Link>

            <h3 className="h5 mt-4">Schema</h3>
            <p>
              Altrimenti conosciuto come National Data Catalog (NDC) è il catalogo nazionale della
              semantica dei dati che permette di ricercare e utilizzare risorse già standardizzate e condivise
              per supportare lo sviluppo di API semanticamente e sintatticamente interoperabili.
            </p>
            <Link
              className="btn btn-white btn-outline-primary mb-4"
              to="https://schema.gov.it"
            >
              Scopri di più
            </Link>

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
          <div class="row">
            <div class="col-2">
              <img src="/assets/smile.svg" alt="" className="img-fluid" />
            </div>
            <div class="col-8">
              <h4>Persone fisiche e imprese</h4>
              <p>Semplificazione dei servizi offerti a persone fisiche e imprese</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div class="row">
            <div class="col-2">
              <img src="/assets/building.svg" alt="" className="img-fluid" />
            </div>
            <div class="col-8">
              <h4>Ente</h4>
              <p>
                Facilitazione e sicurezza dello scambio dati tramite la standardizzazione
                del processo per enti
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <div class="row">
            <div class="col-2">
              <img src="/assets/developer.svg" alt="" className="img-fluid" />
            </div>
            <div class="col-8">
              <h4>Developer</h4>
              <p>
                Integrazione degli e-service attraverso gli standard offerti dalla
                Piattaforma Digitale Nazionale Dati (PDND)
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div class="row">
            <div class="col-2">
              <img src="/assets/happy-privacy.svg" alt="" className="img-fluid" />
            </div>
            <div class="col-8">
              <h4>Responsabile per la protezione dei dati (RPD)</h4>
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

  <section className="container pb-5 mb-2">
    <div className="row">
      <div className="col-12 col-md-6 pr-5 mt-5 pt-3">
        <h3>Linee guida modello interoperabilità (ModI)</h3>
        <p>
          Individuano le tecnologie e gli standard che le Pubbliche Amministrazioni
          devono considerare durante la realizzazione dei propri sistemi
          informatici, al fine di permettere l’interoperabilità.
        </p>
        <Link to="https://www.agid.gov.it/it/infrastrutture/sistema-pubblico-connettivita/il-nuovo-modello-interoperabilita">
          Consulta le linee guida
          <svg className="icon icon-sm align-top external-link-icon">
            <use href="/assets/sprite.svg#it-external-link"></use>
          </svg>
        </Link>
      </div>

      <div className="col-12 col-md-6 mt-5 pt-3">
        <h3>Esempi di API</h3>
        <p>
          Una selezione di API REST italiane a disposizione di chi sviluppa software.
        </p>
        <Link to="https://developers.italia.it/it/api">
          Consulta gli esempi di API
          <svg className="icon icon-sm align-top external-link-icon">
            <use href="/assets/sprite.svg#it-external-link"></use>
          </svg>
        </Link>
      </div>
    </div>
  </section>

  <section className="text-white background-color-2 pt-5 pb-5">
    <div className="container mt-5">
      <h3 className="text-white">Hai bisogno di supporto?</h3>
      <p className="mb-5">Utilizza uno dei canali a disposizione per chiedere chiarimenti</p>

      <div class="row row-eq-height">
        <div class="col-sm-6 col-md-6 col-lg-4 my-4 mb-md-4 my-md-0 px-3">
            <a href="https://forum.italia.it/" class="decoration-none" title="Forum">
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
            <a href="https://slack.developers.italia.it/" class="decoration-none" title="Slack">
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
            <a href="https://github.com/italia" class="decoration-none" title="GitHub Italia">
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
