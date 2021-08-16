import gql from 'graphql-tag'

export const QUERY_POST_REVIEW = gql`
  query ReviewsList {
    reviews {
      text
      name
    }
  }
`
