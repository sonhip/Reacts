import React from 'react';
import MyProvider from './global/MyProvider'
import Header from './components/header'
import Footer from './components/footer'
import Car from './components/cars'
class ContentApp extends React.Component{
    render(){
        return (
            <MyProvider>
                <Header/>
                <Car/>
                <Footer/>
            </MyProvider>
        )
    }
}
export default ContentApp