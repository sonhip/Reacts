import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Pagination} from 'antd';
import LayoutComponent from '../components/layout';
import {getDataMovies} from '../services/api';
import LoadingData from '../components/loading-data';
import ListMoviesView from '../components/list-movies';

import MyContext from '../context/my-context';

const HomePage = (props) => {

    const [loadingHome, setLoadingHome] = useState(false);
    const [movies, setMovie] = useState([]);
    const [totalItem, setTotalItem] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            setLoadingHome(true);
            const data = await getDataMovies(page);
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
            <ListMoviesView movies={movies} />
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







//     return (
//         <LayoutComponent>
//             <Row style={{marginTop: '20px', marginBottom:'20px'}} >
//             <MyContext.Consumer>
//             {context.map((item, index)=>(
//                 <Col key='movies' span={6}>
//                     <Card
//                         hoverable
//                         style={{ width: 240 }}
//                         cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}/>}
//                     >
//                         <Meta title={item.title} />
//                     </Card>
//                 </Col>
//             ))}      
//             </MyContext.Consumer>
           
//             </Row>
//             <Row style={{marginTop: '10px', textAlign: 'center'}}>
//                 <Col span={24}>
//                     <Pagination
//                         current={page}
//                         pageSize={20}
//                         total={totalItem}
//                         onChange={(pages)=>props.changePage(pages)}
//                     />
//                 </Col>
//             </Row>
//         </LayoutComponent>
//     );

export default React.memo(HomePage);