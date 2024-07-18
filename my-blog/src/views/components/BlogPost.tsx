// src/pages/BlogPost.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Copyright from './Copyright';
import Navbar from './NavBar';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Sample data for demonstration
  const post = {
    title: `Post ${id}`,
    content: `This is the content of post ${id}.`
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <Navbar />
      </header>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg">{post.content}</p>
      </main>
      <Copyright />
    </div>
  );
};

export default BlogPost;
