const RenderSingleCountry = ({country}) => {
    console.log('Hi this is render single country ', country);
    return(
        <div>  
            <h2> {country.a.name.common} </h2>

            <div>Capital: {country.a.capital[0]}</div>
            <div>Area:  {country.a.area}</div>
            <div>
                Languages:
                <ul>
                    {Object.keys(country.a.languages).map(value =>
                    <li key={value} > {country.a.languages[value]}</li>)}
                </ul>
            </div>

            <img src={country.a.flags.png} height = "300"></img>    
        </div>
        )
}

export default RenderSingleCountry;