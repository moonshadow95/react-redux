import React from 'react';
import DisplayNumber from "./displayNumber";

const DisplayNumberRoot = ({number}) => (
    <div className='border-8 border-purple-600 p-6 m-4'>
        <div>
            <h1>Add Number Root</h1>
            <DisplayNumber number={number}/>
        </div>
    </div>
);

export default DisplayNumberRoot;