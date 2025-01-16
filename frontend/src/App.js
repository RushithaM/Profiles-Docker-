import React, { useEffect, useState } from 'react';
import ProfileList from './components/ProfileList';
import './App.css';

const App = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/profiles')
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error('Error fetching profiles:', error));
  }, []);

  return (
    <div className="app">
      <header>
        <h1>Profile Explorer</h1>
        <p>Discover talented professionals in various fields.</p>
      </header>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default App;
