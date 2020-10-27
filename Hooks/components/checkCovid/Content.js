import React, { useState, useEffect} from 'react';
import {Row, Col, Skeleton, Card, Table} from 'antd';
import {api} from '../../service/apiCovid';


const ContentPage = () => {
    const [loading, setLoading] = useState(false);

    const [newConfirmed, setNewConfirmed] = useState(0);
    const [totalConfirmed, setTotalConfirmed] = useState(0);
    const [newDeaths, setNewDeaths] = useState(0);
    const [totalDeaths, setTotalDeaths] = useState(0);
    const [newRecovered, setNewRecovered] = useState(0);
    const [totalRecovered, setTotalRecovered] = useState(0);

    const [dataCovidTranfer, setDataCovidTranfer] = useState([]);
   
    useEffect(()=> {
        const getData = async () => {
            setLoading(true);
            const dataCovid = await api.getDataCovid();
            if(dataCovid){
                setNewConfirmed(dataCovid.Global.NewConfirmed);
                setTotalConfirmed(dataCovid.Global.TotalConfirmed);
                setNewDeaths(dataCovid.Global.NewDeaths);
                setTotalDeaths(dataCovid.Global.TotalDeaths);
                setNewRecovered(dataCovid.Global.NewRecovered);
                setTotalRecovered(dataCovid.Global.TotalRecovered);
                
                setDataCovidTranfer(dataCovid.Countries);
                
                setLoading(false);
            }
            if(dataCovid.Countries===null) {
                return <Skeleton active/>;
            }else{
                console.log("ok");
            }
            
        }
        getData();
    },[]);
    if(loading){
        return <Skeleton active/>;
    }

    const columns =[
        {
            title: "Country",
            dataIndex: 'Country',
            key: 'Country'
        },
        {
            title:"CountryCode",
            dataIndex: 'CountryCode',
            key: 'CountryCode'
        },
        {
            title: "NewConfirmed",
            dataIndex: 'NewConfirmed',
            key: 'NewConfirmed'
        },
        {
            title: "TotalConfirmed",  
            dataIndex: "TotalConfirmed",
              key: "TotalConfirmed" 
        },
        {
          title: "So chet",  
          dataIndex: "NewDeaths",
            key: "NewDeaths" 
      },
      {
          title: "TotalDeaths",  
          dataIndex: "TotalDeaths",
            key: "TotalDeaths" 
      },
      {
          title: "NewRecovered",  
          dataIndex: "NewRecovered",
            key: "NewRecovered" ,
      },
      {
          title: "TotalRecovered",  
          dataIndex: "TotalRecovered",
            key: "TotalRecovered" 
      },
      {
          title: "Date",
          dataIndex: "Date",
          key: "Date"
      }
    ];



    return(
        <>
            <h1 style={{textAlign: 'center', fontSize:'bold'}} >Information Pandemic Covid Global</h1>
            <Row>
                <Col span={8}>
                    <Card title="Tested Positive" bordered={true}>
                        <p>NewConfirmed: {newConfirmed}</p>
                        <p>TotalNewConfirmed: {totalConfirmed}</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Death">
                        <p>NewDeaths: {newDeaths}</p>
                        <p>TotalDeaths: {totalDeaths}</p>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Recovered">
                        <p>NewRecovered: {newRecovered}</p>
                        <p>TotalRecovered: {totalRecovered}</p>
                    </Card>
                </Col>
            </Row>
            <h1 style={{width: '100%', height: '60px', backgroundColor:"#FAFAFA", textAlign: 'center', fontSize:'bold'}}>Information Pandemic Covid Of Countries</h1>
            <Row>
                <Col style={{width:'100%'}}>
                    <Table 
                        
                        dataSource={dataCovidTranfer} 
                        columns={columns} 
                        rowKey='CountryCode'
                        pagination={{defaultPageSize:10, showSizeChange:true, pageSizeOptions:['5','10','15']}}
                        />
                </Col>
            </Row>
        </>
    )
}
export default React.memo(ContentPage);