import React, { useState, useEffect } from "react";

import Link from "next/link";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { Assets } from "../assets";
import { NavMobile } from "../components/organisms/NavMobile";
import { NextSeo } from "next-seo";

export default function Home() {
  const [popupMenuShow, setPopupMenuShow] = useState(false);
  const openPopupMenu = () => setPopupMenuShow(true);
  const closePopupMenu = () => setPopupMenuShow(false);
  const [showOptions, setShowOptions] = useState(false);
  // const handleClick = () => {
  //   setShowOptions(!showOptions);
  // };
  return (
    <>
      <NextSeo
        title="Practical Test"
        description=" Donaki is dolor sit amet, consectetur adisipicing elit, sed do
        euismod empor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo"
        canonical="https://practical-test-lyart.vercel.app/"
        openGraph={{
          url: "https://practical-test-lyart.vercel.app/",
          title: "Practical Test",
          description:
            "Donaki is dolor sit amet, consectetur adisipicing elit, sed doeuismod empor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo",
          images: [
            {
              url: "/public/assets/images/logoDonaki.svg",
              width: 1200,
              height: 1200,
              alt: "seoPracticalTest",
              type: "image/png",
            },
          ],
          site_name: "Practical Test",
        }}
      />

      <div className="relative w-full h-screen bg-white">
        <div
          className="nav top-0 fixed z-[100] w-full"
          style={{ transition: "0.5s" }}
        >
          <div className="block w-full">
            <div className="z-[10] absolute w-full before:-z-[1] before:absolute before:w-full before:h-full bg-white transition">
              <div className="relative hidden max-w-5xl mx-auto cursor-pointer md:block top-2">
                <div className="flex items-center justify-end">
                  <h2 className="text-xs text-black uppercase">En</h2>
                  <ChevronRightIcon className="w-4 h-4" />
                </div>
              </div>
              <nav className="flex items-center justify-between w-full max-w-5xl px-4 py-3 mx-auto xl:px-0 md:py-2">
                <div className="flex flex-row space-x-14">
                  <Link href="# ">
                    <div className="relative md:w-[10rem] w-[10rem] h-full flex justify-center items-center">
                      <Image src={Assets.Donaki} alt="Logo Litedex" />
                    </div>
                  </Link>
                  <ul className="items-center hidden space-x-14 md:flex">
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
                          className="flex flex-row items-center justify-center w-full py-3 text-sm text-black uppercase transition  hover:text-[#666795] font-body"
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
                          className="flex flex-row items-center justify-center w-full py-3 text-sm text-black uppercase transition  hover:text-[#666795] font-body"
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
                  </ul>
                </div>
                <div className="hidden md:block">
                  <div className="flex flex-row space-x-4">
                    <button className="w-[8rem] border-[0.1rem] border-[#23267A] py-2 rounded-md text-[#23267A] uppercase text-sm font-bold hover:scale-95 outline-none">
                      Login
                    </button>
                    <button className="w-[8rem] py-2 rounded-md text-white bg-[#666795] uppercase font-body text-xs font-bold hover:scale-95 outline-none">
                      Register
                    </button>
                  </div>
                </div>
                {/* <div className="relative flex items-center">
                <div className="hidden lg:block">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full h-full p-2 space-x-1 text-sm font-medium text-white rounded-md focus:outline-none "
                    id="menu-button"
                    aria-expanded="false"
                    onClick={handleClick}
                  >
                    {LangJson.filter(
                      (language) => language.code === router.locale
                    ).map((language, index) => {
                      return (
                        <div
                          className="flex flex-row items-center space-x-1"
                          key={index}
                        >
                          <span className="uppercase">{language.name}</span>
                        </div>
                      );
                    })}
                    <ChevronDownIcon className="w-5 h-5 flex items-center text-[#1EC01E]" />
                  </button>
                </div>
                {showOptions && (
                  <div
                    className="absolute right-0 flex justify-center w-full text-sm font-medium text-white rounded-md top-14 focus:outline-none"
                    role="menu"
                  >
                    <div>
                      {LangJson.map((language) => (
                        <div
                          className="flex-row rounded-full cursor-pointer lg:p-3 lg:w-full lg:text-left lg:hover:bg-white/10 lg:rounded-xl"
                          key={language.country_code}
                          value={router.locale}
                          onClick={() => {
                            handleLocaleChange(language.code);
                            // document.body.style.overflow = "visible";
                          }}
                        >
                          <div className="flex space-x-1">
                            <Image
                              src={language.icon}
                              alt="Translation Logo"
                              height={24}
                              width={24}
                            />
                            <span className="uppercase">{language.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div> */}
                <button className="relative block -right-10 md:hidden">
                  <div className="flex items-center justify-end">
                    <h2 className="text-xs text-black uppercase">En</h2>
                    <ChevronRightIcon className="w-4 h-4" />
                  </div>
                </button>
                <button
                  type="button"
                  className="block md:hidden "
                  onClick={() => {
                    popupMenuShow ? closePopupMenu() : openPopupMenu();
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={Assets.HamburgerBar}
                      alt="Hamburger Bar"
                      width={32}
                      height={32}
                    />
                  </div>
                </button>
                <NavMobile
                  show={popupMenuShow}
                  onClick={() => {
                    popupMenuShow ? closePopupMenu() : openPopupMenu();
                  }}
                />
              </nav>
            </div>
          </div>
        </div>
        {/* <Section /> */}
        <div className="flex items-center h-screen px-4 pt-10 mx-auto md:max-w-5xl">
          <div className="absolute left-0 hidden md:block">
            <Image src={Assets.Hero} alt="Hero" width={1500} height={800} />
          </div>
          <div className="absolute left-0 w-[50%] h-screen bg-gradient-to-r from-white/80 to-white/0 bg-blur" />
          <div className="z-20 flex flex-col mt-10 space-y-0 md:space-y-2">
            <h2 className="uppercase text-[#343434] text-[3rem] md:text-[4rem] font-fjalla tracking-wider">
              Who Are We?
            </h2>
            <div className="flex flex-col space-y-6">
              <p className="font-body text-[#525252] text-base md:w-[50%] tracking-wide leading-6 hidden md:block">
                Donaki is dolor sit amet, consectetur adisipicing elit, sed do
                euismod empor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
              <p className="block w-full text-lg leading-8 tracking-wide font-body text-[#525252] md:hidden ">
                Donaki is dolor sit amet, consectetur adisipicing elit, sed do
                euismod empor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in vouptate velit esse cillum dollore eu fugiat
                nulla pariatur. Excepteur sint occaecat cuopidatat non proident,
                sunt in culpa qui officia deserunt mollit annim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit.
              </p>
              <button className="bg-[#666795] w-[10rem] border-b-[0.15rem] border-b-[#23267A] py-2 rounded-md text-white uppercase font-body text-xs font-bold hover:scale-95 outline-none">
                Find More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center max-w-6xl px-4 mx-auto ">
          <div className="flex justify-center flex-col space-y-4 -top-[0rem] md:-top-[6rem] relative">
            <div className="flex flex-col space-y-4 md:flex-row md:space-x-6 md:space-y-0">
              <div className="bg-[#44C1B7] w-full md:w-[34rem] md:h-[15rem] flex items-center justify-center relative">
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
              <div className="bg-[#666795] w-full md:w-[34rem] md:h-[15rem] flex items-center justify-center relative">
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
            <div className="w-[99.5%] bg-white h-[18rem] flex items-center px-4 md:px-10 overflow-hidden relative">
              <div className="absolute left-0 hidden md:block">
                <Image
                  src={Assets.About}
                  alt="Hero"
                  width={2000}
                  height={800}
                />
              </div>
              <div className="absolute left-0 w-[60%] h-screen bg-gradient-to-r from-white/100 to-white/0 " />
              <div className="z-20 flex flex-col space-y-2">
                <h2 className="tracking-wider text-[#343434] uppercase font-fjalla text-[3rem] md:text-5xl">
                  About us
                </h2>
                <p className="text-base text-[#525252] md:text-lg md:w-[46%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center max-w-6xl px-4 pb-16 mx-auto overflow-x-hidden">
          <div className="flex flex-col justify-between w-full space-y-6 md:flex-row md:space-y-0">
            <div className="flex flex-col ml-6 space-y-4">
              <div className="flex flex-col space-y-1">
                <span className="text-[#343434] font-fjalla uppercase tracking-wide text-xl">
                  See Who Are
                </span>
                <span className="text-[#343434] font-fjalla uppercase tracking-wide text-4xl">
                  Our Partners
                </span>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-row space-x-2">
                  <div className="w-8 h-8 text-gray-400 bg-gray-200 rounded-sm outline-none cursor-pointer hover:scale-95">
                    <ChevronLeftIcon />
                  </div>
                  <div className="w-8 h-8 text-gray-400 bg-gray-200 rounded-sm outline-none cursor-pointer hover:scale-95">
                    <ChevronRightIcon />
                  </div>
                </div>
                <button className="bg-[#666795] w-[10rem] border-b-[0.15rem] border-b-[#23267A] py-2 rounded-md text-white uppercase font-body text-xs font-bold hover:scale-95 outline-none">
                  See Our Partners
                </button>
              </div>
            </div>
            <div className="relative flex flex-row space-x-4 left-14 md:-left-2">
              <div className="md:h-[14rem] md:w-[14rem] bg-white border-2 border-gray-200 hover:scale-95 flex items-center justify-center">
                <Image src={Assets.Decor} alt="Logo Decor" />
              </div>
              <div className="md:h-[14rem] md:w-[14rem] bg-white border-2 border-gray-200 hover:scale-95 flex items-center justify-center">
                <Image src={Assets.Diesel} alt="Logo Decor" />
              </div>
              <div className="md:h-[14rem] md:w-[14rem] bg-white border-2 border-gray-200 hover:scale-95  md:block hidden">
                <Image src={Assets.Zara} alt="Logo Decor" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full py-10 bg-[#343434] flex-col md:flex-row flex md:px-[4rem]">
          <div className="flex flex-col space-y-[2rem] md:flex-row max-w-6xl px-4 mx-auto md:space-x-[10rem] md:space-y-0">
            <div className="flex flex-col space-y-6 w-full md:w-[35%]">
              <h2 className="text-xl tracking-wide text-white uppercase font-fjalla">
                Subscribe To Our Newsletter
              </h2>
              <div className="flex flex-row space-x-4">
                <div className="">
                  <input
                    type="text"
                    placeholder="Your E-Mail"
                    className="p-2 text-xs font-bold uppercase bg-transparent border-[0.1rem] border-[#848484] outline-none placeholder-[#848484] text-white"
                  />
                </div>
                <button className="bg-[#414141] w-[8rem] py-2 border-[0.1rem] border-[#414141] text-[#848484] uppercase font-body text-xs font-bold hover:scale-95 outline-none">
                  Subscribe
                </button>
              </div>
              <p className="text-xs md:text-xs font-body text-[#C7C7C7] w-full">
                Donaki is luisquam est, qui dolorem ipsum quia dolor sit amet,
                consectur, adipisci velit, sed quia non numquam
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-xl tracking-wide text-white uppercase font-fjalla">
                Follow Us
              </h2>
              <div className="relative flex flex-row space-x-4 -left-2">
                <div className="flex items-center justify-center">
                  <a href="# ">
                    <Image
                      src={Assets.Pinterest}
                      alt="Logo Pinterest"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a href="# ">
                    <Image
                      src={Assets.Facebook}
                      alt="Logo Facebook"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <a href="# ">
                    <Image
                      src={Assets.Instagram}
                      alt="Logo Instagram"
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
                <div className="relative flex items-center justify-center w-8 h-8 pt-1 bg-white rounded-lg md:w-8 md:h-6 top-1">
                  <a href="# ">
                    <Image
                      src={Assets.Blog}
                      alt="Logo Blog"
                      width={24}
                      height={16}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-6">
              <h2 className="text-xl tracking-wide text-white uppercase font-fjalla">
                Contact Us
              </h2>
              <div className="flex flex-col space-y-6">
                <div className="flex flex-row space-x-2 space-y-2">
                  <MapPinIcon className="w-5 h-5 text-[#C7C7C7]" />
                  <span className="text-[#C7C7C7] text-xs w-[60%] font-body">
                    Rue de la Loi/Westraat 175 B-1048
                    Bruxelles/Brussei/Belgique/elgie
                  </span>
                </div>
                <div className="flex flex-row space-x-2">
                  <PhoneIcon className="w-5 h-5 text-[#C7C7C7] font-body" />
                  <span className="text-[#C7C7C7] text-xs w-[60%]">
                    Tel: +32 22252522
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
