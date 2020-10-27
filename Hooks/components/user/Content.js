import React, {useState, useEffect} from 'react';
import {Row, Col, Card, Skeleton, Button,Pagination } from 'antd';
import {api} from '../../service/api';

const { Meta } = Card;


const ListUsers = () => {

    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalItem, setTotalItem] = useState(0);
    const [user, setUser] = useState([]);
    const [previous,showPrevious] = useState(false);
    const [next,showNext] = useState(false);

    useEffect(() => {
        // creat a function to get data from Api
        const getData = async () => {
            setLoading(true);// start call api
            const dataUsers = await api.getListDataUsers(page);
            if(dataUsers){
                //update data dataUsers
                setUser(dataUsers.data);
                setTotalItem(dataUsers.total);
                setTotalPage(dataUsers.total_pages)
                ///cap nhat lai loading
                setLoading(false)
            }

            //xu ly phan trang
            //gioi han page
            if(page<1){
                setPage(1);
            }else if(page>dataUsers.total_pages){
                setPage(dataUsers.total_pages)
            }

            //kiem tra hien thi nut previous
            if(page>1){
                showPrevious(true);
            }else{
                showPrevious(false);
            }
            //kiem tra hien thi nut next
            if(page>=1 && page<=dataUsers.total_pages){
                showNext(true);
            }else{
                showNext(false);
            }
        }
        getData();
    },[page]); // use likes componentDidMount, componentDiaUpdate of Class Components, 

    //function next-previous page
    const previousAndNextPage = (type) => {// check client click vao button nao
        if(type ==='previous'){
            //giam page xuong 1 don vi
            if(page>1){
                setPage(page-1);
            }
        }else if(type ==='next'){
            if(page<totalPage){
                setPage(page+1);
            }
        }
    }

    if(loading){
        return (<Skeleton active />);
    }
    const changePage = (pages) => {
        setPage(pages);
    }

    return(
        <>
            <Row style={{marginTop:'20px', marginBottom: '20px'}}>
            {user.map((item, index)=>(
                <Col key={item.id} span={8}>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={item.last_name} src={item.avatar} />}
                    >
                        <Meta title={item.first_name} description={item.email} />
                    </Card>
                </Col>
            ))}
                
            </Row>
            <Row style={{marginTop: '20px', marginBottom: '60x', textAlign: 'center'}}>
                <Col span={12} offset={6}>
                {previous && <Button onClick={()=>previousAndNextPage('previous')}  type="primary" >Previous</Button>}
                    
                {next && <Button onClick={()=>previousAndNextPage('next')} type="primary" style={{marginLeft:'10px'}} >Next</Button> }  
                </Col>
            </Row>
            <Row style={{marginTop: '20px', marginBottom: '60x', textAlign: 'center'}}>
                <Col span={24}>
                    <Pagination
                        currentPage={page}
                        pageSize={3}
                        total={totalItem}
                        onChange={(pages) =>changePage(pages)}
                    />
                </Col>
            </Row>
        </>
    )
}
export default React.memo(ListUsers);