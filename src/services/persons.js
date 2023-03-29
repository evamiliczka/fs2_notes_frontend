import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons';

const getAll = () =>
    axios.get(baseUrl).then(response => response.data);

const create = newPerson =>
    axios.post(baseUrl, newPerson).then(response => response.data);

const deleteFromDB = id =>
    axios.delete(`http://localhost:3001/persons/${id}`).then(response => console.log(response))

const updatePerson = (id, newPerson) => {
    console.log(`I am going to put a new person ${newPerson} with id=${id} to the url ${baseUrl}/${id} `);
    const  answer = axios.put(`${baseUrl}/${id}`, newPerson).then(response => {console.log(`Recieved respons : ${response}`); return(response.data)});
    console.log(answer);
    return answer
}

export default { getAll, create, deleteFromDB, updatePerson }