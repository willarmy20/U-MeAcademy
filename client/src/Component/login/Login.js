import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { CircularProgress } from "@material-ui/core";
import { Link } from 'react-router-dom';
import {login} from '../../actions/index'
import './login.css'

const Login = () => {

  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    //dispatch(signIn(parm1, parm2))
    //dispatch an action
    dispatch(login({
      email: email,
      passWord: passWord
    }, ()=>{
      console.log('user sign in succefully');
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
            <button className="loginButton" type="submit" >
              Submit
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register" className="link" >
            <button className="loginRegisterButton">Register Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );


};
export default Login;