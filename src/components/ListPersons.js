import React from 'react';

const ListPersons = ({listOfPersons}) => {
 

    return(
        <div>
          <h2> PhoneBook items: </h2>
        <ol>
          {listOfPersons.map(person => <li key={person.name}>Name: {person.name}, Phone number: {person.phone}</li>)}
        </ol>
        </div>
    )
}

export default ListPersons;