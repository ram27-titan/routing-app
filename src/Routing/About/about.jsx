import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  let navigate = useNavigate();
  return (
    <div className="main mt-5">
      <h2>THIS IS THE ABOUT PAGE</h2>
      <br />
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Change to Home Page
      </button>
    </div>
  );
};

export default About;
