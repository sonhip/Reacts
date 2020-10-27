// create a component
import React from 'react'; // import reactjs
import '../partials/common.css'
class HeaderPage extends React.Component{
        
    render(){
        // render function for display theme
        console.log(this.props.color)
        return (
            
            <header style={{backgroundColor:this.props.color}}>
                <h1 className="titleHeading">this is header</h1>
            </header>
        );
    }
}
export default HeaderPage;