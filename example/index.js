import React from 'react';
import Button from './components/Button'
import Content from './components/Content'

class AppIndex extends React.Component {
    constructor(){
        super();
        this.state = {
            theme: 'dark',
            color: 'text-dark'
        }
    }
    changeTheme = () => {
        this.setState(state=>{
            let newTheme =state.theme==='dark' ? 'light' : 'dark';
            let newColor =state.color==='text-dark' ? 'text-light':'text-dark';
            return {theme:newTheme,color:newColor}
        });
    }
    render() {
        return (
            <div>
                <Button type="button" click={this.changeTheme}>Change theme</Button>
                <Content
                    theme={this.state.theme}
                    color={this.state.color}
                />
            </div>
        );
    }
}

export default AppIndex;