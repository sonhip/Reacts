import React from 'react';
import MyContext from './my-context';
import {api} from '../components/service/api';
class MyProvider extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            virus:[]
        }
    }
    setStateAsync = (state) => {
        return new Promise((resolve) =>{
            this.setState(state, resolve);
        })
    }
    async componentDidMount(){
        //cập nhật state loading
        await this.setStateAsync({loading:true});
        //đợi lấy data từ api về
        const data = await api.getDataVirusCorona();
        await this.setStateAsync({
            ...this.state, 
            loading: false, 
            virus: data
        });
    }
    render() {
        return (
            <MyContext.Provider
                value={this.state}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider;