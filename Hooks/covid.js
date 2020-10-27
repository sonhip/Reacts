import React from 'react';
import LayoutPage from './components/checkCovid/Layout';
import ContentCovid from './components/checkCovid/Content';

const InforCovid = () => {
    return(
        <>
            <LayoutPage>
                <ContentCovid />
            </LayoutPage>            
        </>
    );
}
export default InforCovid;