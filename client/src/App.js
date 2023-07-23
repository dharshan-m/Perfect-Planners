import React from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../src/App.css';

const App = () => {

        const Navigate = useNavigate();

        const data= useEffect(() => {
        const timer = setTimeout(() => Navigate('/login'), 3000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div onLoad={data}>
            <img src="https://document-export.canva.com/W2I7I/DAFe7hW2I7I/21/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230723%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230723T132516Z&X-Amz-Expires=15668&X-Amz-Signature=81e31c0c8657011553b3e1e1b1069ddcfec726705fe1d95da1be023619b9eee8&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2023%20Jul%202023%2017%3A46%3A24%20GMT" alt="img" />
        </div>
    )
}

export default App;