import { useState } from "react";


function Counter() {
    const [count,setCount] = useState(0);

    function increment() {
        setCount(count+1);
    }
    return (
        <div className="counter">
            <h2>My Counter</h2>
            <p>The Current Count is : {count}</p>
            <button onClick={increment}>
                Click me !
            </button>
        </div>
    );
}

export default Counter; 