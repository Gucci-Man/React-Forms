import React, {useState} from 'react';

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        color:  '',
        box_height: '',
        box_width: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        let { name, value } = e.target;
        // If value is a integer, convert to integer
        if(parseInt(value)) {
            value = parseInt(value);
        }
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(INITIAL_STATE);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Background Color</label>
            <input 
                id="color"
                type="text"
                name="color"
                placeholder="Your background color"
                value={formData.color}
                onChange={handleChange}
            />
            <label htmlFor="box_height">Box Height</label>
            <input 
                id="box_height"
                type="text"
                name="box_height"
                placeholder="Your box height"
                value={formData.box_height}
                onChange={handleChange}
            />
            <label htmlFor="box_width">Box Width</label>
            <input 
                id="box_width"
                type="text"
                name="box_width"
                placeholder="Your box width"
                value={formData.box_width}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;