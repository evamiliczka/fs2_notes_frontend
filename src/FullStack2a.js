import Note from './components/Note'

const FullStack2a = ({notes}) =>{

    return  (
        <div>
          <h1>Notes</h1>
          <ul>
          {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
          </ul>
        </div>
      )
}


export default FullStack2a;