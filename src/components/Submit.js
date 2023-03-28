import React from 'react';
import {useState } from 'react'


const Submit = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  
  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name:newName.replace(/\s+/g," ").trim(), //remove unnnecessary spaces
      phone:newPhone
        }

    //Check if the new name IS NOT already contained in the lis
      // Ak najde dajaku zhodu, tak nedovoli pridat
    if (persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase())){
      alert(`The name ${personObject.name} is already contained in the phone book`);
      return;
    }
      //the new string is not contained in the phonebook, so we can add it
    setPersons(persons.concat(personObject));

    setNewName('');
    setNewPhone('');
  } 

  
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

    return(
      <div>
    <h2>Add new</h2>
    <form onSubmit={addPerson}>
        <p>
          Name: <input value={newName} onChange={handleNameChange}/>
        </p>
        <p>
          Phone number: <input value={newPhone} onChange={handlePhoneChange}/>
        </p>
        <div>
          <button type="submit">Add person</button> ;
        </div>
    </form>
    </div>
    )
}

export default Submit;