import React, {useState} from 'react';

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        task: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task: </label>
            <input 
                id="task"
                type="text"
                name="task"
                placeholder="Your task"
                value={formData.task}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodoForm;