import { useEffect, useState } from 'react'
import React from 'react';
import Filter from './components/Filter'
import Submit from './components/Submit'
import ListPersons from './components/ListPersons'

import axios from 'axios'

const PhoneBookDB = () => {
  const [persons, setPersons] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(()=> {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('Promise fullfilled')
      console.log(response.data)
      setPersons(response.data)
    })
},[])


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
        <ListPersons listOfPersons={filterPersonsAccordingToString()} />
    </div>
  )
}

export default PhoneBookDB

 