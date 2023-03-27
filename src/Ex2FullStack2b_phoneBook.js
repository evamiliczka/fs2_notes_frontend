import { useState } from 'react'
import React from 'react';
import Filter from './components/Filter'

const PhoneBook = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', show: true },
    { name: 'Ada Lovelace', phone: '39-44-5323523' , show: true },
    { name: 'Dan Abramov', phone: '12-43-234345', show: true},
    { name: 'Mary Poppendieck', phone: '39-23-6423122', show: true}
  ]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [searchString, setSearchString] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name:newName.replace(/\s+/g," ").trim(), //remove unnnecessary spaces
      phone:newPhone,
      show: true
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

  const hanldeSearchStringChange = (event) => {
    setSearchString(event.target.value);
  }

  const filterPersonsAccordingToString = (containsString) => {
    return (persons.map((person) => { 
      const newShow = person.name.toLowerCase().includes(containsString.toLowerCase());
      const newPerson = {name  : person.name,
                         phone : person.phone,
                         show  : newShow};
      return newPerson;            
     }))
  }

  const onSearchSubmit = (event) => {
    event.preventDefault();
    setPersons(filterPersonsAccordingToString(searchString));
  }

  const onSearchReset = () =>{
    console.log('Search string: ', searchString);
    const newString = '';
    setSearchString(newString);
    console.log('Search string: ', searchString);
   setPersons(filterPersonsAccordingToString(''));
    console.log(persons);
  }

//<!-- <Filter persons={persons} setPersons={setPersons} searchString={searchString} setSearchString={setSearchString}/>

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter searchString={searchString} hanldeSearchStringChange={hanldeSearchStringChange} onSearchSubmit={onSearchSubmit} onSearchReset={onSearchReset}/>

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
      <h2>Numbers</h2>
        <ol>
          {persons.filter(person => person.show).map(person => <li key={person.name}>Name: {person.name}, Phone number: {person.phone}</li>)}
        </ol>
    </div>
  )
}

export default PhoneBook

 