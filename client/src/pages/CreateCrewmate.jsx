import React, { useState } from 'react';
import { supabase } from '../client';
import Sidebar from '../Components/Sidebar';
import { useNavigate } from 'react-router-dom'; 
import { NameInput, SpeedInput, ColorSelection } from '../Components/Form'; 
// import './CreateCrewmate.css';

function CreateCrewmate() {
  const [fields, setFields] = useState({ name: '', speed: '', color: '' });
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const makeCrewmate = async (e) => {
    e.preventDefault();

    if (!fields.name || !fields.speed || !fields.color) {
      alert('Please fill in all fields');
      return;
    }

    const { error } = await supabase
      .from('Posts')
      .insert([{ name: fields.name, speed: fields.speed, color: fields.color }])
      .select();

    if (error) {
      alert("Couldn't create crewmate; please try again");
    } else {
      alert('Crewmate successfully created');
      navigate('/crewmate-gallery');
    }
  };

  return (
    <div>
      <Sidebar />
      <h1>Create a New Crewmate</h1>
      <div className="container">
        <form className="form" onSubmit={makeCrewmate}>
        <NameInput fields={fields} handleChange={handleChange} />
        <SpeedInput fields={fields} handleChange={handleChange} />
        <ColorSelection fields={fields} handleChange={handleChange} />
        <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default CreateCrewmate;
