import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://dev.me:8080',
});

instance.interceptors.request.use(function (req) {
    if (localStorage.getItem('token')) {
        const token = JSON.parse(localStorage.getItem('token') as string);
        req.headers['Authorization'] = `Bearer ${token}`;
    }
    return req;
});

export default instance;
