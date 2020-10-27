import React from 'react';
import HeaderPage from './components/header';
class AppMemo extends React.Component{
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    changeCount = () => {
        this.setState({...this.state, count:this.state.count+1});
    }
    render(){
        return (
            <>
            <HeaderPage/>
            <h1>{this.state.count}</h1>
                <button onClick={this.changeCount} >+</button>
            </>
        )
    }
}
export default AppMemo;