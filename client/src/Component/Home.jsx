import React from "react";
import './Style/Home.css';
import Images from '../Component/Images/homeimage1.png';
// import {useNavigate } from "react-router-dom";

const Home =() => {

    
    // const searchbox = document.getElementsByClassName("inputdistrict");
    // searchbox.addEventListener("input", searchSuggestion);

    // function searchSuggestion(){
        // const getInputValue = document.getElementsByClassName("inputdistrict").value;
        // var requestOptions = {
        //     method: 'GET',
        // };
        // fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${getInputValue}&apiKey=7d015e40ebfb4caeb9fd445eaaf12e15`, requestOptions)
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result)
        //     })
        //     .catch(error => console.log('error', error));
    // }

    


    return(
        <div className="main-container">
            <div className="first-container">
                <div className="second-container">
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
            </div>
            <div className="third-conatainer">
                <div className="divimages">
                    <img src={Images} alt="mainlogo" className="classimage" />
                </div>
            </div>
            <div className="divcontent">
                    <h1 className="classcontent">"Welcome to the future of event management and organization! Simplify your event planning process and deliver exceptional experiences with our platform."</h1>
            </div>
            <div className="search-container">
                <div className="color-container">
                </div>
                <form action="">
                    <div className="divinput">
                        <input type="text" placeholder="Search District" className="inputdistrict" />
                        {/* <div className="emptysearch"></div> */}
                        <input type="text" placeholder="Serach Function" className="inputfunction" />
                        <input type="date" placeholder="Select Date" className="inputDate" />
                        <button className="buttonsearch">Search</button>
                    </div>
                </form>
            </div>
            <div className="about-container">
                <div className="about-class">
                <p className="about-paragraph">At Perfect Planners, We are passionate about crafting unforgettable experiences for our clients. With years of expertise in the industry, we take pride in seamlessly organizing a wide range of events, from corporate conferences to social gatherings. Our dedicated team of professionals works tirelessly to ensure every detail is meticulously planned and executed, leaving you free to enjoy a stress-free event. Trust us to transform your vision into reality and deliver exceptional, tailored solutions that leave a lasting impression on your guests. Let us be your partner in creating memorable moments that will be cherished for a lifetime.</p>
                </div>
            </div>
        </div>
    )

}




export default Home;