import React from 'react';
import MyContext from './MyContext'

// tạo provider để chia sẻ dữ liệu


class MyProvider extends React.Component {
    // chia sẻ dữ liệu tại đây
    constructor() {
        super();
        this.state = {
            cars: [
                {name: 'a', price: 100, color: 'red'},
                {name: 'b', price: 200, color: 'black'},
                {name: 'c', price: 300, color: 'white'}
            ]
        }
        
    }
    render() {
        return (
            <MyContext.Provider 
                value={this.state.cars}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider;