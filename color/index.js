import React from 'react';
import ViewData from './components/viewData.js'
import ButtonColor from './components/buttonColor.js'

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state={ color:'pink'}
    }

    // setColorRed=()=>{
    //     this.setState({...this.state, color:'red'}, ()=>{ console.log('just change the color of the panel')})
    // }
    // setColorYellow=()=>{
    //     this.setState({...this.state, color:'yellow'}, ()=>{console.log('change to yellow')})
    // }
    // setColorGreen=()=>{
    //     this.setState({...this.state, color:'green'}, ()=>{console.log('just change the green')})
    // }
    setColor=(events)=>{
        const nameButton= events.target.name;
        this.setState({...this.state, color:nameButton}, ()=>{console.log('just change the color')})
    }
    

    render(){
        return (
            <>
                <ViewData color={this.state.color} />
                <ButtonColor 
                    click={this.setColor} 
                    name="red"
                >Red</ButtonColor>
                <ButtonColor 
                    click={this.setColor}
                    name="yellow" 
                >Yellow</ButtonColor>
                <ButtonColor 
                    click={this.setColor} 
                    name="green"
                >Green</ButtonColor>
            </>
        );
    }
}
export default Color;