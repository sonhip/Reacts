import React, {useState} from 'react';
import {Row, Col, Input, Card, Pagination} from 'antd';
import LayoutComponent from '../components/layout';
import {SearchMoviesByKeyWords} from '../services/api';
import LoadingData from '../components/loading-data';
import ListMoviesView from '../components/list-movies';

const {Search} = Input;
const {Meta} = Card;

const SearchMovies = () => {
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [page, setPage] = useState(1);
    const [totalItem, setTotalItem] = useState(0);
    const [keywords, setKeywords] = useState('');
    const [listMovies, setListMovies] = useState([]);

    const changeInput = (e) => {
        const value = e.target.value;
        setKeywords(value);
    }
    const SearchMovies = async (keywords='', currentPage=1) => {
        if(keywords.length>0){
            setLoadingSearch(true);
            const data = await SearchMoviesByKeyWords(keywords, currentPage);
            if(data){
                setListMovies(data.results);
                setTotalItem(data.total_results);
                setLoadingSearch(false);
                setPage(currentPage);
                window.scrollTo(0,0);
            }
        }
    }
    if(loadingSearch && listMovies.length===0){
        return(
            <LayoutComponent>
                <LoadingData/>
            </LayoutComponent>
        )
    }
    return (
        <LayoutComponent>
            <Row style={{marginTop: '20px', marginBottom:'20px'}} >
                <Col span={12} offset={6}>
                   <Search 
                    placeholder="input search text" 
                    onSearch={(val)=>SearchMovies(val, page)} 
                    enterButton
                    onChange={changeInput}
                    value={keywords}
                     />
                </Col>
            </Row>
            <ListMoviesView movies={listMovies} />
            {/* row chia page */}
            {listMovies.length>0 && (
                <Row style={{marginTop: '20px',marginBottom:'20px' ,textAlign: 'center'}}>
                    <Col span={24}>
                        <Pagination
                            current={page}
                            total={totalItem}
                            pageSize={20}
                            onChange={(pages)=>SearchMovies(keywords, pages)}
                        />
                    </Col>
            </Row>
            )}

        </LayoutComponent>
    );
}
export default React.memo(SearchMovies);