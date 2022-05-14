import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom';
import EnterOtp2 from './ResetPasswordOtp';

import { useNavigate } from 'react-router-dom'

export default function EnterOtp() {
  const location = useLocation();

  const [emailState, setEmailState] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/resetpasswordotp", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email: emailState })
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth Token and redirect
      localStorage.setItem('token', json.authToken);
      navigate('/resetpasswordotp', { state: { emailState } })
    }
    else {
      alert('Error');
    }
    
  }
  const onChange = (e) => {
    setEmailState(e.target.value);
  }


  return (
    <div>
      Enter Email <input type="text" name="otp" onChange={onChange} />
      <button onClick={handleSubmit}>Send Otp</button>
      {/* <EnterOtp2 email={emailState} /> */}
    </div>
  )
}
