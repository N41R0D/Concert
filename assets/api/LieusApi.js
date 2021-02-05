const axios = require('axios');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const url = "https://127.0.0.1:8000/api"
const config = {
    headers: {
        'Accept': "application/json"
    }
}

export const lieuIdToName = concertsList => async () => {
    try {
        console.log(concertsList)
        concertsList.map((concert) => {
            const lieu = axios.get(url + concert.lieuId, config);
            console.log("test")
        })
    } catch (err) {
        return(err);
    }
};