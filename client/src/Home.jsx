import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to Employee Portal
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Manage your employee data with ease. Login or Register to get started.
        </p>
        <button className='h-10 w-10 bg-red-300 cursor pointer'>
          <Link to={'/logout'}>
            hi
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
