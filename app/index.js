import React from 'react';
import HomePage from './page/contact_page';
// tao component
class MyApp extends React.Component{
    render(){
        return(
            <React.Fragment>
               <HomePage/>
            </React.Fragment>
        );
    }
}
export default MyApp;