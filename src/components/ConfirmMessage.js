import React from "react";
import '../phonebook.css'

const ConfirmMessage = ({message}) => 
{
    if (message === null) return null;
    return(
    <div className = 'okMessage'>
            {message}    
    </div>
    )
}


export default ConfirmMessage;