import React from "react";
import Image from "next/image";
import underline from "../public/underline.png";
import { ProfilePhoto } from "./ProfilePhoto";
import abdullah2 from "../public/logo2.png";
export const AboutUs = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-5  lg:px-16 gap-14">
      <div className="flex flex-col gap-6  lg:items-start items-center">
        <h1 className="flex gap-2 text-3xl lg:text-4xl">
          Meet{" "}
          <span className="flex flex-col items-center">
            <p>Abdullah Ghaffar</p>
            
          </span>{" "}
        </h1>
        <p
          className="text-lg lg:text-xl lg:pr-14 text-justify text-center  px-2 tracking-tight"
          style={{ lineHeight: "1.85" }}
        >
          As an accomplished entrepreneur with expertise in leadership and
          business development, I have played a key role in effectively overseen
          projects that generated over $20 million in revenue. At this
          particular stage, my proficient team is dedicated to exploring new
          markets, uncovering new growth opportunities, and driving strategies
          to grow and retain our customer base.
          <span className="hidden lg:flex lg:pt-4 tracking-tight">
            My career has been deeply rooted in the service industry, giving me
            a unique understanding of the diverse needs of individuals. This
            experience enables me to connect with people effectively and deliver
            the best possible outcomes for all parties involved. I have coached
            over 200 students with a 99% success rate, and I now own nine
            businesses. I attribute the success of these ventures entirely to
            mastering the right systems, processes, and the importance of having
            the right people in place.
          </span>
        </p>
      </div>
      <div className="">
        <ProfilePhoto />
        <Image
          src={abdullah2}
          alt="abdullah"
          className=" lg:hidden  w-[80vw] h-[30vw] shadow-2xl"
        />
      </div>
    </div>
  );
};