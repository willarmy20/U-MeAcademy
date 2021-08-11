import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import {register} from '../../actions/index';
import {useHistory} from 'react-router-dom';


const Register = () => {
    const [email, setEmail] = useState('');  
    const [userName, setUserName] = useState('');  
    const [passWord, setPassWord] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
    
    e.preventDefault();

    //collect information from form
    //dispatch signUp action
    //dispatch(signUp({}, cb))
    dispatch(register({
      email: email,
      passWord: passWord,
      userName: userName,

    }, ()=>{
      history.push('/')
    }))
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">U&ME ACADEMY</h3>
          <span className="loginDesc">
          The How-To manual for coders.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Username"
              required
              value={userName} onChange={e=>setUserName(e.target.value)}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              value={email} 
              onChange={e=>setEmail(e.target.value)}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              value={passWord} 
              onChange={e=>setPassWord(e.target.value)}
              className="loginInput"
              type="password"
              minLength="6"
            />
            
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/login" className="link" >
            <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;