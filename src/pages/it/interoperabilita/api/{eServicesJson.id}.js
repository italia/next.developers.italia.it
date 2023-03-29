import React from 'react';
import { graphql } from 'gatsby';

const Page = ({data}) => (
  <>
    {JSON.stringify(data)}
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
