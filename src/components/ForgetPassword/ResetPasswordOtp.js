import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import Northflex_logo from "../../WebsiteMaterial/images/Northflex_logo.jpg"
import {useNavigate} from 'react-router-dom'

export default function EnterOtp(props) {
    const location = useLocation();

    const [otpState, setOtpState] = useState(null);

    const navigate = useNavigate(); 


    const handleSubmit = async(e)=>{
      e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/verifyotp", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({email: location.state.emailState, otp: otpState})

        });
        console.log(location.state.emailState, otpState);
        const json = await response.json();
        if(json.success){
            // Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
            navigate('/setpassword', {state: {email:location.state.emailState}});
        }
        else{
            alert('Please enter the valid otp.');
        }
        console.log(json);
    }

    const onChange=(e)=>{
      setOtpState(e.target.value);
      console.log(otpState)
    }

  return (
    <>
    <div id="otp_container">
      <div id="otp_create">
        <img src={Northflex_logo} alt=".." id="logo_otp_create"/>
        <h2 id="otp_heading">Verify your Email</h2>
        <p>Sent to your registered Email id</p>
          <input type="text" name="otp" onChange={onChange}  id="create_input" placeholder='Enter Otp'/>
          <button onClick={handleSubmit} id="create_button">Submit</button>
      </div>
    </div>
  </>
  )
}
