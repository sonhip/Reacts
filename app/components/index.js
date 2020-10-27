import React from 'react';
import FooterPage from './partials/footer';
import HeaderPage from './partials/header';
import NavbarPage from './partials/navbar';
class IndexPage extends React.Component{
    render(){
        return(
            <>
                <HeaderPage
                    color="blue"
                    title="header page"
                />
                <NavbarPage/>
                {this.props.children}
                <FooterPage/>
            </>
        )
    }
}
export default IndexPage;