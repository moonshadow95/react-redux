import React from 'react';
import DisplayNumberContainer from "../containers/DisplayNumberContainer";

const DisplayNumberRoot = ({number}) => (
    <div className='border-8 border-purple-600 p-6 m-4'>
        <div>
            <h1>Add Number Root</h1>
            <DisplayNumberContainer number={number}/>
        </div>
    </div>
);

export default DisplayNumberRoot;