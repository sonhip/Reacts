import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';
import HeaderPage from './Header'
import FooterPage from './Footer'
const {Content} = Layout;

const LayoutPage = (props) => {
    return (
        <>
            <Layout>
                <HeaderPage/>
                    <Content>
                        {props.children}
                    </Content>
                <FooterPage/>
            </Layout>
        </>
    )

}
LayoutPage.prototype ={
    children:PropTypes.node.isRequired
}

export default LayoutPage;