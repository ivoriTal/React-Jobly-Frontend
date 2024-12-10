import React, { useEffect, useState } from 'react';
import JoblyApi from '../api';

const Profile = ({ currentUser, setCurrentUser }) => {
  const [formData, setFormData] = useState({
    username: currentUser.username,
    email: currentUser.email || '', // Assuming email is part of user data
    // Add other fields as necessary
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData({
      username: currentUser.username,
      email: currentUser.email || '',
    });
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = await JoblyApi.updateUserProfile(currentUser.username, formData);
      setCurrentUser(updatedUser); // Update the current user state
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err[0]); // Assuming the error is an array
    }
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled // Assuming username cannot be changed
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {/* Add more fields as necessary */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default Profile; 