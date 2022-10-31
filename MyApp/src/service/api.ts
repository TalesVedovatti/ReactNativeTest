import axios from 'axios';

// Criação de instancia do axios para fazer conexão com a API do pokemon
const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
})

export default api