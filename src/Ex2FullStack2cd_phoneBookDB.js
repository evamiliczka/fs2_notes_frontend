import { useEffect, useState } from 'react'
import React from 'react';
import Filter from './components/Filter'
import Submit from './components/Submit'
import ListPersons from './components/ListPersons'
import personService from './services/persons'

//import axios from 'axios'

const PhoneBookDB = () => {
  const [persons, setPersons] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(()=> {
    personService.getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
    })
},[])


const deletePerson = (id) => {
  const personToDelete = persons.find(p => p.id === id);
  if (window.confirm( `Do you really want to delete ${personToDelete.name} from phoneBook?`) === true)
    {personService.deleteFromDB(id)
      .catch(error => {
        alert(`The person ${personToDelete.name} does not exist in the phoneBook `)
      })
    //v kazdom pripade zo zobrzeneho zonamu vymazeme dotycnu osobu
    setPersons(persons.filter(p => p.id !== id))
  }
}

  const hanldeSearchStringChange = (event) => {
    setSearchString(event.target.value);
  }

  const filterPersonsAccordingToString = () => {
    return (persons.filter((person) =>  
      person.name.toLowerCase().includes(searchString.toLowerCase())          
     ))
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter searchString={searchString} hanldeSearchStringChange={hanldeSearchStringChange} />
        <Submit persons={persons} setPersons={setPersons} />
        <ListPersons listOfPersons={filterPersonsAccordingToString()} deletePerson = {deletePerson} />
    </div>
  )
}

export default PhoneBookDB

 