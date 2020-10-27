import React from 'react';
import Content from './components/content'

class AppRefs extends React.Component{
    constructor(){
        super();
        //tạo ra một refs để truy cập vào DOM element khi render ra
        this.infoDOM= React.createRef();
        this.infoInput= React.createRef();
    }
    showInfoDOM = () => {
        console.log(this.infoDOM.current);
    }
    
    getDataInput = () => {
        const data = this.infoInput.current.state.text;
        console.log(data);
    }
    render() {
        return (
            <>
                <h1
                    ref={this.infoDOM} id="title"
                    className="title"
                >this is content</h1>
                <Content ref={this.infoInput} />
                <br/>
                <button onClick={this.showInfoDOM}>Lay thong tin cua the h1</button>
                <button onClick={this.getDataInput} >Lay data tu input</button>
            </>
        )
    }
}
export default AppRefs;