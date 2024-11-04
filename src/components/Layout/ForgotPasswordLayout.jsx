import React from 'react'
import Logo from '../Elements/Logo/Index'
import FormForgotPassword from '../Fragments/FormForgotPassword';
import { Link } from 'react-router-dom';

const ForgotPasswordLayout = () => {
    return (
      <div className="flex justify-center min-h-screen items-center bg-special-mainBg">
      {/* container start */}
      <div className="w-full max-w-sm">
        {/* logo start */}
        <Logo/>
        {/* logo end */}
          {/* teks start */}
          <div className="my-9 px-7 flex justify-center text-xs text-gray-03 items-center flex-col static">
          <div className="border border-gray-05 w-full"></div>
          <div class="px-2 bg-special-mainBg absolute"> Enter your email address to get the password reset link</div>
        </div>
        {/* teks end */}
        {/* form start */}
        <div className='mt-16'><FormForgotPassword/></div>
  
        {/* form end */}
      
     
  {/* link start */}
  <div className="flex justify-center">
      <Link to='/login' className="text-primary text-sm font-bold">Back to login</Link>
    
  </div>
  {/* link end */}
      </div>
      {/* container end */}
    </div>  )
  
  }
  
  export default ForgotPasswordLayout
