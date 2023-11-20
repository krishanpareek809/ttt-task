import React from "react";
import { useState, useEffect } from "react";
import FeedCard from "./FeedCard";

function Feed() {
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        console.log(data.posts);
        setPosts(data.posts);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            {posts?.map((value) => (
                <FeedCard
                    id={value.id}
                    image={value.image}
                    name={value.name}
                    tags={value.tags}
                    message={value.body}
                    likeCount={value.reactions}
                />
            ))}
        </div>
    )
}

export default Feed;