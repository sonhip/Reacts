import React from 'react';
class ButtonColor extends React.Component{
    render(){
        return (
            <button 
                onClick={this.props.click} 
                name={this.props.name}
            >{this.props.children}</button>
            /* giá trị truyền vào trong cặp thẻ mở đóng ở component file index.js ở ngoài */
        );
    }
}
export default ButtonColor;