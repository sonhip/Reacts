import React, { Component } from 'react';
import KeyPad from './components/KeyPad';
import OutPut from './components/OutPut';
import './components/App.css'
class Cal extends Component {
    state={
        result: ''
    }
    buttonPressed= (buttonName) => {
        if(buttonName==='='){
            this.calculate();
        }else if(buttonName==='C'){
            this.reset();
        }else if(buttonName==='CE'){
            this.backSpace();
        }else{
            this.setState({
                result: this.state.result + buttonName
            }) 
        }
    };
    reset=() => {
        this.setState({result:''})
    }
    backSpace=() => {
        this.setState({
            result: this.state.result.slice(0,-1)
        })
    }
    calculate= () => {
        try{this.setState({
            result: eval(this.state.result)
        })}catch(w){
            this.setState({
                result:'error'
            })
        }
    }
    render() {
        return (
            <div className="App">
                <div className="calc-body">
                    <OutPut result={this.state.result} />
                    <KeyPad 
                    buttonPressed={this.buttonPressed}
                    /> 
                </div>      
            </div>
        );
    }
}

export default Cal;     