// định nghĩa 1 higher order components
// nó là một hàm nhận tham số là một components và trả về một component mới
import React from 'react';

const HocsComponent = (MyComponent, data) => {
    // MyComponent: một component truyền vào như là một tham số của hàm
    // hàm này bắt buộc return về một component mới
    return class extends React.Component{
        constructor(){
            super();
            this.state = {
                data: data
            }
        }
        render() {
            return(
                <MyComponent {...this.props} data={this.state.data} />
            )
        }
    }
}
export default HocsComponent;