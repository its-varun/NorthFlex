import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';

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
    <div>
        Enter New Password <input type="password" name="password" onChange={onChange} />
        <button onClick={handleSubmit}>Change Password</button>
    </div>
  )
}
