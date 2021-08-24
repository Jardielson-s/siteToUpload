import axios from 'axios';




const api = axios.create({
        baseURL: 'http://18.234.240.183'//'http://localhost:4000'  // http://3.89.187.213
    },{ headers: {
        "Content-type": "application/json"
      }})

export default api;


