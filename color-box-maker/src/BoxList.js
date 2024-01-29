import React, {useState} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from "uuid";

const BoxList = () => {
    const [boxes, setBox] = useState([])
    const addBox = (newBox) => {
        setBox(boxes => [...boxes, {...newBox, id: uuid() }])
    }
    const deleteBox = (boxId) => {
        setBox(boxes => boxes.filter(box => box.id !== boxId))
    }
    return (
        <div>
            <h2>Box List</h2>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({id, color, box_height, box_width}) => 
                <Box 
                    id={id} 
                    color={color} 
                    box_height={box_height} 
                    box_width={box_width}
                    key={id}
                    deleteBox={deleteBox}
                />)}
            </div>
        </div>
    )
}

export default BoxList;