import React, { Component } from 'react';

class KeyPad extends Component {
    buttonPressed = (e) => {
        this.props.buttonPressed(e.target.name);
    }
    render() {
        return (
            <div className="buttons">
                <button onClick={this.buttonPressed} name="(">(</button>    
                <button onClick={this.buttonPressed} name="C">C</button>    
                <button onClick={this.buttonPressed} name="CE">CE</button>    
                <button onClick={this.buttonPressed} name=")">)</button>    
                <button onClick={this.buttonPressed} name="1">1</button>
                <button onClick={this.buttonPressed}  name="2">2</button>
                <button onClick={this.buttonPressed}  name="3">3</button>
                <button onClick={this.buttonPressed}  name="+">+</button>
                <button onClick={this.buttonPressed}  name="4">4</button>
                <button onClick={this.buttonPressed}  name="5">5</button>
                <button onClick={this.buttonPressed}  name="6">6</button>
                <button onClick={this.buttonPressed}  name="-">-</button>
                <button onClick={this.buttonPressed}  name="7">7</button>
                <button onClick={this.buttonPressed}  name="8">8</button>
                <button onClick={this.buttonPressed}  name="9">9</button>
                <button onClick={this.buttonPressed}  name="*">*</button>
                <button onClick={this.buttonPressed} name="0">0</button>    
                <button onClick={this.buttonPressed} name=".">.</button>    
                <button onClick={this.buttonPressed} name="=">=</button>    
                <button onClick={this.buttonPressed} name="/">/</button> 
            </div>
        );
    }
}

export default KeyPad;