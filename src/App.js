import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/displayNumberRoot";
import {useState} from "react";

function App() {
    const [number, setNumber] = useState(0)
    return (
        <div className="App border-8 border-purple-600 m-4">
            <div className='border-8 border-purple-600 p-6 m-4 text-4xl text-purple-600'>
                <h1>Root</h1>
                <AddNumberRoot number={number} setNumber={setNumber}/>
                <DisplayNumberRoot number={number} setNumber={setNumber}/>
            </div>
        </div>
    );
}

export default App;
