import React from "react";
import circle from "../assest/images/circle.png";
import Logo from "../components/Logo";
import Moreselect2 from "../components/Moreselect2";
import Signup from "../components/Signup";
import Logotop from "../assest/images/logotop.png";

const Register = (): JSX.Element => {
  return (
    <div className="w-full h-screen flex flex-row items-start ">
      <div className="w-1/2 h-full">
        <img src={circle} className="h-full rotate-180 "/>
      </div>
      <div className="w-1/2 order-1 h-full flex flex-row">
        <div className="flex flex-col items-start gap-6 w-[32.25rem] h-[32.25rem] left-[13.188rem] top-[14] m-auto ">
          <Logo />
          <Signup/>
        </div>
        <div className="w-[288rem] h-[28rem]">
          <img
            src={Logotop}
            alt="Logotop"
            className="absolute w-[28rem] h-[28rem] left-[63rem] top-[-15rem]"
          />
        </div>
      </div>
      
    </div>
  );
};

export default Register;
