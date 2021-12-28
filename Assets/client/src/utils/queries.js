import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        description: String
        bookId: String
        image: String
        link: String
        title: String
      }
    }
  }
`;