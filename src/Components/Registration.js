import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function Signup() {    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!name || !email || !password || !dob) {
            alert('Please fill out all fields');
            return;
        }

        // Check if email ends with "@gmail.com"
        if (!email.endsWith('@gmail.com')) {
            alert('Entered Email is Invalid');
            return;
        }

        // All fields are filled and email is valid, proceed with signup
        axios.post("http://localhost:3001/register", { name, email, password, dob })
        .then(result => {
            console.log(result);
            navigate("/login");
        })
        .catch(err => console.log(err));
    }

    return (
        <div className="login-container"> {/* Apply styles for login container */}
            <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                <div className="bg-white p-3 rounded w-25 login-form"> {/* Apply styles for login form */}
                    <h2><center>Sign Up</center></h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name">
                                <strong>Name</strong>
                            </label>
                            <input
                                type="text"
                                placeholder='Enter Name'
                                autoComplete='off'
                                name='name'
                                className='form-control rounded-0'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">
                                <strong>Email</strong>
                            </label>
                            <input
                                type="text"
                                placeholder='Enter Email'
                                autoComplete='off'
                                name='email'
                                className='form-control rounded-0'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">
                                <strong>Password</strong>
                            </label>
                            <input
                                type="password"
                                placeholder='Enter Password'
                                name='password'
                                className='form-control rounded-0'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dob">
                                <strong>Date of Birth</strong>
                            </label>
                            <input
                                type="date"
                                placeholder='Enter Date of Birth'
                                name='dob'
                                className='form-control rounded-0'
                                value={dob}
                                onChange={(e) => setDob(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success w-100 rounded-0">
                            Sign Up
                        </button>
                    </form>
                    <p>Already have an account?</p>
                    <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
