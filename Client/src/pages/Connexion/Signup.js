import React from 'react'

import Main from './component/Main'
import Sidebar from './component/Sidebar'

import "./Style/Signup.css";


const Signup = () => {



  return (
    <>
      <div className='signUp'>
        <div className='background'>
          <Sidebar />
          <Main />
        </div>
      </div>

    </>
  )
}


export default Signup
