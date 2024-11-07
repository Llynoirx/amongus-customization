import React from 'react';
// import './Form.css'


export function NameInput({ fields, handleChange }) {
  return (
    <>
      <label htmlFor="name">Name:</label> <br />
      <input
        type="text"
        name="name"
        value={fields.name}
        placeholder="Enter crewmate's name"
        onChange={handleChange}
      /> <br />
    </>
  );
}

export function SpeedInput({ fields, handleChange }) {
  return (
    <>
      <label htmlFor="speed">Speed (mph):</label> <br />
      <input
        type="number"
        name="speed"
        value={fields.speed}
        placeholder="Enter speed (mph)"
        onChange={handleChange}
      /> <br />
    </>
  );
}

export function ColorSelection({ fields, handleChange }) {
  return (
    <>
      <label>Color:</label> <br />
      {['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Orange', 'Pink', 'Rainbow'].map((colorOpt) => (
        <div key={colorOpt}>
          <input
            type="radio"
            name="color"
            value={colorOpt}
            checked={fields.color === colorOpt}
            onChange={handleChange}
          />
          <label htmlFor={colorOpt}>{colorOpt}</label>
        </div>
      ))}
    </>
  );
}
