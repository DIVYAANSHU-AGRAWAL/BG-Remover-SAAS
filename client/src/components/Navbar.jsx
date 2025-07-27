import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  // Clerk hooks for authentication
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        <Link to='/'><img className='w-32 sm:w-44' src={assets.logo} alt="" /></Link>
         {/* Show UserButton if signed in, else show "Get Started" button */}
        {
          isSignedIn? <div><UserButton/></div>  : <button onClick={()=>openSignIn({})}className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full transition-all duration-500 hover:scale-105 '>Get Started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" /></button>
        }
        
    </div>
  )
}

export default Navbar


// useUser() is used to check if someone is signed in.

// UserButton is shown if user is logged in.

// useClerk().openSignIn() is triggered if user is not logged in, to show the sign-in modal.