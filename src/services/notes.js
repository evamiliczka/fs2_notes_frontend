import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

const getAll = () =>{ 
    //axios.get(baseUrl).then(response => response.data);
    const request = axios.get(baseUrl);
    const nonExistingNote = {
        id : 1000,
        content: 'This note is not saved to server',
        important: true
    }
    return request.then(response => response.data.concat(nonExistingNote))
    }

const create = newObject => 
    axios.post(baseUrl, newObject).then(response => response.data);

const update = (id, newObject) => 
    axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)

export default { getAll,  create, update }