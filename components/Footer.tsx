import React from "react";
import Image from "next/image";
import logo from "../public/logo.png";
import logo2 from "../public/logo2.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const handleCall = () => {
    window.location.href = "tel:+919246199077";
  };

  const handleEmail = () => {
    window.location.href = "mailto:cfschyd@gmail.com";
  };

  return (
    <footer
      id="contact"
      className="bg-black rounded-lg shadow dark:bg-gray-900"
    >
      <div className="w-full max-w-screen-xl mx-auto p-2 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex justify-center items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={logo2}
              alt="CROSSFIRE Logo"
              className="justify-center items-center w-[400px] lg:w-[450px]"
              quality={100}
            />
          </a>
          <ul className="flex justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/AboutUs" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="/Services" className="hover:underline me-4 md:me-6">
                Services
              </a>
            </li>
            <li>
              <a href="/Gallery" className="hover:underline me-4 md:me-6">
                Gallery
              </a>
            </li>
            <li>
              <a href="/Contact" className="hover:underline me-4 md:me-6">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col items-center justify-center gap-6 mb-6">
          <div className="flex gap-4 items-center">
            <FaPhoneAlt className="text-white lg:text-2xl text-lg" />
            <p className="text-white lg:text-2xl text-lg">+91 92461 99077</p>
          </div>
          <div className="flex gap-4 items-center">
            <MdEmail className="text-white lg:text-2xl text-lg" />
            <p className="text-white lg:text-2xl text-lg cursor-pointer hover:underline" onClick={handleEmail}>
              cfschyd@gmail.com
            </p>
          </div>
          <div className="flex gap-4 items-center text-center">
            <FaLocationDot className="text-white lg:text-2xl text-lg" />
            <p className="text-white lg:text-2xl text-lg">
              8-1-400/48, Deluxe Colony, Tolichowki, Hyderabad
            </p>
          </div>
        </div>
        <div className="text-center mb-4">
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-white">Other Locations:</span> Chennai | Pune | Mumbai
          </p>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" className="hover:underline">
            CROSSFIRE™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
