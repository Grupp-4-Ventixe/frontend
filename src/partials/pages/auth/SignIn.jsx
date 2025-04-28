import React from 'react'
import { useAuth } from '../../../contexts/AuthContext'
import { Link } from 'react-router-dom'

const SignIn = () => {
  const { signIn } = useAuth()

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        {/* Your form or content here */}
      </div>
    </div>
    

  )
}

export default SignIn
