import Person from './Person'
import personServices from '../services/personServices';
import Notification from './Notification'
import { React, useState } from 'react';



const Persons = ({persons, setPersons}) => {
    const [errorMessage, setErrorMessage] = useState(null)  



const deletePerson = (id) => {
    personServices.deleteFromDB(id)
        .then(response => {console.log(`Response is `, response);})
        .catch(error => {
            setErrorMessage(`the person ${id} has already been deleted from DB`)});
            setTimeout(() => {setErrorMessage(null)}, 5000)

    //vymazem tu osobu z persons, ci uz bola alebo nebola v db
    setPersons(persons.filter(p => p.id !== id))
}  



    return(
        <div>
            <Notification message = {errorMessage} />
          <h2> PhoneBook items: </h2>
        <ul>
        {persons.map(person => 
            <Person key={person.id}  person={person} deletePerson = {() => deletePerson(person.id)}/>
            )}
        </ul>
        </div>
    )
}

export default Persons;

/*
   {persons.persons.map(person => 
            <Person key={person.id}  person={person} />
            )}
            */