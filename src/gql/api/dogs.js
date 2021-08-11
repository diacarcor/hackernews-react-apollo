import {
    GET_DOGS, GET_DOG_PHOTO
  } from '../queries/dog_queries';

import { useQuery } from '@apollo/client';

export function Dogs({ onDogSelected }) {
    const { loading, error, data } = useQuery(GET_DOGS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <select name="dog" onChange={onDogSelected}>
        {data.dogs.map(dog => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    );
  }

  export function DogPhoto({ breed }) {
    const { loading, error, data } = useQuery(GET_DOG_PHOTO, {
      variables: { breed },
    });
  
    if (loading) return null;
    if (error) return `Error! ${error}`;
  
    return (
      <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
    );
  }