import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/list'>List</Link></li>
        <li><Link to='/good-reads'>Good Reads App</Link></li>
      </ul>
    </nav>
  </header>
)

export default Home;
