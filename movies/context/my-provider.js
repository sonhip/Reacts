import React, {useState} from 'react';
import MyContext from './my-context';
import {getDataNewMovies} from '../services/api'

// create a context for share data

const MyProvider = (props) => {

    const [dataMovies, setDataMovies] = useState([]);
    const [page, setPage] = useState(1);

    const getData = async () => {
        dataMovies = await getDataNewMovies(page)
    }
    getData();
    const changePage = (pages) => {
        setPage(pages);
    }


    return (
        <MyContext.Provider changePage={changePage} value={dataMovies}>
            {props.children}
        </MyContext.Provider>
    )
}