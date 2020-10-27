import React from 'react';
import Result from './components/result';
import ButtonCounter from './components/button_counter';

import './counter.css'

class Counter extends React.Component{

    constructor(props){
        super(props);// giup ta co the su dung duoc tat ca cac thuoc tinh cua class cha
        // tao ra 1 state cho component nao do
        this.state={
            count: 0
        }
        this.ViewIncrement = this.ViewIncrement.bind(this);

    }
    // xử lý sự kiện trong reactjs
    changeIncrementCounter =() => {
        // cap nhat lai state ~ update state
        this.setState({count: this.state.count+1});// hàm xử lý bất đồng bộ, 2 tham số
        // tham số 1 là tham số logic cập nhật state như 1 plain ob or 1 func
        // tham số 2 là 1 callback
        // this.setState((state)=>{ return {...state,count: state.count +1}}); +=3
    }
    changeDecrementCounter =() => {
        // cap nhat lai state ~ update state
        this.setState(
            //{count: this.state.count - 1}
            (state)=>{ return {count: state.count -1}}
            );
    }
    ViewIncrement(){
        this.changeIncrementCounter();
        this.changeIncrementCounter();
        this.changeIncrementCounter();
    }
    render(){
        return(
            <>
                <div className="container">
                    <Result result={this.state.count} />
                    <ButtonCounter
                        click={this.ViewIncrement}
                    >+</ButtonCounter>
                    <ButtonCounter
                        click={this.changeDecrementCounter}
                    >-</ButtonCounter>
                </div>
                
            </>
        );
    }
}
export default Counter;
