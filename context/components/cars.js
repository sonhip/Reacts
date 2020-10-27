import React from 'react';
import MyContext from '../global/MyContext.js'
class Cars extends React.Component{
    render(){
        return(
            <>
                <MyContext.Consumer>
                {context =>( 
                    <table >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            {context.map((item,index)=>(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.color}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                )}
                </MyContext.Consumer>
            </>
        )
    }
}
export default Cars;