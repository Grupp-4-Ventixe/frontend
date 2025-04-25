import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { Link } from 'react-router-dom'


const SignIn = () => {
  try {
    const { signIn } = useAuth()
  }
  catch { }

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
<<<<<<< HEAD
<<<<<<< HEAD
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
=======
=======
>>>>>>> 755a50fa2179b21c2e6c86e6fed53961a4fdcd6e
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-3xl shadow-md max-w-sm ">
        
        <h2 className="text-2xl text-center font-bold mb-4">Sign In</h2>    
<<<<<<< HEAD
>>>>>>> 755a50f (feat: enhance SignIn and Unauthorized pages with improved layout and functionality)
=======
>>>>>>> 755a50fa2179b21c2e6c86e6fed53961a4fdcd6e

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
               
          <label className="label mt-2">Email</label>
          <input type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input mb-2" placeholder="Password" />
          <fieldset className="fieldset ">
           
          <label className="label">
          <input type="checkbox" defaultChecked className="toggle toggle-sm" />
            Remember me
          </label>
        </fieldset>

          <button type="submit" 
                  className="btn mt-4 text-white"
                  style={{ backgroundColor: '#f26cf9' }}
                  
                  >Login</button>
          <div className="flex w-full flex-col">
          <Link to="/signup" 
                className="link link-info text-center text-sm mt-2">
                  Register Here
          </Link>

          <div className="divider">OR</div>

    </div>
        <button className="btn bg-black text-white border-black">
            <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
            Login with GitHub
        </button>

        <button className="btn bg-white text-black border-[#e5e5e5]">
          <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
          Login with Google
        </button>

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
        
<<<<<<< HEAD
=======
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* Your form or content here */}
        <button className="btn btn-primary">Primary</button>
=======
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
>>>>>>> 0c97169 (feat: enhance SignIn page with form fields and collapsible help sections)

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
<<<<<<< HEAD
>>>>>>> 2bc2c6c (feat: integrate Tailwind CSS for styling)
=======
        
>>>>>>> 0c97169 (feat: enhance SignIn page with form fields and collapsible help sections)
=======
>>>>>>> 755a50fa2179b21c2e6c86e6fed53961a4fdcd6e
    </div>
  )
}

export default SignIn