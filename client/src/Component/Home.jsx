import React from "react";
import './Style/Home.css';
import Images from '../Component/Images/homeimage1.png';
import image2 from '../Component/Images/profilelogo.png';
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
                            <img src={image2} alt="profilelogo" className="classprofilelogo" />
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
                        {/* <input type="text" placeholder="Search District" className="inputdistrict" /> */}
                        <select class="inputdistrict">
                            <option value="Select District">Select District</option>
                            <option value="Ariyalur">Ariyalur</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Coimbatore">Coimbatore</option>
                            <option value="Cuddalore">Cuddalore</option>
                            <option value="Dharmapuri">Dharmapuri</option>
                            <option value="Dindigul">Dindigul</option>
                            <option value="Erode">Erode</option>
                            <option value="Kallakurichi">Kallakurichi</option>
                            <option value="Kancheepuram">Kancheepuram</option>
                            <option value="Kanniyakumari">Kanniyakumari</option>
                            <option value="Karur">Karur</option>
                            <option value="Krishnagiri">Krishnagiri</option>
                            <option value="Madurai">Madurai</option>
                            <option value="Nagapattinam">Nagapattinam</option>
                            <option value="Namakkal">Namakkal</option>
                            <option value="Nilgiris">Nilgiris</option>
                            <option value="Perambalur">Perambalur</option>
                            <option value="Pudukkottai">Pudukkottai</option>
                            <option value="Ramanathapuram">Ramanathapuram</option>
                            <option value="Ranipet">Ranipet</option>
                            <option value="Salem">Salem</option>
                            <option value="Sivaganga">Sivaganga</option>
                            <option value="Tenkasi">Tenkasi</option>
                            <option value="Thanjavur">Thanjavur</option>
                            <option value="Theni">Theni</option>
                            <option value="Thoothukudi">Thoothukudi (Tuticorin)</option>
                            <option value="Tiruchirappalli">Tiruchirappalli</option>
                            <option value="Tirunelveli">Tirunelveli</option>
                            <option value="Tirupathur">Tirupathur</option>
                            <option value="Tiruppur">Tiruppur</option>
                            <option value="Tiruvallur">Tiruvallur</option>
                            <option value="Tiruvannamalai">Tiruvannamalai</option>
                            <option value="Tiruvarur">Tiruvarur</option>
                            <option value="Vellore">Vellore</option>
                            <option value="Viluppuram">Viluppuram</option>
                            <option value="Virudhunagar">Virudhunagar</option>
                        </select>

                        {/* <div className="emptysearch"></div> */}

                        {/* <input type="text" placeholder="Serach Function" className="inputfunction" /> */}
                        <select className="inputfunction">
                            <option value="Search Function">Search Function</option>
                            <option value="Tiruvarur">Marriage</option>
                            <option value="Birthday">BirthDay</option>
                            <option value="Concerts">Concerts</option>
                            <option value="Private Party">Private Party</option>
                        </select>
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