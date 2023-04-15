import React from 'react'
import Shoe from '../assets/shoe3.JPG'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const LoginForm = () => {
  return (
    
  
    <div className='flex justify-center items-center mx-auto h-screen bg-black bg-contain bg-center bg-no-repeat w-full h-[88vh]' style={{backgroundImage:`url(${Shoe})`, backgroundPosition: 'center', backgroundSize: 'contain' }}>
        <div className='w-96 p-6 bg-white bg-opacity-70 rounded-2xl shadow-5xl border'>
        
           <h1 className='text-3xl block text-center  font-semibold'>Login</h1>
           <hr className='mt-3 border-gray-400'></hr> 

           <div className='mb-3 mt-3'>
            <label className='font-medium mb-2 flex'>Username</label>
            <input type='text' placeholder='Username' className='w-full input-black border rounded-md bg-transparent border-gray-500 p-3 '/>
           </div>

           <div className='mb-3'>
            <label className='font-medium mb-2 flex'>Password</label>
            <input type='password' placeholder='Enter your password' className='w-full input-black border rounded-md bg-transparent border-gray-500 p-3'/>
        </div>
        <div>
            <label className='mr-16'>
                <input type='checkbox' className='mr-2'/>
                Remember me
            </label>
             <span className='text-blue-700 text-end'>Forgot Password?</span> 
             

        </div>
        <button className='mt-3 block bg-blue-700 hover:bg-blue-800 text-white w-full py-2 px rounded'>Sign In</button>

        <div className='mt-3'>
            Don't have an account yet? <span className='text-blue-700 cursor-pointer'>Sign up</span>
        </div> 

        <div className="flex justify-center items-center mt-10">
      <a href="https://www.facebook.com/"><FaFacebook className="text-blue-700 mx-3" size={24} /></a>
      <a href="https://www.instagram.com/"><FaInstagram className="text-pink-500 mx-3" size={24} /></a>
      <a href="https://twitter.com/"><FaTwitter className="text-blue-500 mx-3" size={24} /></a>
    </div>

      
        </div>

    </div>
    
  )
}

export default LoginForm