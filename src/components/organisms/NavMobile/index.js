import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Assets } from "assets";
import Image from "next/image";

export const NavMobile = (props) => {
  //   useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //     return () => (document.body.style.overflow = "visible");
  //   }, []);
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  //   useEffect(() => {
  //     const nav = document.querySelector(".nav");
  //     let lastScrollY = window.scrollY;
  //     window.addEventListener("scroll", () => {
  //       if (lastScrollY < window.scrollY && window.scrollY > 0) {
  //         nav.classList.add("!-top-40");
  //         nav.classList.remove("!-top-0");
  //       } else {
  //         nav.classList.remove("!-top-40");
  //       }
  //       lastScrollY = window.scrollY;
  //     });
  //     return () => {};
  //   }, []);

  return (
    <div
      style={{ transition: "0.5s" }}
      className={`${
        props.show ? "top-0 left-0" : " -top-full left-0"
      } fixed top-0 h-[32rem] w-full bg-white transition delay-150 duration-300 ease-in-out`}
    >
      <div className="flex flex-col px-4 py-3">
        <div className="flex items-center justify-between mb-12">
          <Link href="">
            <div className="relative lg:w-[12rem] w-[10rem] h-full flex justify-center items-center">
              <Image src={Assets.Donaki} alt="Logo Litedex" />
            </div>
          </Link>
          <button type="button" onClick={props.onClick}>
            <div className="relative w-full h-full">
              <Image src={Assets.CloseBar} alt="Hamburger Bar" />
            </div>
          </button>
        </div>
        <div className="">
          <ul className="flex flex-col space-y-8">
            <li>
              <Link href="# ">
                <a className="w-full py-3 text-sm font-bold text-black uppercase transition  hover:text-[#666795]">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <a
                  href=""
                  className="flex flex-row items-center justify-between w-full py-3 text-sm text-black uppercase transition  hover:text-[#666795] font-body"
                >
                  Link
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <a
                  href=""
                  className="flex flex-row items-center justify-between w-full py-3 text-sm text-black uppercase transition  hover:text-[#666795] font-body"
                >
                  Link
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <a className="w-full py-3 text-sm text-black transition  hover:text-[#666795] font-body uppercase">
                  Contact Us
                </a>
              </Link>
            </li>
            <div className="flex flex-col space-y-4">
              <button className="w-full border-[0.1rem] border-[#23267A] py-2 rounded-md text-[#23267A] uppercase text-sm font-bold hover:scale-95 outline-none">
                Login
              </button>
              <button className="w-full py-2 rounded-md text-white bg-[#666795] uppercase font-body text-xs font-bold hover:scale-95 outline-none">
                Register
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
