import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import Northflex_logo from "../../WebsiteMaterial/images/Northflex_logo.jpg"
import {useNavigate} from 'react-router-dom'

export default function EnterOtp(props) {
    const location = useLocation();

    const navigate = useNavigate(); 

    const [credentials, setCredentials] = useState({password: ""});

    const handleSubmit = async(e)=>{
      e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/changepassword", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: location.state.email, password: credentials.password})

        });
        console.log(location.state.email, credentials.password);
        const json = await response.json();
        if(json.success){
            // Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
            navigate('/login');
        }
        else{
            alert('Error');
        }
        console.log(json);
    }

    const onChange=(e)=>{
      setCredentials({...credentials, [e.target.name]:e.target.value});
    }

  return (
    <>
      <div id="otp_container">
        <div id="otp_create">
          <img src={Northflex_logo} alt=".." id="logo_otp_create"/>
          <h2 id="otp_heading">Set Password</h2>
          <p>Enter your New Password</p>
            <input type="password" name="password" onChange={onChange}  id="create_input" placeholder='Enter password'/>
            <button onClick={handleSubmit} id="create_button">Submit</button>
        </div>
      </div>
    </>
  )
}
