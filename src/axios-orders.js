import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-f17a3.firebaseio.com/'
});

export default instance;