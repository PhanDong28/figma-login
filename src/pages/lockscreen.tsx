import React from "react";
import Circle from "../assest/images/circle.png";
import Logotop from "../assest/images/logotop.png";
import Logo from "../components/Logo";
import Avatar from "../assest/images/avatar.png"

const LockScreen = (): JSX.Element => {
  return (
    <div className="w-full h-screen relative bg-[#FFFF] flex">
      <div className="absolute w-[34rem] h-[34rem] left-[-10.563rem] top-[-12.688rem] ">
        <img
          src={Logotop}
          alt="logotop"
          className="absolute w-[34rem] h-[34rem] "
        />
      </div>
      <div className="w-1/3 ">
        <div className="flex flex-col items-flex-start gap-6 absolute w-[24.438rem] h-[27.125rem] left-[9.563rem] top-[20.563rem]">
          <Logo />
          <div className="flex flex-col justify-center items-center gap-8 order-1 w-[24.438rem] h-[22.938rem] m-auto">
            <div className="flex flex-col justify-center items-center gap-8 order-0 w-[24.438rem] h-[18.188rem]">
                <div className="flex flex-col justify-center items-center gap-2 w-[20.875rem] h-[11.688rem]">
                    <img src={Avatar} alt="avatar" className="w-[6.25rem] h-[6.25rem]"/>
                    <div className="flex flex-col justify-center items-center gap-2 w-[20.875rem] h-[4.938rem] order-1">
                        <p className="font-serif font-medium text-4xl leading-10">Hi! Phan Duy Dong</p>
                        <p className="font-serif font-normal text-base leading-7 text-[#8A92A6] order-1">Enter your password to access the admin</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start gap-2 order-1 w-[24.438rem] h-[5rem]">
            <h1 className="password font-serif font-normal text-base leading-7 text-[#8A92A6] order-0">
              Password
            </h1>
            <label
              htmlFor="password"
              className="password flex flex-col items-start gap-4 order-1 w-[420px] h-11 "
            >
              <input
                type="password"
                className="password border-solid rounded-md border-[1px] border-box px-4 py-2 gap-56 w-[420px] h-11 bg-[#FFFF] order-0 border-[#3A57E8] focus:bg-blue-100 hover:bg-blue-100 focus:outline-none"
              />
            </label>
          </div>
            <div className="flex flex-row justify-center items-center py-2 px-6 w-48 h-11 bg-[#3A57E8] rounded-[4px] order-1 cursor-pointer hover:bg-[#4a66f3] m-auto">
              <p className="font-serif font-normal text-base leading-7 flex items-center text-center text-[#FFFFFF]">
                Login
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 h-screen">
        <img src={Circle} alt="" className="w-full h-screen -rotate-180" />
      </div>
    </div>
  );
};

export default LockScreen;
