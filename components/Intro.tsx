import Link from 'next/link';
import React from 'react';

const Intro= () => {
  return (
    <section className="uniform-bg-secondary uniform-section relative w-full uniform-text-primary">
      <div className="uniform-container flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Heading */}
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start w-full md:w-1/2">
          <h1 className="uniform-heading-xl text-center md:text-left">
            Want to be a <br />
            <span className="text-red-500">Speaker</span> on our <br />
            Podcast <span className="text-red-500">?</span>
          </h1>
           <Link href="/AboutUs">
              <button className="text-sm mt-6 px-4 py-2 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
                Read Our Story
              </button>
            </Link>
        </div>

        {/* Right Section: Description */}
        <div className="w-full md:w-1/2">
          <p className="uniform-text-base uniform-text-secondary">
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
