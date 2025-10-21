import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import {toggleGptSearchView} from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice';


const Header = () => {

const dispatch=useDispatch();
const navigate=useNavigate();

const user=useSelector((store)=>store.user)
const showGptSearch =useSelector((store)=>store.gpt.showGptSearch)

  const handleSignOut=()=>{
    signOut(auth)
    .then(() => {})
    .catch((error) => {
  // An error happened.
  navigate("/error")
});
  }
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    
    const {uid,email,displayName,photoURL }= user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName, photoURL: photoURL }));
    navigate("/browse")
  } else {
    dispatch(removeUser());
    navigate("/")
  }
});

return ()=>unsubscribe();
},[])
 
const handleGptSearchClick =()=>{
  dispatch(toggleGptSearchView());
}
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }


  return (
    <div className='w-screen justify-between flex absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
        <img 
        className='w-40 '
        src={LOGO} alt='netflixlogo'/>

     {user && 
     (<div className='flex items-center '>
      {showGptSearch &&
       <select className='p-2 bg-gray-900 text-white'onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}

      <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>{showGptSearch ?  "Homepage" : "Gpt Search" }</button>
        <img className="w-8 h-8 m-2" alt="usericon" src={user?.photoURL}/>
        <button onClick={handleSignOut} className='text-white m-2 cursor-pointer'>Sign Out</button>
      </div>)}
    </div>
  )
}

export default Header
