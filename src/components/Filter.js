import React from 'react';

const Filter = ({searchString, hanldeSearchStringChange}) => {
 

    return(
        <div>
             Show only names containing the string:
            <input value={searchString} onChange={hanldeSearchStringChange} />    
        </div>
    )
}

export default Filter;