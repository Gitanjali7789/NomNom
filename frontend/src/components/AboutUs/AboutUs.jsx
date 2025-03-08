import React from 'react';
import './AboutUs.css';
import foodImage from 'C:/Users/gitan/Downloads/delicious-spaghetti-dish-with-fresh-ingredients-pan-with-transparent-background_84443-25952-Photoroom.png'; // Adjust the path as necessary
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="text-section">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>NomNom</strong>, your go-to food delivery service dedicated to bringing delicious meals right to your doorstep! 
          We believe that great food should be accessible to everyone, and that’s why we partner with local restaurants to offer a diverse menu that caters to all tastes and preferences.
        </p>
        <p>
          Our mission is to make your dining experience as convenient and enjoyable as possible. Join the NomNom family today and experience the joy of hassle-free food delivery!
        </p>
      </div>
      <div className="image-section">
        <img src={foodImage} alt="Delicious food" />
      </div>
    </div>
  );
};

export default AboutUs;