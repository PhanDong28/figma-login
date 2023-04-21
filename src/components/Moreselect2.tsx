import React from "react";
import Gmail from "../assest/images/Gmail.png";
import Facebook from "../assest/images/Facebook.png";
import Instagram from "../assest/images/Instagram.png";
import Linkedin from "../assest/images/Linkedin.png";

const Moreselect2 = (): JSX.Element => {
  const moveToLogin = () => {
    window.location.href = "/";
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 order-1 w-[15.25rem] h-[7rem]">
      <p className="w-[15rem] h-[1.75rem] font-serif font-normal text-base leading-7 text-[#232D42] order-0">
        or sign up with other accounts?
      </p>
      <div className="sociallink flex flex-row items-start gap-6 order-1 w-[10.375rem] h-[1.5rem]">
        <img src={Gmail} alt="Gmail" className="cursor-pointer w-[1.5rem] h-[1.5rem]" />
        <img src={Facebook} alt="Facebook" className="cursor-pointer w-[1.5rem] h-[1.5rem]" />
        <img src={Instagram} alt="Instagram" className="cursor-pointer w-[1.5rem] h-[1.5rem]" />
        <img src={Linkedin} alt="Linkedin" className="cursor-pointer w-[1.5rem] h-[1.5rem]" />
      </div>
      <div className="flex flex-row gap-3 order-2 w-[15.25rem] h-[7rem]">
        <p className="font-serif font-normal text-base leading-7 text-[#232D42]">
          Already have an Account
        </p>
        <p
          onClick={moveToLogin}
          className="font-serif font-normal text-base leading-7 text-[#3A57E8] cursor-pointer hover:text-[#4a66f3]"
        >
          Sign in
        </p>
      </div>
    </div>
  );
};

export default Moreselect2;
