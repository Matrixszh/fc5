"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const PodcastIntro = () => {
  return (
    <section id='aboutUs' className="pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-4 text-black pb-7">
          Our<span className="text-red-500"> Mission</span>
        </h2>

          {/* Description Text */}
          <p className="text-gray-800 text-lg md:text-base mb-8 max-w-3xl text-justify md:text-center">
            Our mission is to provide multidisciplinary fire safety solutions through technical expertise, practical implementation, and adherence to national and international standards. We are committed to excellence, integrity, and building long-term trust by delivering every project with quality, compliance, and zero conflict.
          </p>


          
        </div>
      </div>
    </section>
  );
};

export default PodcastIntro;