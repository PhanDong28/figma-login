import React from 'react'
import Gmail from '../assest/images/Gmail.png'
import Facebook from '../assest/images/Facebook.png'
import Instagram from '../assest/images/Instagram.png'
import Linkedin from '../assest/images/Linkedin.png'

const Moreselect2 =():JSX.Element=> {
    const moveToLogin = () => {
        window.location.href = '/';
      };
  return (
    <div className='flex flex-col justify-center items-center gap-4 order-1'>
      <p className='w-56 h-7 font-serif font-normal text-base leading-7 text-[#232D42] order-0'>or sign up with other accounts?</p>
      <div className='sociallink flex flex-row items-start gap-6 order-1'>
        <img src={Gmail} alt="Gmail" className='cursor-pointer'/>
        <img src={Facebook} alt="Facebook" className='cursor-pointer'/>
        <img src={Instagram} alt="Instagram" className='cursor-pointer'/>
        <img src={Linkedin} alt="Linkedin" className='cursor-pointer'/>
      </div>
      <div className='flex flex-row gap-3 order-2'>
      <p className='font-serif font-normal text-base leading-7 text-[#232D42]'>Already have an Account</p> 
      <p onClick={moveToLogin} className='font-serif font-normal text-base leading-7 text-[#3A57E8] cursor-pointer hover:text-[#4a66f3]'>Sign in</p>
      </div>
    </div>
  )
}


export default Moreselect2
