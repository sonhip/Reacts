import React from 'react';
import { Row, Col, Card } from 'antd';
import MyContext from '../context/my-context';
import { Skeleton } from 'antd';

class Global extends React.Component{
    render() {
        return (
            <MyContext.Consumer>
            {context=>{
                console.log(context);
                if(context.loading || context.virus.Global === undefined){
                    return(
                        <Skeleton active/>
                    )
                }
                return (
                    <Row>
                <Col span={8}>
                    <Card title="Mac benh" bordered={true}>
                        <p>So ca nhiem:{context.virus.Global.NewConfirmed}</p>
                        <p>Tong so ca nhiem:{context.virus.Global.TotalConfirmed}</p>
                    </Card>
                </Col>
                <Col span={8}>
                <Card title="Tu vong">
                        <p>So ca moi chet:{context.virus.Global.NewDeaths}</p>
                        <p>Tong so moi chet:{context.virus.Global.TotalDeaths}</p>
                    </Card>
                </Col>
                <Col span={8}>
                <Card title="Moi khoi">
                        <p>So ca moi khoi:{context.virus.Global.NewRecovered}</p>
                        <p>Tong so ca moi khoi:{context.virus.Global.TotalRecovered}</p>
                    </Card>
                </Col>
            </Row>     
                )
            }}
                     
            </MyContext.Consumer>
        )
    }
}
   
export default Global;