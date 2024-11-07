import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import Sidebar from '../Components/Sidebar';
import { NameInput, SpeedInput, ColorSelection } from '../Components/Form';  
import './CrewmateDetails.css';

function CrewmateDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [fields, setFields] = useState({ name: '', speed: '', color: '' });

  useEffect(() => {
    const fetchCrewmate = async () => {
      setLoading(true);
      const { data, error } = await supabase.from('Posts').select('*').eq('id', id).single();
      if (error) {
        console.error('Error fetching crewmate:', error.message);
      } else {
        setFields({ name: data.name, speed: data.speed, color: data.color });
      }
      setLoading(false); 
    };
    fetchCrewmate();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    const { error } = await supabase.from('Posts').update(fields).eq('id', id);
    if (error) {
      alert('Failed to update crewmate; please try again');
    } else {
      alert('Crewmate successfully updated!');
      setIsEditing(false);
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase.from('Posts').delete().eq('id', id);
    if (error) {
      alert('Failed to delete crewmate; please try again');
    } else {
      alert('Crewmate deleted successfully!');
      navigate('/crewmate-gallery'); 
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  if (loading) return <p>Loading crewmate...</p>;

  return (
    <div>
      <Sidebar />
      <h1>{isEditing ? 'Edit Crewmate' : 'Crewmate Details'}</h1>
      <div className="container">
        {/* Edit Mode Form */}
      {isEditing ? (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <NameInput fields={fields} handleChange={handleChange} />
          <SpeedInput fields={fields} handleChange={handleChange} />
          <ColorSelection fields={fields} handleChange={handleChange} />

          <input type="button" value="Save Changes" onClick={handleUpdate} className="update-button" />
          <input type="button" value="Cancel" onClick={handleEditToggle} className="cancel-button" />
        </form>
      ) : (
        // View Mode: Display crewmate details
        <div>
          <h2>Crewmate: {fields.name}</h2>
          <p><strong>Speed:</strong> {fields.speed} mph</p>
          <p> <strong>Color:</strong> {fields.color}</p>
          <input
            type="button"
            value="Edit Crewmate"
            onClick={handleEditToggle}
            className="edit-button"
          />
          <input
            type="button"
            value="Delete Crewmate"
            onClick={handleDelete}
            className="delete-button"
          />
        </div>
      )}
      </div>
    </div>
  );
}

export default CrewmateDetails;
