import React, {useState} from 'react'
import './Login.css';
import { Link , useNavigate} from 'react-router-dom';
export default function Login() {
    const [credentials, setCredentials] = useState({email: "", password:""});
    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
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
                <section className="section sign-in">
                    <form className='loginForm' onSubmit={handleSubmit}>
                        <input type="text" name="email" id="email" value={credentials.email} onChange={onChange} placeholder="Email" />
                        <input type="password" name="password" id="password" value={credentials.password} onChange={onChange} placeholder="Password" />
                        {/* <input type="button" className='btn btn-primary' onsubmi/> */}
                        <button>Sign In</button>
                        <Link className='signupOrLogin' to='/signup'><p className="opposite-btn1">Don't have an account?</p></Link>
                    </form>
                </section>
            </div>
        </>
    )
}
