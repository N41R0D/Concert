const axios = require('axios');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const url = "https://127.0.0.1:8000/api/concerts"
const config = {
    headers: {
        'Accept': "application/json"
    }
}

export const getAllConcerts = async () => {
    try {
        const resp = await axios.get(url, config);
        resp.data.map((concert) => {
            axios.get("https://127.0.0.1:8000" + concert.idLieu, config)
            .then(res => {
                const lieu = res.data.name;
                concert.location = lieu;
            })
        })
        console.log(resp.data);
        return(resp.data);
    } catch (err) {
        return(err);
    }
};