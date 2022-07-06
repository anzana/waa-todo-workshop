import React from 'react'
import {Routes,Route} from 'react-router-dom'
import DetailTodo from '../todo/DetailToDo'
import Todo from '../todo/Todo'
import Todos from '../todo/Todos'
export default function MyRoutes(){
    return(
        <div>
            <Routes>
            <Route path="/todos" element={<Todos />} />
            <Route path="/todos/:id" element={<DetailTodo />} />
            </Routes>
        </div>
    )
}