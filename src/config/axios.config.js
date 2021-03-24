import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const cors = `https://api.allorigins.win/get?url=${encodeURIComponent(process.env.REACT_APP_API_URL)}`;

const axiosClient = axios.create({
    baseURL: cors
});

export default axiosClient;
