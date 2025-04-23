import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'


const SignIn = () => {
  try {
    const { signIn } = useAuth()
  }
  catch { }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
<<<<<<< HEAD
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
         
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <fieldset className="fieldset ">
           
            <label className="label">
              <input type="checkbox" defaultChecked className="toggle" />
              Remember me
            </label>
        </fieldset>

          <button className="btn btn-secondary mt-4">Login</button>
      </fieldset>
      

        
      <div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">How do I create an account?</div>
  <div className="collapse-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </div>
</div>
<div tabIndex={0} className="collapse collapse-plus bg-base-100 border-base-300 border">
  <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm">
    Click on "Forgot Password" on the login page and follow the instructions sent to your email.
  </div>
</div>
        
      

      </div>
        
=======
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* Your form or content here */}
        <button className="btn btn-primary">Primary</button>


      </div>
>>>>>>> 2bc2c6c (feat: integrate Tailwind CSS for styling)
    </div>
  )
}

export default SignIn