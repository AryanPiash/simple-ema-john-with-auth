import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import auth from '../../firebase_init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigat = useNavigate()

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleFormSubmit = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
        console.log('Sign In Successfuly.');
        }
    if (error) {
        console.log(error.message);
    }
  
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    if (user) {
        navigat(from, { replace: true });
    }

    return (
        <div className="form-container">
            <div>
                <h1 className='form-title'>Login</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Passowrd</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="password" required />
                    </div>
                    <p style={{color: 'red'}}>{error && error.message}</p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='form-link'>
                    New to Ema-John? <Link to='/signup'>Create New Account</Link>
                </p>
                <div className="form-or">
                    <div className='gray-line'></div>
                    <div className='text-or'>Or</div>
                    <div className='gray-line'></div>
                </div>
                <input className='google-signup' type="submit" value="Continue With Google" />
            </div>
        </div>
    );
};

export default Login;