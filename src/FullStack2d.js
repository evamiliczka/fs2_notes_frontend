import { useState, useEffect } from 'react';
import React from 'react';
import Note from './components/Note';
import noteService from './services/notes.js'

const FullStack2d = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('a new note');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => setNotes(initialNotes));
  }, [])


  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
        content : newNote, /*the value of the input field*/
        important: Math.random() < 0.5,
        id: notes.length + 1
    }

    noteService
      .create(noteObject)
      .then(newObject => 
          {setNotes(notes.concat(newObject));
          setNewNote('');});   
  }

  const resetNewValue = (event) => {
    event.preventDefault();
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target)
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id);
    const changedNote = {...note, important: !note.important};

    noteService
      .update(id, changedNote)
      .then(returndedNote => {
        setNotes(notes.map(n => n.id !== id ? n : returndedNote))
      })
      .catch(error => {
        alert(`the note ${note.content} was deleted from the server`);
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  //stores a list of all the notes to be displayed
  //note.filter returns array of all elements that meet the criterion in the callback function
  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        Now showing: {showAll? 'all':'only important'} <br></br>
        <button onClick = {() => setShowAll(!showAll)}>
          Show  {showAll?  'only important':'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote} onReset={resetNewValue}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  )
}

export default FullStack2d 