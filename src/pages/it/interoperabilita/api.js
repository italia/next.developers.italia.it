import React from 'react';
import { Link } from 'gatsby';

const Page = () => (
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
              Vai direttamente a PDND per integrare i servizi
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section className="background-color-1 pb-5">
    <div className="container mt-5 pt-5">
      <h3 className="mb-5">Sei un ente pubblico o un impresa?</h3>
      <p>Esplora il catalogo e adatta il tuo servizio</p>

    </div>
  </section>

  <section className="background-color-2 py-4 text-white">
    <div className="container">
      <p>Ultimo aggiornamento:</p>
    </div>
  </section>
  </>
)
export default Page;
