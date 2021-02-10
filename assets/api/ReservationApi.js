import axios from 'axios';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const baseUrl = "https://127.0.0.1:8000"
const config = {
    headers: {
        'Accept': "application/json"
    }
}

export const getConcertById = async (id) => {
    const url = baseUrl + "/api/concerts/"+id;
    return axios.get(url, config);
}

export const getLieuById = async (id) => {
    if(id != null){
        const url = baseUrl + id;
         return axios.get(url, config)
    }
}

export const getUnavailableSeat = async (id) => {
    const url = baseUrl + "/api/concerts/checkdispo/"+id;
    return axios.get(url, config)
}

export const getOptions = async () => {
    const url = baseUrl + "/api/ticket_types";
    return axios.get(url, config)
}