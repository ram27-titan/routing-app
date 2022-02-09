import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import profile from './wp.jpeg';

const Home1 = styled.header`
  padding-top: 5rem;
  text-align: center;
`;

const Img = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 5px solid white;
`;

const Home = () => {
  return (
    <Home1 id="home">
      <Img src={profile} className="img-fluid" alt="profile-img" />
      <h1>Ari Alamsyah</h1>
      <p>FullStack Website Developer</p>
    </Home1>
  );
};

export default Home;
