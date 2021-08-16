import gql from 'graphql-tag';

export const QUERY_PAGE = gql`
  query Page {
    pages(where: {name: "about"}) {
      name
      content {
        html
      }
    }
  }
`;
