import React from "react";

export default function Home() {
  return (
    <div className="relative w-full h-screen">
      <div className="flex items-center h-full px-4 mx-auto md:max-w-5xl">
        <div className="flex flex-col space-y-0 md:space-y-2">
          <h2 className="uppercase text-[#343434] text-[3rem] md:text-[4rem] font-fjalla tracking-wider">
            Who Are We?
          </h2>
          <div className="flex flex-col space-y-6">
            <p className="font-body text-[#525252] text-lg md:w-[50%] tracking-wide leading-6 hidden md:block">
              Donaki is dolor sit amet, consectetur adisipicing elit, sed do
              euismod empor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo
            </p>
            <p className="block w-full text-lg leading-8 tracking-wide font-body text-[#525252] md:hidden ">
              Donaki is dolor sit amet, consectetur adisipicing elit, sed do
              euismod empor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in vouptate velit esse cillum dollore eu fugiat
              nulla pariatur. Excepteur sint occaecat cuopidatat non proident,
              sunt in culpa qui officia deserunt mollit annim id est laborum.
              Sed ut perspiciatis unde omnis iste natus error sit.
            </p>
            <button className="bg-[#666795] w-[10rem] border-b-[0.15rem] border-b-[#23267A] py-2 rounded-md text-white uppercase font-body text-xs font-bold">
              Find More
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-6xl px-4 mx-auto">
        <div className="flex justify-center items-center flex-col space-y-4 -top-[2rem] md:-top-[6rem] relative">
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            <div className="bg-[#44C1B7] md:w-[33rem] md:h-[15rem] flex items-center justify-center relative">
              <span className="text-white uppercase font-fjalla text-[4rem] md:text-[7rem] opacity-10 absolute">
                Partner
              </span>
              <div className="z-10 flex items-center w-full h-full px-4 py-5 md:px-10">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-base tracking-wider text-white uppercase font-fjalla md:text-3xl">
                    Become a Partner
                  </h2>
                  <p className="text-base text-white md:text-lg">
                    Promote your store through our platform
                  </p>
                  <button className="w-[8rem] border-[0.1rem] border-white py-2 rounded-md text-white uppercase font-body text-xs font-bold">
                    Find Out More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#666795] md:w-[33rem] md:h-[15rem] flex items-center justify-center relative">
              <span className="text-white uppercase font-fjalla text-[4rem] md:text-[7rem] opacity-10 absolute">
                Member
              </span>
              <div className="z-10 flex items-center w-full h-full px-4 py-5 md:px-10">
                <div className="flex flex-col space-y-4">
                  <h2 className="text-base tracking-wider text-white uppercase font-fjalla md:text-3xl">
                    Become a Member
                  </h2>
                  <p className="text-base text-white md:text-lg">
                    Browse through a large number of retails
                  </p>
                  <button className="w-[8rem] border-[0.1rem] border-white py-2 rounded-md text-white uppercase font-body text-xs font-bold">
                    Find Out More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[96.5%] bg-whiteb border-2 h-[18rem] flex items-center px-4 md:px-10">
            <div className="flex flex-col space-y-2">
              <h2 className="tracking-wider text-[#343434] uppercase font-fjalla text-[3rem] md:text-5xl">
                About us
              </h2>
              <p className="text-base text-[#525252] md:text-lg md:w-[46%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
