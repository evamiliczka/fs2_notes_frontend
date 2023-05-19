import { React,useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'
import './notes.css'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)  

useEffect(() => {
  noteService.getAll()
    .then(allNotes => {
        setNotes(allNotes)
  })
}, [])
  
//console.log('render', notes.length, 'notes')

const addNote = (event) => {
  event.preventDefault()
  const noteObject = {
    content: newNote,
    important: Math.random() > 0.5,
  }

  noteService
    .create(noteObject)
    .then(returnedNote => {
      setNotes(notes.concat(returnedNote));
      setNewNote('')
    })   
}

const toggleImportanceOf = (id) => {
  const note = notes.find(n => n.id === id);
  const changedNote = {...note, important: !note.important}; //!! shallow copy
  noteService
    .update(id, changedNote)
    .then(returnedNote => {
      setNotes(notes.map(n => n.id !== id ? n : returnedNote )) //tu sem zosynchronizovali nacitane data
    })
    //catch is called if any of the promises in the chain throws an error
    .catch(error => {
      setErrorMessage(`Note '${note.content}' was already removed from server`);
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
      setNotes(notes.filter(n => n.id !== id)); //zobrazim len tie poznamky, ktore maju ine id ako ta bludna
    })

}

const handleNoteChange = (event) => {
  setNewNote(event.target.value)
}

const notesToShow = showAll
  ? notes
  : notes.filter(note => note.important)

return (
  <div>
    <h1>Notes</h1>
    <Notification message={errorMessage} />

    <div>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all' }
      </button>
    </div> 
    <ul>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
    </ul>
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
   
  </div>
)
}

export default App