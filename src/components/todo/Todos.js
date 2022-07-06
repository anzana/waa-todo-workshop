import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Todo from './Todo'
export default function Todos() {
    const [todoState,setTodoState] = useState([])
    const fetchTodos = async () => {
        let result = await axios.get('http://localhost:8081/todos');
        console.log(result.data)
        setTodoState(result.data);
    }

    useEffect(() => {
        fetchTodos();
    }, [])
    return (
        <div>{
            todoState.map((item) => {
                return <Todo id={item.id} title={item.title} key={item.id}/>
            })
        }</div>
    )
}