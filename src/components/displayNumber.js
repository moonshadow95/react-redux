import React from 'react';

const DisplayNumber = (props) => (
    <div className='border-8 border-purple-600 p-6 m-4'>
        <div>
            <h1>DisplayNumber</h1>
            <input type="text" readOnly value='0' className='border-4 border-stone-400 p-2 my-4'/>
        </div>
    </div>
);

export default DisplayNumber;