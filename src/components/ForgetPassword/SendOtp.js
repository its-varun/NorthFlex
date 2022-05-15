import React, { useState } from 'react'
import Northflex_logo from "../../WebsiteMaterial/images/Northflex_logo.jpg"
import { useNavigate } from 'react-router-dom'

export default function EnterOtp() {

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
    <>
    <div id="otp_container">
      <div id="otp_create">
        <img src={Northflex_logo} alt=".." id="logo_otp_create"/>
        <h2 id="otp_heading">Enter Email</h2>
        <p>Enter your registered Email id</p>
          <input type="text" name="otp" onChange={onChange}  id="create_input" placeholder='Email Id'/>
          <button onClick={handleSubmit} id="create_button">Submit</button>
      </div>
    </div>
  </>
  )
}
