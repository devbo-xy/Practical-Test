import React from "react";

export default function Home() {
  return (
    <div className="w-full">
      <div className="h-screen w-full bg-white px-4">
        <div className="h-full max-w-6xl mx-auto flex items-center">
          <div className="flex flex-col space-y-0 md:space-y-2">
            <h2 className="uppercase text-[3rem] md:text-[4.5rem] font-fjalla tracking-wider">
              Who Are We?
            </h2>
            <div className="flex space-y-6 flex-col">
              <p className="font-body text-xl md:w-[50%] tracking-wide hidden md:block">
                Donaki is dolor sit amet, consectetur adisipicing elit, sed do
                euismod empor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
              <p className="font-body text-lg w-full tracking-wide leading-8 block md:hidden ">
                Donaki is dolor sit amet, consectetur adisipicing elit, sed do
                euismod empor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in vouptate velit esse cillum dollore eu fugiat
                nulla pariatur. Excepteur sint occaecat cuopidatat non proident,
                sunt in culpa qui officia deserunt mollit annim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit.
              </p>
              <button className="bg-[#666795] w-[10rem] border-b-[0.2rem] border-b-[#23267A] py-2 rounded-md text-white uppercase font-body text-sm font-bold">
                Find More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
