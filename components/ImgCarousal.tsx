import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ConveyorBelt = () => {
  // Define image data with titles
  const beltOneItems = [
    { src: "/logo2.png", title: "Fire Alarm Systems" },
    { src: "/logo2.png", title: "Sprinkler Systems" },
    { src: "/logo2.png", title: "Fire Extinguishers" },
    { src: "/logo2.png", title: "Emergency Lighting" },
    { src: "/logo2.png", title: "Smoke Detectors" },
  ];

  const beltTwoItems = [
    { src: "/logo.png", title: "Security Cameras" },
    { src: "/logo.png", title: "Access Control" },
    { src: "/logo.png", title: "Intrusion Detection" },
    { src: "/logo.png", title: "Fire Suppression" },
    { src: "/logo.png", title: "Alarm Systems" },
  ];

  // Triple the items to ensure smooth continuous movement
  const duplicatedBeltOne = [...beltOneItems, ...beltOneItems, ...beltOneItems];
  const duplicatedBeltTwo = [...beltTwoItems, ...beltTwoItems, ...beltTwoItems];

  return (
    <div className="relative w-full py-16 ">
      {/* Title Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          The Stage <span className="text-red-500">Is Set</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive range of fire protection and security solutions
        </p>
      </div>

      {/* Conveyor Belts Container */}
      <div className="space-y-16">
        {/* Belt One - Moving Left */}
        <div className="relative w-full overflow-hidden">
          <Marquee speed={70}>
            <div className="flex">
              {duplicatedBeltOne.map((item, index) => (
                <div 
                  key={`belt1-${index}`} 
                  className="flex flex-col items-center w-[220px] mx-4"
                >
                  <div className="relative w-full h-[160px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={150}
                      height={150}
                      objectFit="contain"
                      className="p-4"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* Belt Two - Moving Right */}
        <div className="relative w-full overflow-hidden">
          <Marquee direction="right" speed={70}>
            <div className="flex">
              {duplicatedBeltTwo.map((item, index) => (
                <div 
                  key={`belt2-${index}`} 
                  className="flex flex-col items-center w-[220px] mx-4"
                >
                  <div className="relative w-full h-[160px] bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={150}
                      height={150}
                      objectFit="contain"
                      className="p-4"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>
                  </div>
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