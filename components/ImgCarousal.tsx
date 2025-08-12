import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ConveyorBelt = () => {
  // Define image data with titles
  const beltOneItems = [
    { src: "/fpd.jpg", title: "Fire Prevention Design & Hazard Assessment" },
    { src: "/spf2.jpeg", title: "Sprinkler Fire Hydrant & Hose Reel Reticulation" },
    { src: "/sprink.png", title: "Fire Fire Sprinkler & Water Curtain Installations" },
    { src: "/firelarm.webp", title: "Fire/Smoke Detection & Alarm Systems" },
    { src: "/staircase.jpg", title: "Fire Exit Structural Staircase" },
    { src: "/bgrem.png", title: "Security Fire Safety Inpanel Systems" },
    { src: "/firesupression.jpg", title: "Fire Prevention Design & Hazard Assessment" },
  ];

  const beltTwoItems = [
    { src: "/firext.png", title: "Fire Extinguishers" },
    { src: "/gasflooding.webp", title: "Gas Flooding Systems" },
    { src: "/escapeplan.jpg", title: "Fire Exit signage's & Escape Plans" },
    { src: "/firepumps.jpg", title: "Fire Pumps" },
    { src: "/publicadress.jpg", title: "Public Address System" },
    { src: "/REDIC.png", title: "Standalone Systems" },
    { src: "/firedose.jpg", title: "Fire Dose" },
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
                      fill
                      objectFit="object-cover"
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
                      fill
                      objectFit="object-cover"
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