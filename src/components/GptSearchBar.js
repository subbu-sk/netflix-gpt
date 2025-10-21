import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
  const langkey = useSelector((store)=>store.config.lang);
  console.log(langkey)

  return (
    <div className='pt-[10%] flex justify-center'> 
        <form className='w-1/2 grid grid-cols-12 bg-black '>
            <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[langkey].gptSearchPlaceholder}/>
            <button className='py-2 px-4 m-3 bg-red-700 text-white col-span-3'>{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar