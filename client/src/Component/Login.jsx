import React from 'react'
// import { Link } from 'react-router-dom'
// import Nav from './Nav';
import './Style/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Images from '../Component/Images/Perfect Planners.png';
import loginImage from '../Component/Images/login_image.jpg';
function Login() {

    const Navigate = useNavigate();
    const SignupHandle = () => Navigate('/signup')

    // const Navigate = useNavigate();
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
                // alert("login Completed..!");
                Navigate('/home');

            }
            else {
                document.getElementById('login_error').innerHTML = "Password must atleast 8 ";
                // alert('sorry');
            }

        }
        else {
            // alert("Enter the valid email");

            document.getElementById('login_error').innerHTML = "Enter the valid Email";


        }
}


    return (
        <div className="conatiner">

            {/* <Nav /> */}
            <div className="login_mainContainer">
                <form action="" id='form_login' className='form_login' onSubmit={handleSubmit}>
                    <span className="login"></span>
                    <div className='firstlogo'>
                        <img className='classfirstlogo' src={Images} alt="logo" />
                    </div>
                    <div className='divcontainer'>
                        <img className='classreception' src={loginImage} alt="images" />
                    </div>
                    <div className='div content'>
                        <h1 className='headtextclass'>Welcome Back!</h1>
                        <h4 className='headtextclass2'>To keep connected with us please login with your personal information by email address and password</h4>
                    </div>
                    <div className="login_Email">
                        {/* <label htmlFor="email" id='lable_email' className='lable_email'>Email :</label> */}
                        <input type="text" id='email' className='email' onChange={emailHandle} value={email} placeholder='Enter your Email*' /> <br />

                    </div>
                    <div className="login_password">
                        {/* <label htmlFor="password" id='lable_password' className='lable_password'>Password :</label> */}
                        <input type="password" id='password' onChange={passHandle} className='password' value={password} placeholder='Enter your Password*' />
                    </div>
                    <span id='login_error'></span>
                    <div className='divforget'>
                        <a href="" className='classforget'>Forget Password?</a>
                    </div>
                    <button type='submit' className='user_loginbtn' onClick={handleSubmit}>Login</button>

                    <button type='submit' className='user_Signupbtn' onClick={SignupHandle}>Create Account</button>
                </form>




            </div>



        </div>

    )
}

export default Login