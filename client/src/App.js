import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../src/App.css';
import Image from '../src/Component/Images/Perfect Planners.png';

const App = () => {

        const Navigate = useNavigate();

        const data= useEffect(() => {
        const timer = setTimeout(() => Navigate('/login'), 3000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div onLoad={data}>
            <img src={Image} alt="img" className="logoimage"/>
        </div>
    )
}

export default App;