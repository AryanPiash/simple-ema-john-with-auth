import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const Shipment = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
    const [error,setError] = useState('')
    const [user] = useAuthState(auth)

    const handleNameBlur = event => {
        setName(event.target.value)
    }
   
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneBlur = event => {
        setPhone(event.target.value)
        
    }
    const handleFormSubmit = event => {
        event.preventDefault()
        const shippment = {name,address,phone}
        console.log(shippment);
    }

    return (
        <div className="form-container">
            <div>
                <h1 className='form-title'>Shipping Information</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="Name" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="Email" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="Address" id="" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Phone</label>
                        <input onBlur={handlePhoneBlur} type="number" name="Phone" id="" required />
                    </div>
                    <p style={{color:'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
                
            </div>
        </div>
    );
};

export default Shipment;