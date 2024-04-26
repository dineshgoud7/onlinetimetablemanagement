import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
      "It does not matter how slowly you go as long as you do not stop. - Confucius",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
      "It always seems impossible until it's done. - Nelson Mandela",
      "The best way to predict the future is to create it. - Peter Drucker",
      "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  }, []); // Run this effect only once, on component mount

  return (
    <div className="home">
      <h1>Welcome to the Online Timetable Management System</h1>
      <p>
        Our system helps you efficiently manage and schedule academic classes, meetings, events, and more.
      </p>
      <div className="quote">
        <h2>Random Quote:</h2>
        <p>{randomQuote}</p>
      </div>
      <div className="features">
        <h2>Key Features:</h2>
        <ul>
          <li>Automated scheduling of classes, meetings, and events</li>
          <li>Resource allocation optimization</li>
          <li>Conflict resolution and avoidance</li>
          <li>Easy access to up-to-date schedules</li>
          <li>Centralized platform for all stakeholders</li>
        </ul>
      </div>
      <div className="get-started">
        <h2>Get Started:</h2>
        <p>Sign up or log in to start managing your timetables!</p>
        <Link to="/reg" className="signup-link">Sign Up</Link> {/* Link to the signup page */}
        <Link to="/log" className="login-link">Log In</Link> {/* Link to the login page */}
      </div>
      
    </div>
  );
};

export default Home;
