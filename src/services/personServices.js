import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons';

const getAll = () =>{
    const request = axios.get(baseUrl)
    const nonExisting = {
        id: 10000,
        name: 'This person is not on the server',
        phone: '4444',
      }
      return request.then(response => response.data.concat(nonExisting))
}
   // axios.get(baseUrl).then(response => response.data);

const create = newPerson =>
    axios.post(baseUrl, newPerson).then(response => response.data);

const deleteFromDB = id => 
    axios.delete(`http://localhost:3001/persons/${id}`)

const updatePerson = (id, newPerson) => {
    console.log(`I am going to put a new person ${newPerson} with id=${id} to the url ${baseUrl}/${id} `);
    const  answer = axios.put(`${baseUrl}/${id}`, newPerson).then(response => {console.log(`Recieved respons : ${response}`); return(response.data)});
    console.log(answer);
    return answer
}

export default { getAll, create, deleteFromDB, updatePerson }