import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/displayNumberRoot";

function App() {
    return (
        <div className="App border-8 border-purple-600 m-4">
            <div className='border-8 border-purple-600 p-6 m-4 text-4xl text-purple-600'>
                <h1>Root</h1>
                <AddNumberRoot/>
                <DisplayNumberRoot/>
            </div>
        </div>
    );
}

export default App;
