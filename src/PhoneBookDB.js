import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Submit from './components/Submit'
import personService from './services/personServices'

import React from 'react';


import './phonebook.css'

const PhoneBookDB = () => {
  const [persons, setPersons] = useState([]);

  
  useEffect(()=> {
    //console.log('effect');
    personService
      .getAll()
      .then(allPersons => {
      //  console.log('promise fullfilled');
        setPersons(allPersons);
      })
    }, [])

   


  return (
    <div>     
      <h1>Phonebook</h1>
      <Persons persons = {persons} setPersons = {setPersons}/>
      <Submit persons = {persons} setPersons = {setPersons} />
    </div>
  )
}

export default PhoneBookDB

 