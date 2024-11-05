import React, { useState } from 'react';
import  {supabase} from '../client'
import './CreateCrewmate.css'

const CreateCrewmate = () => {

    const [post, setPost] = useState({title: "", author: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
      event.preventDefault();
    
      await supabase
        .from('Posts')
        .insert({
            name: post.name, 
            speed: post.speed, 
            aesthetics: post.aesthetics})
        .select();
    
      window.location = "/";
    }

    return (
        <div>
            <form>
                <label for="title">Title</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label for="speed">Author</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange} /><br />
                <br/>

                <label for="aesthetics">Aesthetics (ie. color, skin, hat, visors, pets)</label><br />
                <textarea rows="5" cols="50" id="aesthetics" onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" onClick={createPost} />
            </form>
        </div>
    )
}

export default CreateCrewmate