import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign Un</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" name='username' placeholder='username' className='border p-3 rounded-lg' id='username' />
        <input type="email" name='email' placeholder='email' className='border p-3 rounded-lg' id='email' />
        <input type="password" name='password' placeholder='password' className='border p-3 rounded-lg' id='password' />
        <button className='border bg-slate-700 text-white rounded-lg p-3 uppercase disabled:opacity-80 hover:opacity-95'>Sign up</button>
      </form>
      <div className='gap-2 flex mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
