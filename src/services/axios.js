import axios from "axios";

const HTTP = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default HTTP;