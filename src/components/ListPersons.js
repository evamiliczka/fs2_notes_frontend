import React from 'react';
//import personService from  '../services/persons'
//import axios from 'axios';


const ListPersons = ({listOfPersons, deletePerson}) => {

  


    return(
        <div>
          <h2> PhoneBook items: </h2>
        <ul>
          {listOfPersons.map(person => 
            <li key={person.id}>
              Name: {person.name}, Phone number: {person.phone} 
              <button onClick={() => deletePerson(person.id)}> delete </button>
            </li>)}
        </ul>
        </div>
    )
}

export default ListPersons;