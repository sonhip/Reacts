import axios from 'axios';

const getListDataUsers = async (page=1) => {
    //quy uoc hien thi 3user tren 1 trang
    const perPage=3;
    const url=`https://reqres.in/api/users?page=${page}&per_page=${perPage}`;

    const response = await axios.get(url);
    const result = await response.status===200 ? response.data:[];
    return result;
}
export const api={
    getListDataUsers
}