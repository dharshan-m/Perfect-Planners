import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../src/App.css';

const App = () => {

        const Navigate = useNavigate();

        const data= useEffect(() => {
        const timer = setTimeout(() => Navigate('/login'), 1550);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div onLoad={data}>
            <h1 className="h1class">Perfect Planners</h1>
        </div>
    )
}

export default App;