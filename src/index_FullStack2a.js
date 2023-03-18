import React from 'react'
import ReactDOM from 'react-dom/client'
import FullStack2a from './FullStack2a'




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

ReactDOM.createRoot(document.getElementById('root')).render(
  <FullStack2a notes={notes} />
)


/*ReactDOM.createRoot(document.getElementById('root')).render(
  <FullStack2a />)*/