import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center bg-body-secondary vh-100'>
    <div className='shadow p-3 mb-5 bg-light rounded-1 w-25'>
    <h2>Login</h2>
        <form>
            <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='text' placeholder='Enter Email' name='email' autoComplete='off' className='form-control rounded-0'/>
            </div>
            <div className='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='text' placeholder='Enter Password' name='password' autoComplete='off' className='form-control rounded-0'/>
            </div>
            <button type='submit' className='btn btn-success border rounded-1 w-100'>Login</button>
        </form>
        <p>Create a new Account</p>
        <NavLink to='/' className='btn btn-default border rounded-1 w-100'>Register</NavLink>
    </div>
      
    </div>
  )
}

export default Login
