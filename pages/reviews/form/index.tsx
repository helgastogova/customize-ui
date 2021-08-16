import React from 'react';
import {useMutation, gql} from '@apollo/client';

import Button from '@ui/button';

const ADD_REVIEW = gql`
  mutation createReview(
    $createdAt: DateTime!
    $updatedAt: DateTime!
    $name: String
    $text: String
  ) {
    createReview(
      data: {
        createdAt: $createdAt
        updatedAt: $updatedAt
        name: $name
        text: $text
      }
    ) {
      id
      name
      text
    }
  }
`;

const AddReviewForm: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [text, setText] = React.useState<string>('');

  const [addReview, {error, data}] = useMutation(ADD_REVIEW, {
    variables: {createdAt: new Date(), updatedAt: new Date(), name, text},
  });
  if (data && !error)
    return (
      <form>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="text"
          placeholder="text"
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={() => name && text && addReview()}>Add</Button>
      </form>
    );
};

export default AddReviewForm;
