import React from "react";
import Image from "next/image";
import abdullah2 from "../public/logo.png";
import ellipsel from "../public/Ellipsel.png";
import ellipser from "../public/Ellipser.png";

export const ProfilePhoto = () => {
  return (
    <div className="hidden lg:block relative">
      

      <div
        className="p-4 shadow-2xl z-10 relative"
        style={{
          background: "",
          width: "40vw", // Adjust width based on your design
        }}
      >
        <Image
          src={abdullah2}
          alt="abdullah"
          className=" z-10 h-[40vw]"
          style={{ width: "100%" }} // Image width is relative to the parent div
          priority
        />
      </div>


    </div>
  );
};