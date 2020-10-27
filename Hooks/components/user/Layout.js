import React from 'react';
import HeaderPage from './Header';
import FooterPage from './Footer';
import PropTypes from 'prop-types';

import {Layout, Row, Col} from 'antd';
const {Content} = Layout;

const LayoutPage = (props) => {
    return(
        <>
            <Layout>
                <HeaderPage/>
                    <Content>
                        <Row>
                            <Col span={12} offset={6} >{props.children}</Col>
                        </Row>
                    </Content>
                <FooterPage/>
            </Layout>
        </>
    )
}
LayoutPage.propTypes = {
    children: PropTypes.node
}
export default React.memo(LayoutPage);// memo tránh việc render các component ko cần thieiet như header, footer

