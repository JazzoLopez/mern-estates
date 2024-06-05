import React from 'react'
import { Link } from 'react-router-dom'

export default function SignIn() {
  return (
    <div>SignIn
      <div className='gap-2 flex mt-5'>
        <p>no account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-500'>Sign up</span>
        </Link>
      </div>
    </div>
    
  )
}
