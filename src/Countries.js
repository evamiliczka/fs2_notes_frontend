import {React, useState, useEffect } from "react";
import axios from 'axios';
import RenderCountries from "./components/Countries_Render";




const Countries = () => {
    const [searchString, setSearchString] = useState('');
    const [countries, setCountries] = useState([]); //{countries:mena, countriesToShow:true/false}
   
    useEffect(()=> 
    {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(result => setCountries(result.data.map(country => country))
            )
    },[])
                    

    const handleSearchStringChange = (event) =>
         setSearchString(event.target.value);

    return(
    <div>
        <h1> Countries </h1>
        Find countries:
        <input value={searchString} onChange={handleSearchStringChange} />
        <RenderCountries countries={countries} searchString = {searchString}/>    
    </div>
    
    )
}
   

export default Countries;