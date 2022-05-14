import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';

import {useNavigate} from 'react-router-dom'

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
    <div>
        Enter OTP <input type="text" name="otp" onChange={onChange} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
