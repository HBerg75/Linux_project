import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/comments',
      );

      setComments(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4 mt-4">
      <h2 className="text-2xl mb-4">Comments</h2>
      <ul className="space-y-2">
        {/* La boucle map itère sur chaque commentaire dans le tableau "comments" */}
        {comments.map(comment => (
          <li key={comment.id} className="p-4 rounded shadow bg-white">
            <h3 className="text-xl">{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
