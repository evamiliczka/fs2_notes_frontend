import React from 'react';

const Filter = ({searchString, hanldeSearchStringChange, onSearchSubmit, onSearchReset}) => {
 

    return(
        <div>
            <form onSubmit={onSearchSubmit} onReset={onSearchReset} >
                 Show only names containing the string:
                    <input value={searchString} onChange={hanldeSearchStringChange} />
                    <button type="submit">Filter </button> &nbsp;
                    <button type="reset">Reset </button>

            </form>
        </div>
    )
}

export default Filter;