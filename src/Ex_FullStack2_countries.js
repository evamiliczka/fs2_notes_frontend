import React, { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";


const RenderFiltered = ({countries, searchString}) => {
    const [singleCountry, setSingleCountry] = useState({});

    const filteredCountries = 
             countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()));
             console.log('filtered countries ',filteredCountries);
   if (filteredCountries.length > 10)
      {  
         return(<div>
        More than 10 countries, please specify more letters</div>)
    }
    if (filteredCountries.length === 1)
    {          
      const oneCountry = {a:filteredCountries[0]}
      console.log('variable ', oneCountry.a);
      console.log(Object.keys(oneCountry.a.languages));
      return(<div>  
      <h1> {oneCountry.a.name.common} </h1>

      <div>Capital: {oneCountry.a.capital[0]}</div>
      <div>Area:  {oneCountry.a.area}</div>
      <div>
          Languages:
            <ul>
                {Object.keys(oneCountry.a.languages).map(value =>
                <li key={value} > {oneCountry.a.languages[value]}</li>)}
            </ul>
      </div>

      <img src={oneCountry.a.flags.png} width="300" height = "300"></img>    
      </div>)
    }
    if (filteredCountries !== null && filteredCountries.length > 1 && filteredCountries.length < 10)
    return(
        <div>
            <ul>
            {filteredCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)}
        </ul>
    </div>)
}


const Countries = () => {
    const [searchString, setSearchString] = useState('');
    const [countries, setCountries] = useState([]); //{countries:mena, countriesToShow:true/false}
   
    useEffect(()=> {
        axios.get('https://restcountries.com/v3.1/all')
        .then(result => 
            setCountries(result.data.map(country => country))
            )
        },[])
                    

    const handleSearchStringChange = (event) =>
         setSearchString(event.target.value);

    return(
    <div>
        Find countries:
        <input value={searchString} onChange={handleSearchStringChange} />
        <RenderFiltered countries={countries} searchString = {'switz'}/>
    
    </div>
    
    )
}
   

export default Countries;