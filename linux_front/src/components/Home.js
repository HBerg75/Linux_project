import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-4 text-blue-500">Welcome to our platform</h1>
      <p className="text-xl mb-8 text-center px-4">Our web application allows you to manage users, view  and comments, and connects various data together.</p>
      {/* The two links below redirect to other pages */}
      <div className="space-x-4">
        <Link to="/users" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View the list of users
        </Link>
        <Link to="/posts" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View the list of posts
        </Link>
      </div>
    </div>
  );
}

export default Home;
