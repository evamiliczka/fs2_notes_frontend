import {React, useState} from "react";
import RenderSingleCountry from "./Countries_RenderSingle";


const RenderCountries = ({countries, searchString}) => {

    
    


    let filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchString.toLowerCase()));

    console.log('Calling ifs');
    if (filteredCountries.length > 10)
    {  
        console.log('More than 10 countries');
         return(<div> More than 10 countries, please specify more letters</div>)
    }
    else
        if (filteredCountries.length === 1)
        {          
        const oneCountry = {a:filteredCountries[0]}
        //  console.log('variable ', oneCountry.a);
        // console.log(Object.keys(oneCountry.a.languages));
        return(     
        <div>
            <RenderSingleCountry country = {oneCountry} />
        </div>
        )
        }
        else
        if (filteredCountries !== null ) //&& filteredCountries.length > 1 && filteredCountries.length < 10
        {
            return(
                <div>
                    Filtered countries:
                    <ul>
                        {filteredCountries.map(
                            country => 
                            <li key={country.name.common}>{country.name.common}  &nbsp;
                                 
                            </li>)
                        }
                    </ul>
                </div>
            )
        }
} 

export default RenderCountries;