import React from 'react';
//import PropTypes from 'prop-types'



const Note = ({note, toggleImportance}) => {
  //Change the importance of the note
  const label = note.important ? 'make not important':'make important';
  

  
  return(
      <li className='note'>
        {note.content}, {note.important? 'important' : 'not important'} &nbsp; 
        <button onClick={toggleImportance}> {label}</button>
      </li>
    )

  }



/*Note.PropTypes = {
  note : PropTypes.object,
  toggleImportance : PropTypes.func.isRequired
}*/

  export default Note; 