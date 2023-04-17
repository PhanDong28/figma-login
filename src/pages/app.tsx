import React from "react";



function app(): JSX.Element {
  const handleLogin = () => {
    window.location.href = '/login';
  };
  return (
    <div className="app bg-[#141416]">
      <header>
        <div
          id="header"
          className="header w-[100%] h-[80px] flex justify-between bg-[#141416] py-[20px] px-[160px] items-start align-center gap[-167px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] order-0"
        >
          <div className="left-header flex flex-row align-center p-0 gap-[32px] w-[362px] h-[40px] order-0">
            <div className="logo flex flex-row items-start p-0 gap-[8px] w-[126px] h-[32px] order-0">
              <div className="symbol w-[32px] h-[32px]">
              </div>

              <p className="cryper font-sans not-italic font-semibold text-[24px] leading-[32px] text-[#F4F5F6] flex-none tracking-[-0.02em] grow-0 order-1">
                crypter
              </p>
            </div>
            <div className="driver w-[2px] h-[40px] bg-[#353945] rounded-[2px] order-1"></div>
            <p className="discover w-[59px] h-[16px] text-[#777E91] font-['DM_Sans'] not-italic font-bold text-[14px] leading-[40px] align-center order-1 cursor-pointer">
              Discover
            </p>
            <p className="hiw w-[79px] h-[16px] font-['DM_Sans'] not-italic font-bold text-[14px] leading-[40px] align-center  text-[#777E91] order-3 cursor-pointer">
              How it work
            </p>
          </div>
          <div className="actions flex flex-row justify-end items-start p-0 gap-[24px] w-[573px] h-[40px] flex-none grow-0">
            <div className="search">
              {" "}
              <input
                type="text"
                className="searchbox border-box flex flex-row justify-between align-center pt-[10px] pr-[12px] pb-[10px] pl-[16px] gap-[18px] w-[256px] h-[40px] border-[2px] border-solid rounded-[8px] border-[#353945] text-[#F4F5F6] bg-[#141416]"
                name="searchbox"
                placeholder="Search"
                required
              />
            </div>
            <div  className="notification ">
                <i className='bell bx bx-bell text-[#777E91] text-[30px] flex-col cursor-pointer pt-[5px] absolute'></i>

                <div className="status h-[10px] w-[10px] bg-[#45B36B] rounded-[8px] flex-col absolute gap-[10px] items-start">     
            </div>
            </div>
            <div className="buttons flex flex-row justify-center align-center p-[0px] gap-[12px] order-2 w-[229px] h-[40px]">
                <button onClick={handleLogin} className="login bg-[#3772FF] flex flex-row justify-center align-center py-[9px] px-[16px] w-[90px] h-[40px] rounded-[40px] order-0">
                <span className="w-[48px] h-[16px] font-['Open_Sans'] align-center text-[#FCFCFD] order-0 cursor-pointer">Login</span>
                </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default app;
