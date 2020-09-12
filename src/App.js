import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Hello from "./pages/Hello.tsx";
import Welcome from "./pages/welcome";

function App() {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <>
            <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <Router>
                <Hello path="/" />
                <Welcome path="/welcome" />
            </Router>
        </>
    );
}

export default App;
