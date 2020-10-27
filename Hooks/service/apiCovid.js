import axios from 'axios';

const getDataCovid = async () => {
    const url =`https://api.covid19api.com/summary`;
    const response = await axios.get(url);
    const data = await response.status===200 ? response.data:[];
    return data;
}
export const api = {
    getDataCovid
}