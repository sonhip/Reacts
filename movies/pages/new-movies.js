import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Pagination} from 'antd';
import LayoutComponent from '../components/layout';
import {getDataNewMovies} from '../services/api';
import LoadingData from '../components/loading-data';
import ListMoviesView from '../components/list-movies';

const { Meta } = Card;

const NewMoviesPage = () => {

    const [loadingHome, setLoadingHome] = useState(false);
    const [movies, setMovie] = useState([]);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            setLoadingHome(true);
            const data = await getDataNewMovies(page);
            if(data){
                setMovie(data.results);
                setTotalItem(data.total_results);
                if(page<1){
                    setPage(1);
                }else if(page>data.total_pages){
                    setPage(data.total_pages);
                }
                setLoadingHome(false);
            }     
        }
        getData();
    },[page])
    
    if(loadingHome || movies.length===0){
        return(<LoadingData/>);
    }

    const changePage = (pages) => {
        setPage(pages);
    }

    return (
        <LayoutComponent>
            <ListMoviesView movies={movies}/>
            <Row style={{marginTop: '10px', textAlign: 'center'}}>
                <Col span={24}>
                    <Pagination
                        current={page}
                        pageSize={20}
                        total={totalItem}
                        onChange={(pages)=>changePage(pages)}
                    />
                </Col>
            </Row>
        </LayoutComponent>
    );
}
export default React.memo(NewMoviesPage);