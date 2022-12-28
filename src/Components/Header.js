import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'


const Header = () => {
    const {googleSignIn ,user,logout} = UserAuth();
    

    const handleGoogleSignIn = async () =>{
        try {
            await googleSignIn()
        }catch(err){
            alert(err.message)
        }
    }

    const handleLogout = async () =>{
        try{
        await logout()
        console.log('User logged out')
    }catch(err){
        console(err.message)
    }
    }

    const Profile = ({user}) =>{
        if(!user) { return (
            <>
            <button onClick={() => {handleGoogleSignIn()}} className='h-10 w-40 mr-2 rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 shadow-md shadow-black'>log in</button>
            </>
        )
        }else{ 
            return(
            <>
            <img referrerPolicy="no-referrer" src={user.photoURL}  className='h-10 w-10 border-gray-400 rounded-3xl shadow-md shadow-black mr-5 '/>
            <p className='h-10 w-40 sm:text-lg mr-2 text-xs mt-2 text-shadow-sm'>{user.displayName}</p>
            <button onClick={() => {handleLogout()}} className='h-10 sm:w-40 w-20 text-xs mr-2 rounded-md border border-transparent bg-black py-2 px-4 sm:text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 shadow-md shadow-black'>logout</button>
            </>
            )}
    }
    


  return (
    <div className='flex flex-col items-center sm:flex sm:flex-row sm:items-start h-21 sm:justify-between w-full'>
        <div className='h-[100px] w-[200px] '>
            <Link to={'/'}><img src='https://i.ibb.co/h2txzRB/logo.jpg' /></Link>
        </div>
        <div className='pt-8 flex'>
            <Profile user={user}/>
        </div>
    </div>
  )
}

export default Header
