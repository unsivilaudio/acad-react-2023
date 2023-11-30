import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://dev.me:8080',
});

export default instance;
