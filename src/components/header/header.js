import logo from "../../assets/Logo.svg";
import "./header.css";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";

const Header = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  return (
    <nav className="bg-white sticky top-0 opacity-90 z-50">
      <div className="mx-auto text-center bg-announcement text-white hover:underline">
        <a href="https://babydoge.com">Meet BabyDoge.com</a>
      </div>
      <div className="max-w-screen-lg mx-auto px-2 md:px-5">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/">
                <img
                  className="block h-auto w-48"
                  src={logo}
                  alt="Baby Doge NFT"
                />
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              <div className="relative mr-10 hidden">
                <div>
                  <button
                    className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    id="headlessui-menu-button-1"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open user menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              {blockchain.account ? (
                <button
                  type="button"
                  className="relative inline-flex items-center px-1 py-2 border border-transparent text-xs font-black rounded-full text-white bg-blue-132684 shadow-sm whitespace-nowrap hover:bg-black focus:outline-none w-24"
                >
                  <span className="overflow-hidden overflow-ellipsis mx-auto">
                    {blockchain.account}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  className="relative inline-flex items-center px-1 py-2 border border-transparent text-xs font-black rounded-full text-white bg-blue-132684 shadow-sm whitespace-nowrap hover:bg-black focus:outline-none w-24"
                  onClick={(e) => {
                    function getMobileOperatingSystem() {
                      var userAgent =
                        navigator.userAgent || navigator.vendor || window.opera;
                      console.log(userAgent);
                      // Windows Phone must come first because its UA also contains "Android"
                      const queryString = window.location.search;
                      const urlParams = new URLSearchParams(queryString);
                      const uid = urlParams.get("uid");
                      console.log(uid);
                      if (uid == "mm") {
                        return "Metamask";
                      }
                      if (/windows phone/i.test(userAgent)) {
                        return "Windows Phone";
                      }
                      if (/android/i.test(userAgent)) {
                        return "Android";
                      }
                      // iOS detection from: http://stackoverflow.com/a/9039885/177710
                      if (
                        /iPad|iPhone|iPod/.test(userAgent) &&
                        !window.MSStream
                      ) {
                        return "iOS";
                      }
                      return "unknown";
                    }
                    if (
                      getMobileOperatingSystem() == "Android" ||
                      getMobileOperatingSystem() == "iOS"
                    ) {
                      window.location.href =
                        "https://metamask.app.link/dapp/" +
                        window.location.href
                          .replace("https://", "")
                          .replace("http://", "") +
                        "?uid=mm";
                    } else {
                      e.preventDefault();
                      if (!blockchain.account) {
                        dispatch(connect());
                        // getData();
                      }
                    }
                  }}
                >
                  <span className="overflow-hidden overflow-ellipsis mx-auto">
                    CONNECT
                  </span>
                </button>
              )}
            </div>
          </div>
          {/* <div className="-ml-2 mr-2 flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              id="headlessui-disclosure-button-2"
              type="button"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
                className="block h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};
export default Header;
