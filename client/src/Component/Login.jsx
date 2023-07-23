import React from 'react'
// import { Link } from 'react-router-dom'
import Nav from './Nav';
import './Style/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

    const Navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    // collect data  from user using useState property
    const emailHandle = (e) => {
        setEmail(e.target.value);
    }

    const passHandle = (e) => {
        setPassword(e.target.value);
    }


    // validate the email and password

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };


    const validatePassword = (password) => {
        return password.length >= 8;
    }


    //onSubmit function for the login form

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            // alert('email correct');
            console.log(email);



            if (validatePassword(password)) {
                alert("login Completed..!");
                Navigate('/');
                
            }
            else {
                document.getElementById('login_error').innerHTML = "password must atleast 8 characterts";
                alert('sorry');
            }

        }
        else {
            alert("Enter the valid email");

            document.getElementById('login_error').innerHTML = "Enter the valid Email";


        }



    }


    return (
        <div className="conatiner">

            <Nav />
            <div className="login_mainContainer">
                <form action="" id='form_login' className='form_login' onSubmit={handleSubmit}>
                    <span className="login">LOGIN</span>
                    <div className="login_Email">
                        <label htmlFor="email" id='lable_email' className='lable_email'>Email :</label>
                        <input type="text" id='email' className='email' onChange={emailHandle} value={email} placeholder='                   Eneter the Email*' /> <br />

                    </div>

                    <div className="login_password">
                        <label htmlFor="password" id='lable_password' className='lable_password'>Password :</label>
                        <input type="password" id='password' onChange={passHandle} className='password' value={password} placeholder='                   Enter the Password*' />
                    </div>
                    <button type='submit' className='user_loginbtn'>LOGIN</button>
                    <span id='login_error'></span>
                </form>



            </div>



        </div>

    )
}

export default Login