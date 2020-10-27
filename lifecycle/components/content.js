import React from 'react'
class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            bgColor:'pink'
        }
    }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log(nextProps);
    //     console.log(nextState);
    //     return true;
    // }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(prevState);
        return 10;
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log(prevProps);
        console.log(prevState);
        console.log(snapshot);
        return null;
    }
    render(){
        return (
            <div style={{width: '300px', backgroundColor:this.props.color}}>
                <h1>this is content</h1>
            </div>
        )
    }
}
export default Content;