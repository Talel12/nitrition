import React, { useState } from 'react'

const ScrolledButton = () => {

   const [show, setShow] = useState(false)

   const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 400) {
         setShow(true)
      }
      else if (scrolled <= 400) {
         setShow(false)
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth'
      });
   };

   window.addEventListener('scroll', toggleVisible);

   return (
      <button className='ScrolledButton' onClick={scrollToTop} style={{display: show ? 'inline': 'none'}}>
         <i className="fas fa-arrow-circle-up"></i>
      </button>
   )
}

export default ScrolledButton
