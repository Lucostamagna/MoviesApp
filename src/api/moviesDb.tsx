import axios from 'axios';


// request for all movies. 
const moviesDB= axios.create({
    baseURL:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'873a09589e983e608a7bbb1a0188b224',
        lenguage: 'es-ES'
    }
});

export default moviesDB;