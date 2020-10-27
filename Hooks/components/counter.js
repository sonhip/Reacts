import React, {useState} from 'react';
// muốn sử dụng hooks chỉ được sử dụng trong function components
const Counter = () => {
    //tạo ra state bằng hooks useState
    const [count, setCount] = useState(0);
    // count: is a state was declared
    // setCount: is a method to change useState
    // 0: is a default value for state count

    const decrementCount = () => {
        setCount(count - 1);
        // tuong duong this.setState({count: this.state.count+1})
    }
    const incrementCount = () => {
        setCount(count + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button style={{backgroundColor: 'blue', color: 'white', border: 'none'}} onClick={incrementCount}>+</button>
            <button style={{backgroundColor: 'red', color: 'white', border:'none'}}  onClick={decrementCount}>-</button>
        </>
    );
}
export default React.memo(Counter);// PureComponent kiểm tra có nên render lại