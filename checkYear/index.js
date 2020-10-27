import React from 'react';
import InputYear from './components/inputYear'
import ButtonYear from './components/butttonYear'
import Result from './components/result'

class CheckYear extends React.Component{
    constructor() {
        super();
        this.state = {
            year: null,
            message: null
        }
    }
    changeInput=(e)=> {
        let valueYear = e.target.value;// lay gia tri nguoi dung nhap vao
        this.setState({ year: valueYear});
    }
    CheckYear=()=>{
        console.log("CheckYear");
        let year= this.state.year;
        if(!isNaN(year) && year.length>0){ // check thuc su la so hay chua?
            year= parseInt(year);
            if(year%400===0){
                this.setState({message: `${year} is a prime year!` });
            }else if(year%4===0 && year%100!==0){ 
                this.setState({message: `${year} is a prime year!` });
            }else{
                this.setState({message: `${year} is not a prime year!` });
            }

        }else{ 
            this.setState(
                {message: `${year} is not a number. Please check again!`}
            );
        }
    }
    render(){
        
        return (
            <>
                <InputYear 
                    change={this.changeInput}
                    year={this.state.year}
                 />
                <ButtonYear click={this.CheckYear} >Check Year</ButtonYear>
                <Result message={this.state.message}></Result>
            </>
        )
    }
}
export default CheckYear;