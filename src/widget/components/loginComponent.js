import React, {useState} from 'react';
import '../../style/login.css';

export default function Login({userLogin}) {
    const [email, setEmailAddress] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        userLogin({
          email,
          password,
          rememberMe: true
        });
    }
    return(
      <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input type="text" onChange={e => setEmailAddress(e.target.value)}/>
          </label>
          <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)} />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }