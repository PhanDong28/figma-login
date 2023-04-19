import React from 'react'


const Signup =():JSX.Element=> {

  return (
    <div className='Signup'>
        <div className='Frame2 flex flex-col justify-center items-center p-0 gap-1 w-49 h-24 order-0'>
        <h1 className='Signup w-30 h-10 font-serif font-normal text-5xl leading-10 text-[#000000] order-0'>Sign Up</h1>
        <h2 className='Sitsc w-52 h-7 font-serif font-normal text-base leading-7 text-center order-1 text-[#8A92A6]'>Create your Hope UI account</h2>
        </div>
        <div className='flex flex-col items-center justify-center gap-6 order-1 w-[516px] h-[400px]'>
            <div className='flex flex-col items-center justify-center gap-4 order-0'>
                <div className='flex flex-row items-flex-start gap-4 order-0'>
                    <div className='flex flex-col items-flex-start gap-2 order-0'>
                        <p className='font-serif font-normal text-base leading-7 text-[#8A92A6] order-0'>First Name</p>
                        <label htmlFor="fisrname" className="username flex flex-col items-start gap-4 order-1 w-60 h-11 ">
                        <input type="text" className="username border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-60 h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none" />
                        </label>
                    </div>
                    <div className='flex flex-col items-flex-start gap-2 order-0'>
                        <p className='font-serif font-normal text-base leading-7 text-[#8A92A6] order-0'>Last Name</p>
                        <label htmlFor="lastname" className="flex flex-col items-start gap-4 order-1 w-60 h-11 ">
                        <input type="text" className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-60 h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none" />
                        </label>
                    </div>
                </div>
                <div className='flex flex-row items-flex-start gap-4 order-0'>
                    <div className='flex flex-col items-flex-start gap-2 order-0'>
                        <p className='font-serif font-normal text-base leading-7 text-[#8A92A6] order-0'>Email</p>
                        <label htmlFor="email" className="flex flex-col items-start gap-4 order-1 w-60 h-11 ">
                        <input type="text" className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-60 h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none" />
                        </label>
                    </div>
                    <div className='flex flex-col items-flex-start gap-2 order-0'>
                        <p className='font-serif font-normal text-base leading-7 text-[#8A92A6] order-0'>Phone No.</p>
                        <label htmlFor="phoneno" className="flex flex-col items-start gap-4 order-1 w-60 h-11 ">
                        <input type="text" className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-60 h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none" />
                        </label>
                    </div>
                </div>
                <div className='flex flex-row items-flex-start gap-4 order-0'>
                    <div className='flex flex-col items-flex-start gap-2 order-0'>
                        <p className='font-serif font-normal text-base leading-7 text-[#8A92A6] order-0'>Password</p>
                        <label htmlFor="password" className="flex flex-col items-start gap-4 order-1 w-60 h-11 ">
                        <input type="password" className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-60 h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none" />
                        </label>
                    </div>
                    <div className='flex flex-col items-flex-start gap-2 order-0'>
                        <p className='font-serif font-normal text-base leading-7 text-[#8A92A6] order-0'>Confirm Password</p>
                        <label htmlFor="cfpassword" className="flex flex-col items-start gap-4 order-1 w-60 h-11 ">
                        <input type="password" className="border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-60 h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none" />
                        </label>
                    </div>
                </div>
                <div className="remember flex flex-row items-center gap-2 order-0">
                        <input type="checkbox" className="border-box flex flex-row justify-center items-center display-none w-5 h-5"/>
                         <p className="font-serif font-normal text-base leading-7 text-[#8A92A6] order-0 ">I agree with the terms of use</p>
                    </div>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center py-2 px-6 w-48 h-11 bg-[#3A57E8] rounded-[4px] order-1 cursor-pointer hover:bg-[#4a66f3] m-auto">
            <p className="font-serif font-normal text-base leading-7 flex items-center text-center text-[#FFFFFF]">Sign up</p>
        </div>
    </div>
  )
}


export default Signup
