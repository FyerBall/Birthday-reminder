import React, { useState } from 'react';
import { data } from '../data';
function Birthday() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      <h1>
        {people.length > 0
          ? `${people.length} birthday`
          : 'No one on your list'}
      </h1>
      <ul className='users'>
        {people.map((person) => {
          const { name, age, img } = person;

          return (
            <li key={person.id}>
              <img src={img} alt={name} />
              <div className='person__info'>
                <h4>{name}</h4>
                <p>{age} years old</p>
              </div>
              <button
                type='button'
                className='btn'
                onClick={() => removeItem(person.id)}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
      <button type='button' className='btn' onClick={() => setPeople([])}>
        Remove all
      </button>
    </div>
  );
}

export default Birthday;
