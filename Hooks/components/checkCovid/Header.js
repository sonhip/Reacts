import React from 'react';
import {Layout} from 'antd';

const {Header}= Layout;

const HeaderPage = () => {
    return(
        <>
            <Header>
                <h1 style={{color: 'white', textAlign: 'center', fontSize:'bold'}}>Information of Covid19 Pandemic</h1>
            </Header>
        </>
    )
}
export default React.memo(HeaderPage);