import { useEffect, useState } from 'react'
import React from 'react';
import Filter from './components/Filter'
import Submit from './components/Submit'
import ListPersons from './components/ListPersons'

import personService from './services/persons'
import './phonebook.css'
//import axios from 'axios'



const Message = ({messageObject}) => {
  if (messageObject === null) return null;
  //else
  if (messageObject.okText !==null) 
  return(
    <div className='message message--ok'>
      {messageObject.okText}
    </div>
  )
  else 
    if (messageObject.errorText !==null) 
    return(
      <div className='message message--error'>
        {messageObject.errorText}
      </div>
    )
   
}


const PhoneBookDB = () => {
  const [persons, setPersons] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [message, setMessage] = useState(null)//{okText:'   ', errorText: '   ''}); //okMessage=' '  


//set the desired Message for 5 seconds, then sets it to null to disappear
const showMessage = (messageObject) => {
  setMessage(messageObject);
  setTimeout(() => setMessage(null), 5000);
}

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
        showMessage({okText:null, errorText : `The person ${personToDelete.name} does not exist in the phoneBook `})
      })
    //v kazdom pripade zo zobrazeneho zonamu vymazeme dotycnu osobu
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
     <Message messageObject={message}/>
  

      <h2>Phonebook</h2>
        <Filter searchString={searchString} hanldeSearchStringChange={hanldeSearchStringChange} />
        <Submit persons={persons} setPersons={setPersons}  message={message} setMessage={setMessage} showMessage={showMessage}  />
        <ListPersons listOfPersons={filterPersonsAccordingToString()} deletePerson = {deletePerson} />
    </div>
  )
}

export default PhoneBookDB

 