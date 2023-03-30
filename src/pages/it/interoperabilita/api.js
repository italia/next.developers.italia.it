import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

const renderCard = (id, title, text, producer) => (
  <div key={id} className="col-12 col-sm-6 col-md-4">
    <div className="card-wrapper card-space">
      <div className="card card-bg card-big no-after">
        <div className="card-body">
          {/*<div className="head-tags">
            <span className="data">date</span>
           </div>
          */}
          <h5 className="card-title">{title}</h5>
          <span className="card-signature">{producer}</span>
          <p className="card-text">{text}</p>
          <div className="it-card-footer">
            <Link to={`/it/interoperabilita/api/${id}`}>SCOPRI DI PIÙ →</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Page = ({data: { allEServicesJson: { edges } } }) => (
  <>
  <div className="container">
    <div className="mt-5">
      <a href="https://developers.italia.it/">Home</a>
      &nbsp;/&nbsp;
      <Link to="/it/interoperabilita">Interoperabilità</Link> / API
    </div>
    <section className="apilist__content mt-2 pt-2 pt-md-4 pb-2">
      <div className="container">
        <h2>Catalogo API</h2>
        <div className="row mt-5 mb-4 justify-content-between">
          <div className="col-md-6">
            <p className="lead h3">
              Tutte le API presenti su Piattaforma Digitale Nazionale Dati
              per rendere i servizi interoperabili
            </p>
          </div>

          <div className="col-md-5">
            <h3 className="h5">Conosci già qual è l’API che fa al caso tuo?</h3>
            <p>
              Accedi direttamente alla
              <Link to="https://www.pagopa.it/it/prodotti-e-servizi/piattaforma-digitale-nazionale-dati">
                Piattaforma Digitale Nazionale Dati - Interoperabilità
              </Link>
              per integrare i servizi
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section className="background-color-1 pb-5">
    <div className="container mt-5 pt-5">
      <h3 className="mb-5">Sei un ente pubblico o un’impresa?</h3>
      <p>Esplora il catalogo e adatta il tuo servizio</p>

      <h4 className="text-uppercase h6 mt-4">Filtri</h4>

      <div className="row">
        <div className="form-group col-5">
          <input type="search" className="autocomplete" placeholder="Inserisci il nome dell'Ente..."
            id="autocomplete-one"
            name="autocomplete-one"
            data-autocomplete="[]" />
          <span className="autocomplete-icon pr-0 mr-3" aria-hidden="true">
            <svg className="icon icon-sm"><use href="/assets/sprite.svg#it-funnel"></use></svg>
          </span>
          <ul className="autocomplete-list" id="testAutocomplete1">
            <li>
            </li>
          </ul>
        </div>

        <div className="form-group col-4 offset-3">
          <input type="search" placeholder="Cerca API..."
            id="search"
          />
          <span className="autocomplete-icon pr-0 mr-3" aria-hidden="true">
            <svg className="icon icon-sm"><use href="/assets/sprite.svg#it-search"></use></svg>
          </span>
        </div>
      </div>

      <p className="mt-4">Tutti i risultati</p>

      <div className="row">
        {edges.map(e => renderCard(e.node.id, e.node.name, e.node.description, e.node.producerName))}
      </div>
    </div>

    <nav className="pagination-wrapper justify-content-center" aria-label="Navigazione centrata">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabindex="-1" aria-hidden="true">
            <svg className="icon icon-primary"><use href="/bootstrap-italia/1.x/dist/svg/sprite.svg#it-chevron-left"></use></svg>
            <span className="sr-only">Pagina precedente</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-current="page">
            <span className="d-inline-block d-sm-none">Pagina </span>1
          </a>
        </li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">
            <span className="sr-only">Pagina successiva</span>
            <svg className="icon icon-primary"><use href="/bootstrap-italia/1.x/dist/svg/sprite.svg#it-chevron-right"></use></svg>
          </a>
        </li>
      </ul>
    </nav>
  </section>

  <section className="background-color-2 py-4 text-white">
    <div className="container">
      <p>Ultimo aggiornamento:</p>
    </div>
  </section>
  </>
)

export const query = graphql`
  query {
    allEServicesJson {
      edges {
        node {
          id
          description
          name
          producerName
        }
      }
    }
  }
`

export default Page;
