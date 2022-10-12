import axios from "axios";
const ENDPOINT_URL = 'https://api.annict.com/v1/works?access_token=S_ZUz8QXDLPmr76rv7C8nWuNMg-tlH3joO2LZmYIu48&'

const animeApi = {
  async getAll(query) {
    const res = await axios.get(`${ENDPOINT_URL}${query}`)
    return res.data.works;
  }
}

export default animeApi;
