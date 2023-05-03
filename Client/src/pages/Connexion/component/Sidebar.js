import React from 'react'

import "../Style/Sidebar.css";
import { useLocation } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Sidebar = () => {
   const location = useLocation()
   return (
      location.pathname.includes('in') // Affichage de signin ou signup par l'url
         ? <SignIn /> : <SignUp />
   )
}


export default Sidebar
