import React from 'react'
// import { Link } from 'react-router-dom'
// import Nav from './Nav';
import './Style/Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
                        <img className='classfirstlogo' src="https://document-export.canva.com/W2I7I/DAFe7hW2I7I/21/thumbnail/0001.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUHWDTJW6UD%2F20230723%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230723T132516Z&X-Amz-Expires=15668&X-Amz-Signature=81e31c0c8657011553b3e1e1b1069ddcfec726705fe1d95da1be023619b9eee8&X-Amz-SignedHeaders=host&response-expires=Sun%2C%2023%20Jul%202023%2017%3A46%3A24%20GMT" alt="logo" />
                    </div>
                    <div className='divcontainer'>
                        <img className='classreception' src="https://media.istockphoto.com/id/955148182/vector/customer-at-reception-young-woman-receptionist-standing-at-reception-desk-modern-vector.jpg?s=612x612&w=0&k=20&c=a-AljhO_GF9STsyajEkZIFNHOMhUwjtdooYLJQZMQec=" alt="images" />
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