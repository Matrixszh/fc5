import React from "react";
import Image from "next/image";

const Team: React.FC = () => {
  return (
    <section className="py-16 text-center">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/logo.png" // Replace with your image path
              alt="Pace Morby"
              width={300}
              height={300}
              quality={100}
              className=" w-[230px] h-[230px] lg:w-[70%] lg:h-[70%] mx-auto object-cover  mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Aftab Ahmed</h3>
            <p className="text-gray-600 pb-6">
              B.E. Civil | Cheif
            </p>

          </div>
          
          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/logo.png" // Replace with your image path
              alt="Jade Jarvis"
              width={300}
              height={300}
              quality={100}
              className=" w-[230px] h-[230px] lg:w-[70%] lg:h-[70%] mx-auto object-cover  mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Apoorva Srivastava</h3>
             <p className="text-gray-600 pb-6">
              B.E. Fire & Safety  | Design Engineer
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/logo.png" // Replace with your image path
              alt="Heather"
              width={300}
              height={300}
              quality={100}
              className=" w-[230px] h-[230px] lg:w-[70%] lg:h-[70%] mx-auto object-cover  mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Shiraz Shaikh</h3>
             <p className="text-gray-600 pb-6">
               M.Tech(Mech), CWI(UK) | Project Engineer
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform hover:scale-105 duration-300">
            <Image
              src="/logo.png" // Replace with your image path
              alt="Nathan"
              width={300}
              height={300}
              quality={100}
              className=" w-[230px] h-[230px] lg:w-[70%] lg:h-[70%] mx-auto object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Kushal Chary Cingaram</h3>
             <p className="text-gray-600 pb-6">
              M.Tech(Mech) | Project Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;