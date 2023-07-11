import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/posts',
      );

      setPosts(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4 mt-4">
      <h2 className="text-2xl mb-4">Articles</h2>
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id} className="p-4 rounded shadow bg-white">
            <h3 className="text-xl">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
