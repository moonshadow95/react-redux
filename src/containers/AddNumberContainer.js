import AddNumber from "../components/AddNumber";
import {connect} from 'react-redux';

function mapDispatchToProps(dispatch){
    return {
        onClick: (size) => {
            dispatch({type: 'INCREMENT', size: size})
        }
    }
}

export default connect(null, mapDispatchToProps )(AddNumber)


// import React from 'react';
// import store from "../store";
//
// const AddNumberContainer = () => {
//     const onClick = (size) => {
//         store.dispatch({type: 'INCREMENT', size: size})
//     }
//     return (
//         <AddNumber onClick={onClick}/>
//     )
// };
//
// export default AddNumberContainer;