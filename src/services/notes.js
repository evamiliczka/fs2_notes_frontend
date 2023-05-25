import axios from 'axios';

const baseUrl =  'http://localhost:3001/api/notes';

const getAll = async () =>{ 
   /*const request =  axios.get(baseUrl);
    const response = await request;
    return response.data;*/
    const request = axios.get(baseUrl)
    const nonExisting = {
      id: 10000,
      content: 'This note is not saved to server',
      important: true,
    }
    return request.then(response => response.data.concat(nonExisting))
    }

const create = async newObject => {
    const request = axios.post(baseUrl, newObject); //.then(response => response.data);
    const response = await request;
    return response.data;
}


const update = (id, newObject) => {  
    const request = axios.put(`${baseUrl}/${id}`, newObject);//    .then(response => response.data)
    return request.then(response => response.data); //vraciam to, co vracia tato funkcia
}

export default { getAll,  create, update }