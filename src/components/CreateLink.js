import React, { useState } from 'react';
import { ApolloClient, gql, useQuery, useMutation, InMemoryCache, HttpLink, ApolloProvider, } from '@apollo/client';


const CREATE_LINK_MUTATION = gql`
mutation InsertLink ($object: Link_insert_input!) {
    insert_Link_one(object: $object) {
      id
    }
  }
`;

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: '',
    url: ''
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      object: {
        id: formState.id, // probably want an id here
        description: formState.description,
        url: formState.url
      }
    }
  });       

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
        <input
            className="mb2"
            value={formState.id}
            onChange={(e) =>
              setFormState({
                ...formState,
                id: e.target.value
              })
            }
            type="text"
            placeholder="A id for the link"
          />
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;