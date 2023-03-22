import ReactDOM from 'react-dom/client'
import FullStack2b from './FullStack2b'




const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

/*ReactDOM.createRoot(document.getElementById('root')).render(
  <FullStack2a />)*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <FullStack2b notes={notes} />
)


/*ReactDOM.createRoot(document.getElementById('root')).render(
  <FullStack2a />)*/