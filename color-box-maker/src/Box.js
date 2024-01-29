import React from 'react';

const Box = ({id, color, box_height, box_width, deleteBox}) => {
    return (
        <div 
            key={id} 
            style={{backgroundColor: color, width: box_width, height: box_height}} 
        >
            <button onClick={() => deleteBox(id)}>x</button>
        </div>
    )
}

export default Box;