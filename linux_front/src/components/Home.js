import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-5xl mb-4 text-blue-500">Bienvenue sur notre plateforme</h1>
      <p className="text-xl mb-8 text-center px-4">Notre application web vous permet de gérer les utilisateurs, consulter les articles et les commentaires et fait le lien entre les différentes données.</p>
      <div className="space-x-4">
        <Link to="/users" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Consulter la liste des utilisateurs
        </Link>
        <Link to="/posts" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Consulter la liste des articles
        </Link>
      </div>
    </div>
  );
}

export default Home;
