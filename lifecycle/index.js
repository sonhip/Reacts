import React from 'react'
import Header from './components/header'
class Lifecycle extends React.Component{
    constructor(){
        super();
        this.state={
            count:10
        };
        console.log(`constructor of Lifecycle`)
    }
    clickButton=() => {
        this.setState({...this.state, count: this.state.count+1})
    }
    render(){
        return (
            <>
                <p>{this.state.count}</p> 
                <button onClick={this.clickButton}>click</button>
                <Header/>
            </>
        )
    }
}
export default Lifecycle;