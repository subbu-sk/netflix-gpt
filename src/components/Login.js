import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignForm] = useState(true)

const toggleSignInForm = ()=>{
setIsSignForm(!isSignInForm)
}
  return (
    <div>
      <Header/>
      <div className="absolute">
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/d44b8e7c-e52b-45bc-9568-7d009f91c9ee/web/IN-en-20250929-TRIFECTA-perspective_82a31bf9-6c15-4866-9ba4-fed503316d1d_large.jpg'
        alt='bg-img'></img>
      </div>
      <from className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">

      <h1 className='font-bold text-white text-3xl py-4 m-4 rounded-lg'>{isSignInForm ?"Sign In" : "Sign Up"}</h1>
      {!isSignInForm && <input type="text" placeholder='Full Name'className='p-2 my-4 w-full bg-gray-600 '/>}

        <input type="text" placeholder='Email Address'className='p-2 my-4 w-full bg-gray-600 '/>

        <input type="password" placeholder='Password'className="p-2 my-4 w-full bg-gray-600 "/>

        <button className='p-4 my-6 bg-red-600 w-full rounded-lg '> {isSignInForm ?"Sign In" : "Sign Up"}</button>
        <p className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix? Sign-Up Now" : "Already registered? Sign-In Now "}</p>
      </from>
      
    </div>
  )
}

export default Login
