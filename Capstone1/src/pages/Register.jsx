//Register import
import  { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import "./register.css"

// register state and submit set up 
function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post('/api/auth/register', { username, password });
        history.push('/login');
      } catch (error) {
        setError(error.response.data.message || 'An error occurred during registration');
      }
    };

    // return section starting with the username input return (
        <div className="register-container">
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>