import React,{useState} from 'react';
import AddTodo from './components/add-todo';
import ListTodo from './components/list-todo';

const AppTodo = (props) => {

    let [nameTodo, setNameTodo]=useState('');
    let [idTodo, setidTodo]=useState(1);
    let [listTodo, setListTodo]=useState([]);

    const changeInput = (e) => {
        let value = e.target.value;
        setNameTodo(value);
    }

    const addNameWork = (nameWork='') =>{
        if(nameWork.length>0){
            setidTodo(idTodo+1);
            setListTodo([...listTodo, {
                id: idTodo,
                name: nameWork,
                done: false
            }])
            setNameTodo('');

        }
    }

    return (
        <>
            <AddTodo 
                type="text" 
                typeButton="button"
                change={changeInput}
                add={addNameWork}
                value={nameTodo}
            >Add</AddTodo>
            <ListTodo todo={listTodo}/>
        </>
    )
}
export default AppTodo;