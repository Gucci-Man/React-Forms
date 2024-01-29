import React from 'react';

const Todo = ({id, task, deleteTodo}) => {
    return (
        <div key={id}>
            <p1>{{task}}</p1>
            <button onClick={() => deleteTodo(id)}>x</button>
        </div>
    )
}

export default Todo;