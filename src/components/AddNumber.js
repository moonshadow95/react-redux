import React, {useState} from 'react';

const AddNumber = ({onClick}) => {
    const [size, setSize] = useState(0)
    return (
        // Only React
        // <div className='border-8 border-purple-600 p-6 m-4'>
        //     <h1>Add Number</h1>
        //     <div className='flex gap-4'>
        //         <input type="button" value='+' onClick={() => setNumber(prev => prev + size, setSize(0))}
        //                className='border-4 border-stone-400 p-2 my-4 cursor-pointer'/>
        //         <input type="text" value={size}
        //                onChange={
        //                    (event) => {
        //                        setSize(parseInt(event.target.value))
        //                    }
        //                }
        //                className='border-4 border-stone-400 p-2 my-4'/>
        //     </div>
        // </div>
        // With Redux
        <div className='border-8 border-purple-600 p-6 m-4'>
            <h1>Add Number</h1>
            <div className='flex gap-4'>
                <input type="button" value='+' onClick={() => onClick(size)}
                       className='border-4 border-stone-400 p-2 my-4 cursor-pointer'/>
                <input type="text" value={size}
                       onChange={
                           (event) => {
                               setSize(parseInt(event.target.value))
                           }
                       }
                       className='border-4 border-stone-400 p-2 my-4'/>
            </div>
        </div>
    )
};

export default AddNumber;