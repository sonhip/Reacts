import React from 'react'
import Content from './components/content.js'
class App extends React.Component {
    constructor(){
        super();
        this.state={
            color:"red"
        };
    }
    changeColor =() => {
        this.setState({...this.state, color: this.state.color==='red'?'yellow':'red'});
    }
    render() {
        return(
            <>
                <button onClick={this.changeColor}>change color</button>
                <Content color={this.state.color} />
            </>
        )
    }
}
export default App;