import pizza from "./images/pizza.png";
import React from 'react';
import './Home.css'
import '../Button.css'
import {NavLink} from "react-router-dom";
const Home = () => {
  
  return (
    <div className="home">
      <img className="hero" src={pizza}  alt="pizza" />
        <div className="title">
          <h1>Like What You See?</h1>
          <NavLink className = 'btn--medium btn--primary btn' to={'/menu'}>View Our Menu</NavLink>
        </div>
    </div>
  );
}
 
export default Home;
