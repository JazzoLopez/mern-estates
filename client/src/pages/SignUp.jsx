import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { newUser } from '../utils/api.js';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await newUser(formData);
    console.log(res)

    if (!res.success) {
      setError(res.message);
      setLoading(false);
      return;
    }
    navigate('/sign-in');
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} />
        <input type="email" name='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type="password" name='password' placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='border bg-slate-700 text-white rounded-lg p-3 uppercase disabled:opacity-80 hover:opacity-95 '>
          {loading ? 'Loading...' : 'Sign Up'}
        </button>
      </form>
      <div className='gap-2 flex mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
