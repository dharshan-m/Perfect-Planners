import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '../Component/Images/Perfect Planners.png';
import Images from '../Component/Images/signupimage.jpeg';

import './Style/Signup.css'

function Signup() {

  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const emailHandle = (e) => {
    setEmail(e.target.value);

    

  
  }

  const passwordHandle = (e) => {
    setPassword(e.target.value);
  }
  const fNameHandle = (e) => {
    setFname(e.target.value);
  }

  const lNameHandle = (e) => {
    setLname(e.target.value);
  }

  const repasswordHandle = (e) => {
    setRepassword(e.target.value);
  }


  //validation

  const validateFName = (fname) => {
    return lname.length >= 1 && lname.length <= 15;
  }

  const validateLName = (lname) => {
    return fname.length >= 1 && fname.length <= 15;
  }
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail("");

    return emailPattern.test(email);
  }

  const validatePassword = (password) => {
    if(password.length===0)
    {
      alert("Enetr the password");
    }
    return password.length >= 8;
  }
  const validateRePassword = (repassword) => {
    return repassword === password;
  }




  const handleSignup = (e) => {
    // e.preventdefault();
    e.preventDefault();

    if (validateFName(fname)) {
      if (validateLName(lname)) {
        if (validateEmail(email)) {
          if (validatePassword(password)) {
            if (validateRePassword(repassword)) {
              console.log(fname, lname, email, password, repassword);
              navigate('/login');
              

            

              

//             

            }
            else {
              // alert('password not matched!');
              document.getElementById('signup_error').innerHTML = 'Password did not match';
            }
          }
          else {
            // alert('password must be atleast 8 characters');
            document.getElementById('signup_error').innerHTML = 'password must be atleast 8 characters';
          }



        }
        else {
          document.getElementById('signup_error').innerHTML = 'Enter the valid email';

        }
      }
      else {
        document.getElementById('signup_error').innerHTML = 'Enter the proper name';

      }



    }
    else {
      document.getElementById('signup_error').innerHTML = 'Enter the proper name';

    }
  }

  return (
    <div className='signup_container'>
    


      <form action="" onSubmit={handleSignup} className='signup_form'>
        <span className="signup_log" >SIGNUP</span>
        <div className='firstlogo'>
          <img className='classmainlogo' src={logoImage} alt="logo" />
        </div>
        <div className='divimage2main'>
          <img src={Images} alt="classimages2" className='classimages2' />
        </div>
        <div className='divsignup'>
          <h3 className='classignup'>Unlock exclusive access and join our community by SignUp up today.</h3>
        </div>

        {/* <label htmlFor="user_firstName">First Name :</label> */}
        <input type="text" className='user_firstName' id='user_firstName' onChange={fNameHandle} value={fname} placeholder='Enter First Name*' /> <br />

        {/* <label htmlFor="user_lastName">Last Name :</label> */}
        <input type="text" className='user_lastName' id='user_lastName' onChange={lNameHandle} value={lname} placeholder='Enetr Last Name*' /> <br />
        {/* <label htmlFor="user_email">E-mail :</label> */}
        <input type="email" className='user_email' id='user_email' onChange={emailHandle} value={email} placeholder='Enter Email address*' /><br />


        {/* <label htmlFor="user_password">Password :</label> */}
        <input type="password" className='user_password' id='user_password' onChange={passwordHandle} value={password} placeholder='Enter password*' /><br />

        {/* <label htmlFor="user_repassword">Password :</label> */}
        <input type="password" id='user_repassword' className='user_repassword' onChange={repasswordHandle} value={repassword} placeholder='Re-Enter Password*' /><br />

        <span className='signup_error' id='signup_error'></span><br />
        <button type='submit' id='user_signupbtn' className='user_submit'>SIGNUP</button> <br />

      </form>

    </div>
  )
}

export default Signup;