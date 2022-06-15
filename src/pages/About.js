import React, { Component } from 'react';
import "./About.css";
import profile_picture from "../assets/IMG_6655.HEIC";
  
export default class About extends Component {
  render() {
    return (
      <div>
          <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src={profile_picture}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="Virali Patel">Your Name</div>
        <div className="Hello, my name is Virali. I go to school
        at San Jose State University and my major is Computer Science.
        A fun fact about me is that I can speak three languages.">
          // Details about you goes here
        </div>
      </div>
    </div>
  </div> 
      </div>
    )
  }
}