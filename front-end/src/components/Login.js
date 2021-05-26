import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = () => {
 const [credentials, setCredentials] = useState({});

  const login = e => {
    e.preventDefault();
    axiosWithAuth().post('https://ft-potluck-planner-5.herokuapp.com/api/auth/login', credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
      })
  }

  const handleChange = e => {
      setCredentials(
       { ...credentials,
        [e.target.name]: e.target.value,}   
      )
  }

    return (
      <div>
        <form onSubmit={login}>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                id="username"
                value={credentials.username}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                value={credentials.password}
                onChange={handleChange}
            />
            <button>Log in</button>
        </form>
      </div>
    )
}

export default Login;