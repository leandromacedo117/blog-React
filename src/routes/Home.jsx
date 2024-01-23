import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Home = () => {
  const[posts, setPosts] = useState([]);

  const getPosts =  async() => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts/");
      const data = res.data;

      setPosts(data)

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() =>{
    getPosts()
  }, []);

  return (
    <div className="Home">
      <h1>Posts</h1>
      {posts.length === 0 ? (<p>Carregando posts...</p>) : (
        posts.map((post) => (
          <div className="posts" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link className='show-btn' to={`/posts/${post.id}`}>Veja mais</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default Home