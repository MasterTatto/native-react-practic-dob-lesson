import React, {useState} from 'react';

import './App.css';
import {calculate} from "./store/tasks";

function App() {
    let [num1, setValue1] = useState<number>(0);
    let [num2, setValue2] = useState<number>(0);
    // let num1: number = 0;
    // let num2: number = 0;
let result = calculate(num1, num2, {type: 'MULT'})
    return (
        <div className="App">
            <div>
                <input type="number" value={num1}  onChange={(e) => setValue1(+e.currentTarget.value)}/>
                <input type="number" value={num2} onChange={(e) => setValue2(+e.currentTarget.value)}/>
                <button onClick={() => result}>*</button>
                <input type="text" value={result}/>
            </div>
        </div>
    );
}

export default App;
