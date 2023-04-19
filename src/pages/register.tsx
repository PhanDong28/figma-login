import React from 'react'
import bigc from '../assest/images/bigc.png'
import Logo from '../components/Logo'
import Moreselect2 from '../components/Moreselect2'
import Signup from '../components/Signup'

const register =():JSX.Element => {
  return (
    <div className='w-full h-screen flex flex-row items-start absolute'>
        <div className='w-1/3 h-full'> 
        <img src={bigc} className='h-full rotate-180'/>
            </div>
        <div className='w-2/3 order-1 justify-center items-flex-start flex flex-col gap-10'>
            <div className='justify-center items-flex-start flex flex-col gap-10 w-[516px] h-[809px] m-auto'>
                <div className='Logo'>
                    <Logo/>
                </div>
                <div className='form'> 
                <div>
                    <Signup />
                
                <Moreselect2 />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default register
