import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDetail = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsResult = await axios(
        'https://jsonplaceholder.typicode.com/posts',
      );
      
      const commentsResult = await axios(
        'https://jsonplaceholder.typicode.com/comments',
      );

      const usersResult = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );

      setPosts(postsResult.data);
      setComments(commentsResult.data);
      setUsers(usersResult.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4 mt-4">
      <h2 className="text-2xl mb-4">Posts</h2>
      <ul className="space-y-2">
        {posts.map(post => {
          const user = users.find(user => user.id === post.userId);
          return (
            <li key={post.id} className="p-4 rounded shadow bg-white">
              <h3 className="text-xl">{post.title}</h3>
              <p>{post.body}</p>
              <p className="mt-2">Posted by: {user?.name}</p>
              <h4 className="text-lg mt-4">Comments:</h4>
              <ul>
                {comments.filter(comment => comment.postId === post.id).map(comment => (
                  <li key={comment.id} className="mt-2">
                    <p>{comment.body}</p>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default UserDetail;
