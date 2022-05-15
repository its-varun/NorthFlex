import React, { useState } from 'react'
import './Login.css'
import login_image from "../WebsiteMaterial/images/login_image.png"
import signup_image from "../WebsiteMaterial/images/login_image.svg"
import logo from "../WebsiteMaterial/images/Northflex_logo.jpg"
import { Link , useNavigate} from 'react-router-dom'


export default function Login2() {
  const [state, setState] = useState('login');

    const showLogin = () => {
        setState('login');
    }
    const showSignup = () => {
        setState('signup');
    }
    const [credentials, setCredentials] = useState({email: "", password:""});
    let navigate = useNavigate();

    const handleLogin = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})

        });
        console.log(credentials.email, credentials.password);
        const json = await response.json();
        if(json.success){
            // Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
            navigate('/');
        }
        else{
            alert('Please enter the valid credentials');
        }
        console.log(json);
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value}); // This took 2 hours. Don't put [] over e.target.value.
    }
    const [credentials1, setCredentials1] = useState({name:"", email: "", password:""});
    let navigate1 = useNavigate();
    const handleSignup = async (e)=>{
        e.preventDefault();
        const {name, email, password} = credentials1;
        const response = await fetch("http://localhost:5000/api/auth/createaccount", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({name, email, password})

        });
        console.log(email, password);
        const json = await response.json();
        if(json.success){
            // Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
            navigate1('/enterotp', {state:{email}});
            
        }
        else{
            alert('An account already exist with this email.');
        }
        console.log(json);  
    }

    const onChange1 = (e)=>{
        setCredentials1({...credentials1, [e.target.name]: e.target.value}); // This took 2 hours. Don't put [] over e.target.value.
    }

  return (
    <>
      <div style={{ 'display': `${state === 'login' ? 'block' : 'none'}` }}>
          <div id="login2_login" >
              <div id="login_form"  >
                <div>
                  <Link to="/"><img src={logo} id="logo" alt=".../"/></Link>
                  <h1 className='login2_heading'>
                    Sign in
                  </h1>
                  <form onSubmit={handleLogin}>
                      <input type="text" name="email" className="login2_input" value={credentials.email} onChange={onChange} placeholder="Email"/> 
                      <input type="password" name="password" className="login2_input" value={credentials.password} onChange={onChange} placeholder='Password'/>
                      <button className="login2_button" >SIGN IN</button>
                      <Link to="/sendotp" className="login2_tell"><p > Forget Password?</p></Link>
                      <p className="login2_tell"  onClick={showSignup} >New to NorthFlex? Create Account </p>
                  </form>
                </div>
              </div>
              <div id="details_login">
                <div>
                  <h1 className='login2_heading'>Welcome Back !</h1>
                  <p className="login2_para">
                  To keep connected with us please login with your personal info
                  </p>
                  <img src={login_image}  id="login_image" alt=".../"/>
                </div>
              </div>
          </div>
        </div>

        <div style={{ 'display': `${state === 'signup' ? 'block' : 'none'}` }}>
          <div id="login2_signup"  >
              <div id="details_login">
                <div>
                  <h1 className='login2_heading'>Hello!</h1>
                  <p className="login2_para">
                  Enter your personal details and start your job journey with us
                  </p>
                  <img src={signup_image} alt="..." id="signup_image"/>
                </div>
              </div>
              <div id="login_form">
                <div>
                <Link to="/"><img src={logo} id="logo"  alt=".../"/></Link>
                  <h1 className='login2_heading'>
                    Sign Up
                  </h1>
                  <form onSubmit={handleSignup}>
                    <input type="text"  name="name" className="login2_input" onChange={onChange1} placeholder='Name'/> 
                    <input type="email" name="email" className="login2_input" onChange={onChange1} placeholder='Email'/> 
                    <input type="password" name="password" className="login2_input" onChange={onChange1} placeholder='Password'/>

                    <button className="login2_button">SIGN UP</button>
                    <p className="login2_tell"  onClick={showLogin}>Already have a Account on NorthFlex? </p>
                  </form>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}
