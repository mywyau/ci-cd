// src/pages/BlogPage.tsx
import React from 'react';
import BlogList from '../BlogList';
import Copyright from '../Copyright';
import Navbar from '../NavBar';
import Title from '../title/Title';
import Button from '../Button';
import PostButton from '../PostButton';


const BlogPage: React.FC = () => {
  // Sample data for demonstration
  const posts = [
    { id: 1, title: 'First Post', excerpt: 'This is the first post.' },
    { id: 2, title: 'Second Post', excerpt: 'This is the second post.' },
    { id: 3, title: 'Third Post', excerpt: 'This is the third post.' },
  ];

  return (
    <div className="font-nunito min-h-screen bg-cambridge-blue">
      <header className="py-4">
        <Navbar />
        <Title />
      </header>
      <main className="container mx-auto p-4">
        <BlogList posts={posts} />
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="danger">Danger Button</Button>
        <PostButton />
      </main>
      <Copyright />
    </div>
  );
};

export default BlogPage;
