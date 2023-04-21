import React from "react";
import Circle from "../assest/images/circle.png";
import Logo from "../components/Logo";
import Tick from "../assest/images/tick.png";
import Logotop from "../assest/images/logotop.png";

const Email = (): JSX.Element => {
  return (
    <div className="w-full h-screen flex flex-row items-flex-start absolute">
      <div className="w-1/2 h-full">
        <div className="absolute w-[34rem] h-[34rem] left-[30.313rem] top-[-8.875rem]">
          <img src={Logotop} alt="Logotop" className="absolute " />
        </div>
        <div className="flex flex-col items-flex-start gap-10 absolute w-[34rem] h-[20rem] left-40 top-[20rem]">
          <Logo />
          <div className="flex flex-col justify-center items-center gap-8 order-1 w-[34rem] h-[23rem]">
            <div className="flex flex-col justify-center items-center gap-6 w-[34rem] h-[19rem] order-0 m-auto">
              <img
                src={Tick}
                alt="tick"
                className="w-20 h-20 items-center justify-center"
              />
              <p className="font-serif font-bold leading-10 text-6xl text-[#0048B3] order-1 w-[19rem] h-[5]">
                Success !
              </p>
              <p className="w-[34rem] h-[5rem] order-2 font-serif font-normal text-center leading-7 text-base text-[#232D42]">
                A email has been send to your email@doamin.com. Please check for
                an email from compant and clock on the included link to reset
                your password.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center py-2 px-6 w-48 h-11 bg-[#3A57E8] rounded-[4px] order-1 cursor-pointer hover:bg-[#4a66f3] m-auto">
              <p className="font-serif font-normal text-base leading-7 flex items-center text-center text-[#FFFFFF]">
                Back to Home
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen order-1">
        <img
          src={Circle}
          alt="circle"
          className="h-screen absolute -rotate-180"
        />
      </div>
    </div>
  );
};

export default Email;
