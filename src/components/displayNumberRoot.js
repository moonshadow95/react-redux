import React from 'react';
import AddNumber from "./addNumber";
import DisplayNumber from "./displayNumber";

const DisplayNumberRoot = (props) => (
    <div className='border-8 border-purple-600 p-6 m-4'>
        <div>
            <h1>Add Number Root</h1>
            <DisplayNumber/>
        </div>
    </div>
);

export default DisplayNumberRoot;