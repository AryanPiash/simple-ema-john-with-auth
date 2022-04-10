import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init'

const SignUp = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
    const navigat = useNavigate()

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value)
        
    }
    const handleFormSubmit = event => {
        event.preventDefault()
        console.log(email,password);
        createUserWithEmailAndPassword(email,password)
        console.log('Sign In Successfuly.');
        navigat('/')
    }
    return (
        <div className="form-container">
            <div>
                <h1 className='form-title'>Sign Up</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="Email" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Passowrd</label>
                        <input onBlur={handlePasswordBlur} type="password" name="Password" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Passowrd</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="Password" id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='form-link'>
                    Already Have an Account? <Link to='/signup'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;