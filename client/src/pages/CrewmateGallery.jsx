import React, { useState, useEffect } from 'react';
import  {supabase} from '../client';
import Sidebar from '../Components/Sidebar';
import Card from '../Components/Card';

const CrewmateGallery = (props) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(props.data);

        const fetchPost = async() => {
            const {data} = await supabase
            .from('Posts')
            .select()
            .order('created_at', { ascending: true })

            // set state of posts
            setPosts(data);
        }
        fetchPost()
    }, [props]);
    
    return (
        <div className="CrewmateGallery">
            <Sidebar/>
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} name={post.name} speed={post.speed} aesthetics={post.aesthetics}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default CrewmateGallery;