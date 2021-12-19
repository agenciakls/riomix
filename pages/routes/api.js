import axios from 'axios';

const api = axios.create({
    baseURL: 'https://yxe.com.br/sites/riomix/api',
});

export default api;