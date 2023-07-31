import React from "react";
import './Style/Home.css';
import Images from '../Component/Images/homeimage1.png';
// import {useNavigate } from "react-router-dom";

const Home =() => {
    
    return(
        <div className="main-container">
            <div className="second-container">
                {/* <div className="imagelogo">
                    <img src={Images} alt="image" className="classimagelogo"/>
                </div> */}
                <div className="headinlogo">
                    <h2 style={{color:'white',fontSize: '40px'}} >Perfect Planners</h2>
                </div>
                <div className="navdiv">
                    <button className="homebtn">Home</button>
                    <button className="Aboutbtn">About Us</button>
                    <button className="servicebtn">Service</button>
                    <button className="Contactbtn">Contact Us</button>
                </div>
            </div>
            <div className="third-conatainer">
                <div className="divimages">
                    <img src={Images} alt="image" className="classimage" />
                </div>
            </div>
            <div className="divcontent">
                    <h1 className="classcontent">"Welcome to the future of event management and organization! Simplify your event planning process and deliver exceptional experiences with our platform."</h1>
                </div>
        </div>
    )

}




export default Home;