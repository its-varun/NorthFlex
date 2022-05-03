import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
export default function Signup() {
    const [credentials, setCredentials] = useState({name:"", email: "", password:""});
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const {name, email, password} = credentials;
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
    return (
        <>
            <div className="loginWrapper">
                <header className="section header">
                    <div className="trapezoid"></div>

                    <div className="header__text">
                        <h1>sup.</h1>
                        <p>Sign in or create a new account.</p>
                    </div>
                </header>
                <section className="section sign-up">
                    <div className="trapezoid"></div>
                    <form onSubmit={handleSubmit} className='loginForm'>
                        <input type="text" name="name" id="name" onChange={onChange} placeholder="Name" />
                        <input type="text" name="email" id="email" onChange={onChange} placeholder="Email" />
                        <input type="password" name="password" id="password" onChange={onChange} placeholder="Password" />
                        <button >Create Account</button>
                        <Link className='signupOrLogin' to='/login'><p className="opposite-btn2">Already have an account?</p></Link>

                    </form>
                </section>
            </div>
        </>
    )
}
