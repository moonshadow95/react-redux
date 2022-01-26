import React from 'react';
import AddNumber from "./addNumber";

const AddNumberRoot = ({number, setNumber}) => (
    <div className='border-8 border-purple-600 p-6 m-4'>
        <div>
            <h1>Add Number Root</h1>
            <AddNumber number={number} setNumber={setNumber} />
        </div>
    </div>
);

export default AddNumberRoot;