import React, { useState, useEffect } from 'react';
import {Row, Col, Card} from 'antd';
import {useParams} from 'react-router-dom';
import LayoutComponent from '../components/layout';
import {getDataMoviesById} from '../services/api';
import LoadingData from '../components/loading-data';



const {Meta} = Card; 

const DetailMoviesPage = () => {
    const { id } = useParams(); //get params from url passed
    // call api based the ID of movie 
    const [loadingDetails, setLoadingDetails] = useState(false);
    const [detailsMovie, setdetailsMovie] = useState({});

    useEffect(() => {
        const getData = async () => {
            setLoadingDetails(true);
            const data = await getDataMoviesById(id);
            if(data){
                setdetailsMovie(data);
                setLoadingDetails(false);
            }
        }
        getData();
    },[id]);
    if(loadingDetails && Object.keys(detailsMovie).length===0 && detailsMovie.contructor===Object){
        return(
            <LayoutComponent>
                <LoadingData/>
            </LayoutComponent>
        )
    }
    return (
        <LayoutComponent>
            <Row style={{marginTop: '20px', marginBottom:'20px'}} >
                <Col span={6}>
                    <Card
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt={detailsMovie.title} src={`https://image.tmdb.org/t/p/w300/${detailsMovie.poster_path}`} />}
                    >
                        <Meta title={detailsMovie.tagline} />
                    </Card>
                </Col>
                <Col span={12}>
                    <h1>{detailsMovie.title}</h1>
                    <p>{detailsMovie.overview}</p>
                    <p>Vote Average: {detailsMovie.vote_average} - Vote Count: {detailsMovie.vote_count}</p>
                </Col>
                <Col span={6}>
                    <Row>
                         {detailsMovie.images!== undefined ? detailsMovie.images.backdrops.map((item, index)=>(
                                <Col span={24} key={index}>
                                    <Card
                                        hoverable
                                        bordered={false}
                                        style={{ width: 300 }}
                                        cover={<img alt={detailsMovie.title} src={`https://image.tmdb.org/t/p/w300/${item.file_path}`} />}
                                    >
                                    </Card>
                                </Col>
                            )) : null}
                    </Row>

                </Col>
            </Row>
        </LayoutComponent>
    );
}
export default React.memo(DetailMoviesPage);