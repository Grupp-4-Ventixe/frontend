import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { Link } from 'react-router-dom';

const SignUp = () => {
  try {
    const { signUp } = useAuth()
  }
  catch { }
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-3xl shadow-md max-w-md w-full">

        <h1 className="text-2xl font-bold mb-2 text-center">Create an Account</h1>

        <fieldset className="fieldset bg-base-200 border-base-300 mx-auto rounded-box w-xs border p-4">

          <label className="label">Email</label>
          <input type="email" className="input mb-4" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input mb-4" placeholder="Password" />

          <label className="label">Confirm Password</label>
          <input type="password" className="input mb-1.5" placeholder="Confirm Password" />

          <button type="submit" className="btn mt-4 text-white" style={{ backgroundColor: '#f26cf9' }}>Sign Up</button>

          <Link to="/login" className="btn btn-link">
            I Already Have An Account
          </Link>

          

        </fieldset>
        
      </div>
    </div>



  )
}

export default SignUp