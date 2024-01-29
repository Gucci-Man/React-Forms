import React, {useState} from 'react';
import Todo from './Todo';
//import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from "uuid";

const TodoList = () => {
    const [todos, setTodo] = useState([])
    const addTodo = (newTodo) => {
        setTodo(todos => [...todos, {...newTodo, id: uuid() }])
    }
    const deleteTodo = (todoId) => {
        setTodo(todos => todos.filter(todo => todo.id !== todoId))
    }
    return (
        <div>
            <h2>Todo List</h2>
            {/* <NewTodoForm addBox={addBox} /> */}
            <div>
                {todos.map(({id, task}) => 
                <Todo
                    id={id} 
                    task={task}
                    key={id}
                    deleteTodo={deleteTodo}
                />)}
            </div>
        </div>
    )
}

export default TodoList;