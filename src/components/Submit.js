import React from 'react';
import {useState } from 'react'
import personService from '../services/personServices'

const Submit = ({persons, setPersons}) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  
  
  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

const addPerson = (event) => {
  event.preventDefault();
  const personObject = {
   // id: persons.length +1,
    name : newName.replace(/\s+/g," ").trim(), //remove unnnecessary spaces
    phone: newPhone
  }

  //Check if the new name IS NOT already contained in the lis
  // Ak najde dajaku zhodu, tak nedovoli pridat
  const existingPerson = 
      persons.find(person => person.name.toLowerCase() === personObject.name.toLowerCase());
  if (existingPerson){
    alert(`The person ${personObject.name} already exists in the phonebook`);
  }
  else  {
    personService
      .create(personObject)
      .then(returnedPerson => {
     //   console.log('Person added:', response.data);
        setPersons(persons.concat(returnedPerson));
        setNewName('')
        setNewPhone('')
      })

  }
}

  return(
   <div>
    <h2>Add new</h2>
    <form onSubmit={addPerson}>
        <div>Name: <input value={newName} onChange = {handleNameChange} /></div>
        <div>Phone number: <input value={newPhone} onChange = {handlePhoneChange} /></div>
        <button type="submit">Save person</button>
      </form> 
      
    </div>
    )
}

export default Submit;