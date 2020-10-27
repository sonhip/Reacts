import React from 'react';
import {Link} from 'react-router-dom';
import slugify from 'react-slugify';
import {Row, Col, Pagination, Card} from 'antd';
import PropTypes from 'prop-types';

const {Meta} = Card;

const ListMoviesComponent = (props) => {
    return(
        <>
            <Row style={{marginTop: '20px', marginBottom:'20px'}} >
            {props.movies.map((item, index)=>(
                <Col key='movies' span={6}>
                    <Link to={`/movie/${slugify(item.original_title)}~${item.id}`}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={item.title} src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}/>}
                        >
                            <Meta title={item.title} />
                        </Card>
                    </Link>
                </Col>
            ))}      
            </Row>
        </>
    )
}
ListMoviesComponent.propTypes = {
    movies: PropTypes.array.isRequired
}
export default React.memo(ListMoviesComponent);