import React, { useState, useEffect } from 'react';
import User from './User';

export default function GitHubProfileFinder() {
  const [userName, setUserName] = useState('utawasthi');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchGitHubUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const data = await response.json();
      if (data) {
        setUserData(data);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  const handleSubmit = () => {
    fetchGitHubUserData();
  };

  if (loading) {
    return <div>Loading Data !! Please Wait</div>;
  }

  if (error !== '') {
    return <div>Something error occurred: {error}</div>;
  }

  return (
    <div className='github-profile-container'>
      <h1>Search Git Hub Users</h1>
      <div className='input-wrapper'>
        <input
          name='search by username'
          type='text'
          placeholder='Search GitHub Username...'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button className = 'search-btn' onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User {...userData} /> : null}
    </div>
  );
}