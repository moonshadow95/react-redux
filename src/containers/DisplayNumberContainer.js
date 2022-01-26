import React, {useState} from 'react';
import DisplayNumber from "../components/DisplayNumber";
import store from "../store";

const DisplayNumberContainer = (props) => {
    const [displayNumber, setDisplayNumber] = useState(store.getState().number)
    store.subscribe(() => setDisplayNumber(store.getState().number))
    return(
        <DisplayNumber displayNumber={displayNumber} />
    )
}

export default DisplayNumberContainer;