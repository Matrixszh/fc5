"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const PodcastIntro = () => {
  return (
    <section id='aboutUs' className="pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
            A podcast with<br />
            masterminds at work<br />
            delve into the secrets<br />
            of success
          </h2>

          {/* Description Text */}
          <p className="text-gray-800 text-sm md:text-base mb-8 max-w-3xl text-justify md:text-center">
            Join <strong>Abdullah Ghaffar</strong> as he engages with the brightest minds in the real estate 
            industry! Discover actionable tips, inspiring stories, and insider knowledge from top performers 
            and experts in real estate investing and raising capital.
          </p>


          
        </div>
      </div>
    </section>
  );
};

export default PodcastIntro;