import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ id, name, speed, color }) => {
  // console.log('Card Props:', { id, name, speed, color });
  return (
    <div className="card">
      <p>Name: {name}</p>
      <p>Speed: {speed}</p>
      <p>Color: {color}</p>
      <Link to={`/crewmate/${id}`} className="card-link">View</Link> 
    </div>
  );
}

export default Card;
