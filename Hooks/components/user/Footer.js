import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout;
const FooterPager = () => {
    return (
        <Footer style={{textAlign: 'center'}} >Copyright © React</Footer>
    )
}
export default React.memo(FooterPager);
    