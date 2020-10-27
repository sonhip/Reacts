import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;

const FooterPage = () => {
    return(
        <>
            <Footer  style={{textAlign: 'center', fontSize:'bold'}} > Copyright © CheckCovid</Footer>
        </>
    );
}

export default React.memo(FooterPage);