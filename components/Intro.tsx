import Link from 'next/link';
import React from 'react';

const Intro= () => {
  return (
    <section className="uniform-bg-secondary uniform-section relative w-full uniform-text-primary">
      <div className="uniform-container flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Heading */}
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start w-full md:w-1/2">
          <h1 className="uniform-heading-xl text-center md:text-left">
            What does  <br />
            <span className="text-red-500">CrossFire</span> do ?<br />
          </h1>
           <Link href="/AboutUs">
              <button className="text-sm mt-6 px-4 py-2 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
                Read Our Story
              </button>
            </Link>
        </div>

        {/* Right Section: Description */}
        <div className="w-full md:w-1/2">
          <p className="uniform-text-base uniform-text-secondary text-center lg:text-left">
            We are fire safety professionals with qualified personals & all necessary tools & plants to carry out big projects in time bound conditions. Cross is approved as a Supervisory Installer. This assists in protecting the client’s interests and will comply with proven standards and the latest developments in fire protection design. Furthermore, installations will comply with the relevant Bureau of Indian Standards Code of Practice for Fire Protection, where applicable. Installations can also be designed to codes such as N.B.C.of India, and local fire department.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
