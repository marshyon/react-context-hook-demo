import React, { useState, useEffect } from 'react'
import { usePostsDispatch } from '../state/PostsContext.js';

export default function LoadPosts() {

    const [allPosts, setAllPosts] = useState([])
    const dispatch = usePostsDispatch();  
    const getPosts = async () => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const response = await fetch('http://localhost:3000/posts/all.json');
        const data = await response.json();
        return data;
    }

    const handleLoadPosts = () => {
        getPosts().then((data) => {
            setAllPosts(data);
        })
    }

    useEffect (() => {
        dispatch({
            type: 'load',
            posts: allPosts,
        });
    }, [allPosts, dispatch])

    return (
        <>
            <div>LoadPosts</div>

            <button onClick={() => handleLoadPosts()}>
                load
            </button>
        </>
    )
}
