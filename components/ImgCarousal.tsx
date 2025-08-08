import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ConveyorBelt = () => {
  const beltOneImages = [
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
    "/logo2.png",
  ];

  const beltTwoImages = [
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
    "/logo.png",
  ];

  // Triple the images to ensure smooth continuous movement
  const duplicatedBeltOneImages = [...beltOneImages, ...beltOneImages, ...beltOneImages];
  const duplicatedBeltTwoImages = [...beltTwoImages, ...beltTwoImages, ...beltTwoImages];

  return (
    <div className="relative w-full py-16 text-black">
      {/* Title Section */}
      <h1 className="text-center text-4xl md:text-6xl font-bold">
        The Stage <span className="text-red-500">Is Set</span>
      </h1>

      {/* Conveyor Belts Container */}
      <div className="space-y-12 py-8">
        {/* Belt One - Moving Left */}
        <div className="relative w-full overflow-hidden">
        <Marquee speed={70}>
          <div className="flex whitespace-nowrap">
            {duplicatedBeltOneImages.map((img, index) => (
              <div 
                key={`belt1-${index}`} 
                className="w-[20%] px-1"
              >
                <Image
                  src={img}
                  alt={`Belt 1 Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          </Marquee>
        </div>

        {/* Belt Two - Moving Right */}
        <div className="relative w-full overflow-hidden">
        <Marquee direction="right" speed={70}>
          <div className="flex whitespace-nowrap">
            {duplicatedBeltTwoImages.map((img, index) => (
              <div 
                key={`belt2-${index}`} 
                className="w-[20%] px-1"
              >
                <Image
                  src={img}
                  alt={`Belt 2 Image ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default ConveyorBelt;