import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

const Page = ({ data: { eServicesJson: api } }) => (
  <>
    <div className="container">
      <div className="mt-5">
        <a href="https://developers.italia.it/">Home</a>
        &nbsp;/&nbsp;
        <Link to="/it/interoperabilita">Interoperabilità</Link>
        &nbsp;/&nbsp;
        <Link to="/it/interoperabilita/api">API</Link> / {api.name}
      </div>

      <section className="apilist__content mt-2 mt-md-5 pt-2 pt-md-4 pb-2">
        <div className="container">
          <h2>{api.name}</h2>
          <div className="row mt-5 mb-4">
            <div className="col-md-6">
              <p class="lead h3">
                {api.producerName}
              </p>
            </div>
          </div>

          <h3 className="mt-5">Descrizione</h3>
          <p>
            {api.description}
          </p>

          <h4 className="mt-5">Modalità di accesso</h4>
          <p>
            Modalità
          </p>

          <h4 className="mt-5">Licenza dati</h4>
          <p>
            Licenza
          </p>

          <h4 className="mt-5">Tecnologia</h4>
          <p>
            REST/SOAP
          </p>

          <h4 className="mt-5">Versione</h4>
          <p>
            Versione
          </p>

          <h4 className="mt-5">Stato</h4>
          <p>
            STATO
          </p>
        </div>
      </section>
    </div>
  </>
)

export const query = graphql`
  query EService($id: String!) {
    eServicesJson(id: {eq: $id}) {
      id
      description
      name
      producerName
    }
  }
`

export default Page;
