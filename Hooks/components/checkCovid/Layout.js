import React from 'react';
import PropTypes from 'prop-types';
import HeaderPage from './Header';
import FooterPage from './Footer';
import {Layout} from 'antd';

const {Content} = Layout;

const ContentPage = (props) => {

    
    return(
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

ContentPage.propTypes = {
    children: PropTypes.node
}
export default React.memo(ContentPage);