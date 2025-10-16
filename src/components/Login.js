import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser } from '../utils/userSlice'
import { USER_AVATAR } from '../utils/constants';



const Login = () => {
  const dispatch=useDispatch();
const [isSignInForm,setIsSignForm] = useState(true);
const[errorMessage,setErrorMessage]=useState(null);
const email=useRef(null);
const password=useRef(null);
const name=useRef(null);


const handleButttonClick=()=>{

const message =checkValidateData(email.current.value,password.current.value);
setErrorMessage(message);
if(message)return;

if(!isSignInForm){
  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
  updateProfile(user, {
  displayName: name.current.value, 
  photoURL:USER_AVATAR,
}).then(() => {
  const {uid,email,displayname,photoURL }= auth.currentUser;
   dispatch(addUser({uid:uid,email:email,displayname:displayname, photoURL: photoURL }));
 
}).catch((error) => {
  setErrorMessage(error.message)
});
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(error+"-"+errorMessage)
   
    // ..
  })
} else{
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     setErrorMessage(error+"-"+errorMessage)
     
  });
  }


}

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
      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">

      <h1 className='font-bold text-white text-3xl py-4 m-4 rounded-lg'>{isSignInForm ?"Sign In" : "Sign Up"}</h1>
      {!isSignInForm && <input ref={name} type="text" placeholder='Full Name'className='p-2 my-4 w-full bg-gray-600 '/>}

        <input ref={email} type="text" placeholder='Email Address'className='p-2 my-4 w-full bg-gray-600  ' autoComplete="email"/>

        <input ref={password} type="password" placeholder='Password'className="p-2 my-4 w-full bg-gray-600 " autoComplete="current-password"/>

        <p className='font-bold text-red-500'>{errorMessage}</p>

        <button  className='p-4 my-6 bg-red-600 w-full rounded-lg 'onClick={handleButttonClick}> {isSignInForm ?"Sign In" : "Sign Up" }</button>


        <p className='text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ?"New to Netflix? Sign-Up Now" : "Already registered? Sign-In Now "}</p>
      </form>
      
    </div>
  )
}

export default Login
