import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Residential Apartment & Highrise Building",
      description: "Quick funding for property renovation.",
      backDescription:
        "I found a distressed property in a prime location, but I lacked the funds for renovation. Creative Funding for help, and they provided me with a Rehab Loan that covered both the purchase and the renovation.",
      badge: "Adam M",
      image: "/resid.jpeg",
    },
    {
      title: "Commercial Complexes",
      description: "Fast, flexible financing for rentals.",
      backDescription:
        "I wanted to expand my rental portfolio and needed a reliable financing option. Creative Funding offered me a DSCR Rental Loan, which enabled me to purchase a new rental property. The loan terms were flexible, and the approval process was fast.",
      badge: "Karl T",
      image: "/mall.jpg",
    },
    {
      title: "Hotels/Restaurants",
      description: "Financed renovations for community revitalization.",
      backDescription:
        "I purchased an old, run-down property with the vision of revitalizing it and improving the local community. With a Rehab Loan, I was able to finance extensive renovations.",
      badge: "Maria S",
      image: "/hotels.jpg",
    },
    {
      title: "Schools & Educational Buildings",
      description: "Immediate funding for prime opportunity",
      backDescription:
        "When I came across a prime investment opportunity, I knew I had to act fast. However, my capital was tied up in another property that hadn't sold yet. Creative Funding came through with a Bridge Loan that gave me the immediate funds I needed.",
      badge: "Michael W",
      image: "/schools.jpg",
    },
        {
      title: "Hospitals",
      description: "Financed renovations for community revitalization.",
      backDescription:
        "I purchased an old, run-down property with the vision of revitalizing it and improving the local community. With a Rehab Loan, I was able to finance extensive renovations.",
      badge: "Maria S",
      image: "/hosptial.jpg",
    },
    {
      title: "Industries",
      description: "Immediate funding for prime opportunity",
      backDescription:
        "When I came across a prime investment opportunity, I knew I had to act fast. However, my capital was tied up in another property that hadn't sold yet. Creative Funding came through with a Bridge Loan that gave me the immediate funds I needed.",
      badge: "Michael W",
      image: "/industries.png",
    },
            {
      title: "Power Plant",
      description: "Financed renovations for community revitalization.",
      backDescription:
        "I purchased an old, run-down property with the vision of revitalizing it and improving the local community. With a Rehab Loan, I was able to finance extensive renovations.",
      badge: "Maria S",
      image: "/powerplant3.jpg",
    },
  ];

  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    new Array(testimonials.length).fill(false)
  );

  const handleFlip = (index: number) => {
    setFlippedStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          To Whom Do We <span className="text-red-500">Cater</span>
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto text-lg">
         Discover our range of fire safety solutions, from residential protection to industrial-grade systems, designed to safeguard lives and property while ensuring full compliance and peace of mind.
        </p>
      </div>
      
      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((card, index) => (
          <div key={index} className="relative">
            <ReactCardFlip
              isFlipped={flippedStates[index]}
              flipDirection="horizontal"
              containerClassName="w-full h-full"
            >
              {/* Front Face - White Background */}
              <Card className="rounded-xl border border-gray-200 overflow-hidden h-[400px] shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                <div className="relative h-72">
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="w-full"
                  />
                  <div className="absolute inset-0 "></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex gap-3 items-center mb-4">

                    <h3 className="text-xl font-bold text-gray-800">
                      {card.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>

              {/* Back Face - White Background */}
              <Card className="rounded-xl border border-gray-200 overflow-hidden h-[480px] shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
                
              </Card>
            </ReactCardFlip>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;