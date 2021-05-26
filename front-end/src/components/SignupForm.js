import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from "react-router";


const SignUpForm = () => {
    const { push } = useHistory();
    const [formData, setFormData] = useState ({
        username: '',
        password: '',
  });

  const updateFormData = event =>
    setFormData ({
        ...formData,
        [event.target.name]: event.target.value,
    });

    //TODO Address 503 error and Request Method
    const register = e => {
        e.preventDefault();
        axiosWithAuth().post('https://ft-potluck-planner-5.herokuapp.com/api/auth/register', formData)
          .then(res => {
            console.log(`New user created as ${formData.username}`);
            push('/')
          })
          .catch(err => {
              console.log(err.message);
          })
      }

  const {username, password} = formData;

  return (
    <>
        <h2>Sign Up</h2>
        <form onSubmit={register}>
        <label htmlFor="username">Username</label>
        <input
            value={username}
            onChange={e => updateFormData (e)}
            placeholder="a username is required"
            type="text"
            name="username"
            required
        />
        <label htmlFor="Password">Password</label>
        <input
            value={password}
            onChange={e => updateFormData (e)}
            placeholder="a password is required"
            type="password"
            name="password"
            required
        />

        <button type="submit">Sign Up</button>
        </form>
    </>
  );
};

export default SignUpForm;