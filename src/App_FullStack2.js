import React from "react";
import Notes from './FullStack2de_Notes'
import Phonebook from './Ex2FullStack2cd_phoneBookDB'

const App = () => {
const heading = {
    color: 'DodgerBlue',
    fontSize: '2rem'
}

    return(
        <div>
            <h1> Helsinky Full Stack Course Part 2</h1>
            <p  style={{fontStyle: "italic"}}> "Communicating with the server" </p>
            <h3 style={heading}> 1. Exercises <a href="https://fullstackopen.com/en/part2"> 2.1 to 2.17  </a> </h3>
            <Phonebook />
            <br></br>
            <br></br>
            <h3 style={heading}> 2. Course <a href="https://fullstackopen.com/en/part2">content </a> </h3>
            <Notes />
        </div>
    )
}

export default App;