import React, { useState } from 'react';

const SignupForm = ({ signup }) => {
  const [username, setUsername] = useState("newuser"); // Hardcoded for development
  const [password, setPassword] = useState("password"); // Hardcoded for development

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm; 