import React from 'react';

class Header extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            number:0
        }
    }
    static getDrivedStateFromProps(props, state) {
        //cập nhật lại state ban đầu thông qua props của components
        console.log(`getDrivered: ${props}- ${state}`)
        console.log(props);
        console.log(state);
        if(props.count !== state.number){
            return {number: props.count};
        }
    }
    render() {
        console.log("header rendered!")
        return (
            <div>
                <header>
                    <h1>this is header-{this.state.number}</h1>
                </header>
            </div>
        );
    }
}

export default Header;