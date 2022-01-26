import AddNumber from "../components/AddNumber";
import React from 'react';
import store from "../store";

const AddNumberContainer = () => {
    const onClick = (size) => {
        store.dispatch({type: 'INCREMENT', size: size})
    }
    return (
        <AddNumber onClick={onClick}/>
    )
};

export default AddNumberContainer;