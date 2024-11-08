import React, { useEffect, useState } from 'react';
import  {supabase} from '../client';
import Card from '../Components/Card';
// import './CrewmateGallery.css'
import Sidebar from '../Components/Sidebar';

const CrewmateGallery = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async() => {
            const { data, error } = await supabase
                .from('Posts')
                .select();
            
            if (error) {
                console.error(error);
            }
    
            console.log(data); // Log the fetched data
    
            setPosts(data);
        }
        fetchPost()
    }, [props]);
    
    return (
        <div>
            <Sidebar />
            <div className="CrewmateGallery">
                { posts && posts.length > 0 ?
                posts.map((post) => 
                    <Card 
                        key={post.id} 
                        id={post.id} 
                        name={post.name}
                        speed={post.speed}
                        color={post.color}
                    />
                ) : <h2>{'No Crewmates Yet 😞'}</h2> }
            </div>  
        </div>
    )
}

export default CrewmateGallery;