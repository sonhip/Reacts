import React from 'react';
import PropTypes from 'prop-types';
// function component
const Button =(props)=>{
    return (
        <>
            <button
             type={props.type}
             onClick={props.click} 
            >{props.children}</button>
        </>
    );
}
//check type props
Button.propTypes={
    type: PropTypes.string.isRequired, // kiểu dữ liệu của props type là string bắt buộc phải truyền vào
    click: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired
}
// Gán giá trị mặc định cho props
Button.defaultProps = {
    type: 'button',
}
export default Button;