import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );

      setUsers(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl mb-4">Users</h2>
      <ul className="space-y-2">
        {/* le map itère sur chaque utilisateur dans le tableau "users" */}
        {users.map(user => (
          <li key={user.id} className="p-4 rounded shadow bg-white">
            <h3 className="text-xl">{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
