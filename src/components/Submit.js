import React from 'react';
import {useState } from 'react'
import personService from  '../services/persons'
//import axios from 'axios'

const Submit = ({persons, setPersons, message, setMessage, showMessage}) => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  

  
  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name:newName.replace(/\s+/g," ").trim(), //remove unnnecessary spaces
      phone:newPhone
        }
    
    
    //Check if the new name IS NOT already contained in the lis
      // Ak najde dajaku zhodu, tak nedovoli pridat
    const existingPerson = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase());
    if (existingPerson){
      const confirm = window.confirm(`The name ${newPerson.name} with id ${existingPerson.id} is already contained in the phone book,
      do you want to replace the old number with the new one  ?`);
      console.log(confirm);
     if (confirm === true){
      const id = existingPerson.id;

        personService.updatePerson(id, newPerson)
        .then(returnedPerson => 
              setPersons(persons.map(p => p.id !== id ? p : returnedPerson)))
            .catch(error => {
              showMessage({okText:null, errorText : `The person ${newPerson.name} does not exist in the phoneBook`});
              setPersons(persons.filter(p => p.id !== id))
              return;
            })
      showMessage({okText : `Person ${newPerson.name} updated`, errorText:null})

    }
  }
  else{
    //the new string is not contained in the phonebook, so we can add it 
     personService.create(newPerson).then(newP => setPersons(persons.concat(newP)))
     showMessage({okText: `Person ${newPerson.name} added`, errorText:null})
    }
    //vynulovat vstupne policka
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