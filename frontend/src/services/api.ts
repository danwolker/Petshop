import axios from 'axios';

const API_URL = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost/petshop-backend/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API_URL;