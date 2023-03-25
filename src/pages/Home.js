import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to our E-Learning Platform!</h1>
      <p>Here, you'll find all the resources you need to succeed in your courses.</p>
      <ul>
        <li><Link to="/courses">View Course Materials</Link></li>
        <li><Link to="/quizzes">Take Interactive Quizzes</Link></li>
        <li><Link to="/discussions">Join Discussion Forums</Link></li>
      </ul>
    </div>
  );
};

export default Home;
