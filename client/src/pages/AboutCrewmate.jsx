import React from 'react';
import Sidebar from '../components/Sidebar';
import './AboutCrewmate.css';

const About = () => {
  return (
    <div>
        <div><Sidebar/></div>
        <div className="about-container">
            <h1>Recipe Dashboard</h1>
            <p> Welcome to the Recipe Dashboard! </p>
            <h2>Features</h2>
            <ul>
                <li> Analyzes and filters categories such as cuisine, diet, and 
                    intolerances through search </li>
                <li> Present a comprehensive summary of the recipes, including statistics like 
                    mean ready time, mean servings, and average health score rating</li>
            </ul>
        </div>
    </div>
    
  );
};

export default AboutCrewmate;