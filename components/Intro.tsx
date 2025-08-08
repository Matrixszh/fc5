import Link from 'next/link';
import React from 'react';

const Intro= () => {
  return (
    <section className="relative w-full py-16 md:py-24 text-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Heading */}
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold leading-tight">
            Want to be a <br />
            <span className="text-red-500">Speaker</span> on our <br />
            Podcast <span className="text-red-500">?</span>
          </h1>
           <Link href="/HomePage">
              <button className="mt-6 px-6 py-3 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
                Read Our Story
              </button>
            </Link>
        </div>

        {/* Right Section: Description */}
        <div className="w-full md:w-1/2">
          <p className="text-sm md:text-base leading-relaxed text-gray-800">
            This podcast offers you an insight about the host Abdullah and his
            struggles to achieve what is now by measures the most immaculate
            form of success. Join Abdullah Ghaffar as he engages with the brightest minds in the real estate industry! Discover actionable tips, inspiring stories, and insider knowledge from top performers and experts in real estate investing and raising capital.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;