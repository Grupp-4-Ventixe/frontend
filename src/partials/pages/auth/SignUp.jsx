import React, { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    try {
      await signUp(formData)
      navigate('/login') 
    } catch (err) {
      setError(err.message || 'Signup failed.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-3xl shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold mb-2 text-center">Create an Account</h1>

        <form onSubmit={handleSubmit}>
          <fieldset className="bg-base-200 border-base-300 mx-auto rounded-box w-xs border p-4">

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input mb-4"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input mb-4"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <label className="label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="input mb-1.5"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

           <div className="flex flex-col items-center">
            <button
              type="submit"
              className="btn mt-4 text-white w-full"
              style={{ backgroundColor: '#f26cf9' }}
            >
              Sign Up
            </button>

            <Link to="/login" className="btn btn-link mt-2">
              I Already Have An Account
            </Link>
          </div>
          </fieldset>
        </form>
      </div>
      <footer className="footer footer-horizontal footer-center  text-neutral-content rounded p-10">
 
 <nav>
   <div className="grid grid-flow-col gap-4">
     <a>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         className="fill-current">
         <path
           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
       </svg>
     </a>
     <a>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         className="fill-current">
         <path
           d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
       </svg>
     </a>
     <a>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         className="fill-current">
         <path
           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
       </svg>
     </a>
   </div>
 </nav>
 <aside>
   <p>Copyright Â© {new Date().getFullYear()} - All right reserved by Ventixe Ltd</p>
 </aside>
</footer>
    </div>
  )
}

export default SignUp
