import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return(
    <div>
    <h1> HATS PAGE </h1>
    <Link to="about">
      <h2> About Hats </h2>
    </Link>
    <Routes>
      <Route path="about/*" element={<AboutHats />} />
    </Routes>
  </div>
  );
};

const AboutHats = () => {
  return(
  <div>
    <h1> More information on hats </h1>
  </div>
  );
};

function App() {
  return (
 
      <div>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='shop/hats/*' element={<HatsPage />} />
  
        </Routes>
      </div>

  );
};

export default App;
