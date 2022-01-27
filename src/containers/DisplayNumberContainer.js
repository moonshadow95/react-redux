import {connect} from 'react-redux'
import DisplayNumber from "../components/DisplayNumber";

function mapStateToProps(state){
    return {
        number:state.number
    }
}

export default connect(mapStateToProps)(DisplayNumber)


// import store from "../store";
// const DisplayNumberContainer = (props) => {
//     const [displayNumber, setDisplayNumber] = useState(store.getState().number)
//     store.subscribe(() => setDisplayNumber(store.getState().number))
//     return(
//         <DisplayNumber displayNumber={displayNumber} />
//     )
// }
//
// export default DisplayNumberContainer;

