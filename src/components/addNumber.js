import React from 'react';

const AddNumber = (props) => (
    <div className='border-8 border-purple-600 p-6 m-4'>
        <h1>Add Number</h1>
        <div className='flex gap-4'>
            <input type="button" value='+' className='border-4 border-stone-400 p-2 my-4'/>
            <input type="text" value='0' className='border-4 border-stone-400 p-2 my-4'/>
        </div>
    </div>
);

export default AddNumber;