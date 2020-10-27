import React from 'react';
class ViewDate extends React.Component {
    render(){
        return(
            <div  style={{width: '300px', height: '300px', border: 'solid 1px blue', boxShadow: '0 7px 4px #777', backgroundColor:this.props.color}}></div>
        );
    }
}
export default ViewDate;