import React from "react";
import Image from "next/image";
import underline from "../public/underline.png";
import { ProfilePhoto } from "./ProfilePhoto";
import abdullah2 from "../public/logo2.png";
export const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5  lg:px-16 gap-14">
      <div className="flex flex-col gap-6  lg:items-start items-center">
        <h1 className="uniform-heading-lg">
          <span className="text-red-500">Meet</span>{" "}
          <span className="text-black">CrossFire</span>
        </h1>
        <p
          className="uniform-text-lg uniform-text-secondary lg:pr-14 text-justify text-center px-2 tracking-tight"
          style={{ lineHeight: "1.85" }}
        >
          Established in 2000, CROSSFIRE is a multidisciplinary fire safety consultancy and service provider based in Hyderabad. Our team of experienced professionals combines technical expertise with practical knowledge to deliver reliable fire protection systems that adhere to the highest safety standards.

We follow Indian and international fire safety codes such as BIS Standards, NBC of India, and Local Fire Department Regulations to ensure comprehensive protection for all types of buildings and facilities.
        </p>
      </div>
      <div className="">
        <ProfilePhoto />
        <Image
          src={abdullah2}
          alt="abdullah"
          className=" lg:hidden rounded-xl w-[80vw] h-[30vw] shadow-2xl"
        />
      </div>
    </div>
  );
};
