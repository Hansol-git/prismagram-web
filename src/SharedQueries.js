import { gql } from "apollo-boost";

export const MEQUERY = gql`
  {
    me {
      username
    }
  }
`;
