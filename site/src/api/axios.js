import axios from 'axios';




const api = axios.create({
        baseURL: 'http://localhost:4000'
    },{ headers: {
        "Content-type": "application/json"
      }})

export default api;


