import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import './EnterOtp.css'
import {useNavigate} from 'react-router-dom';
import Northflex_logo from "../WebsiteMaterial/images/Northflex_logo.jpg"

export default function EnterOtp(props) {
    const location = useLocation();

    const [otpState, setOtpState] = useState({otp: null,});

    const navigate = useNavigate(); 


    const handleSubmit = async(e)=>{
      e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/verifyotp", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: location.state.email, otp: otpState.otp})

        });
        console.log(location.state.email, otpState);
        const json = await response.json();
        if(json.success){
            // Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
            navigate('/');
        }
        else{
            alert('Please enter the valid otp.');
        }
        console.log(json);
    }

    const onChange=(e)=>{
      setOtpState({...otpState, [e.target.name]:e.target.value })
    }

  return (
    <>
      <div id="otp_container">
        <div id="otp_create">
          <img src={Northflex_logo} alt=".." id="logo_otp_create"/>
          <h2 id="otp_heading">Verify Email</h2>
          <p>Sent to your registered Email id</p>
            <input type="text" name="otp" onChange={onChange}  id="create_input" placeholder='Enter OTP'/>
            <button onClick={handleSubmit} id="create_button">Submit</button>
        </div>
      </div>
    </>
  )
}
