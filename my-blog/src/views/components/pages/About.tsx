// src/pages/About.tsx
import React from 'react';
import Copyright from '../Copyright';
import Navbar from '../NavBar';

const About: React.FC = () => {
  return (
    <div className="font-nunito min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">About</h1>
        <div className="flex justify-right items-top h-screen bg-white">
          <div className="text-2xl bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
            <p>
              Heya
            </p>
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default About;
