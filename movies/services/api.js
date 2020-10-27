import axios from 'axios';
import * as moment from 'moment';

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

export const getDataMovies = async (page=1) => {
    const url =`https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

    const response = await axios.get(url);
    const result = await response.status === 200 ? response.data:[];
    return result; 
}
let date = new Date();
let d= date.getDate();
let m = date.getMonth() + 1;
let y = date.getFullYear();
d = d<10 ? `0${d}`:d;
m = m<10 ? `0${m}`:m;
let today = `${y}-${m}-${d}`;

let nextTime = addDays(today, 30);
nextTime = moment(nextTime).utc().format('YYYY-MM-DD');
export const getDataNewMovies = async (page=1) => {
    const url =`https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&release_date.gte=${today}&release_date.lte=${nextTime}&with_release_type=3&fbclid=IwAR31dmtuXpZoJeEy3jaH0rCb6E1iM3M4pNwVKJoFtATQi0qK6Xdi-3RMtp4`;
    const response = await axios.get(url);
    const result = await response.status===200 ? response.data:[];
    return result;
}

export const getDataMoviesById = async (id=0) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&&language=en-US&append_to_response=videos%2Cimages&include_image_language=vi%2Cnull&fbclid=IwAR27PfOvil7iswAeXwSEVu0wyS0H4HYHq1G6uJH_lbJQhClCEbwcKb2K-AY`
    const response = await axios.get(url);
    const result = await response.status===200 ? response.data:[];
    return result;
}

export const SearchMoviesByKeyWords = async ( keywords='', page=1) =>{
    const url = `https://api.themoviedb.org/3/search/movie?query=${keywords}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}&fbclid=IwAR1P12oGurDEUVVnVFoB57hIlnorUsIlZt8CglWnZXe215SrXo3I6nBc_-Q`
    const response = await axios.get(url);
    const result = await response.status===200 ? response.data:[];
    return result;
}