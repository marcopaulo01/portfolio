import React from "react";
import '../styles/Home.css'
import profileImage from '../assets/images/profile.png'
import wavingHand from '../assets/images/waving-hand.gif'

function Home(){
    return(
        <div className="home-background">
            <div className="profile-container">
                <div className="profile-text">
                    <p>Hi! Marco here! <img src={wavingHand} alt="waving hand" className="waving-hand"/></p>
                </div>
                <div className="profile-image">
                    <img src={profileImage} alt="Profile"/>
                </div>    
            </div>
        </div>
    );
}

export default Home;