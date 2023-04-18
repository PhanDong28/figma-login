import React from 'react'
import logo from '../assest/images/Logo.png'

function Logo(): JSX.Element {
    return (
        <div className='flex flex-row items-start p-0 gap-1 order-0'>
            <img src={logo} alt="logo" className='w-7 h-7 flex-none order-0' />
            <span className='square font-serif text-3xl font-normal leading-10 text-[#232D42] order-1'>Hope UI</span>
        </div>
    )
}


export default Logo
