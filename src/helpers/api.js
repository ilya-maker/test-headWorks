import axios from 'axios';
const BASE_URL = 'https://meowfacts.herokuapp.com/';

export const getData = () => {
    return axios.get(BASE_URL)
        .then(dataFromServer => dataFromServer.data.data[0])
        .catch(error => console.log('error', error.message))
};

export const postData = (user) => {
    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .catch(error => console.log('error', error.message))
};