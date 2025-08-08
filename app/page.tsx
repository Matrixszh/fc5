"use client";
import Image from "next/image";
import bg_img from "../public/bg_img.jpg";
import bg_img2 from "../public/bg_img2.jpeg";
import bg_img3 from "../public/bg_img3.jpeg";
import forward from "../public/Forward.png";
import car_small from "../public/car_small.png";
import car_large from "../public/car_large.png";
import car from "../public/car.png";
import car_new from "../public/car_new.png";
import car_new2 from "../public/car_new2.png";
import car2 from "../public/car2.png";
import logo from "../public/logo.png";
import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import Service from "@/components/Service";
import about from "../public/about.png";
import { About_data } from "@/components/Data/About_Data";
import { Stats } from "@/components/Data/We_Are_Data";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import Brands from "@/components/Brands";
import PopupForm from "@/components/PopupForm";
import Faqs from "@/components/Faqs";
import CountUp from "react-countup";
import { Footer } from "@/components/Footer";
import ImgCarousal  from "@/components/ImgCarousal";
import { useInView } from "react-intersection-observer";
import { Button_Component } from "@/components/Button_Component";
import Intro from "@/components/Intro";
import { Carousel } from "@/components/ui/carousel";
import { SpecialityComponent } from "@/components/SpecialityComponent";

export default function Home() {
  const [scrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        // Adjust this value as needed
        setIsScrolled(true);
        setIsVisible(false);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <main>
      
      <div
        className={`
    flex gap-5 items-center z-20 fixed 
    bottom-4 right-4 md:bottom-8 md:right-8
    animate-pulse
  `}
      >
        <div className="overflow-hidden">
          <p
            className={`
        text-white text-md md:text-lg font-bold
        transition-all duration-300 ease-in-out
        ${
          isVisible
            ? "opacity-100 translate-x-0 visible"
            : "opacity-0 -translate-x-full invisible"
        }
      `}
          >
            Contact Now!
          </p>
        </div>
        <Button_Component />
      </div>
      
     <div className="min-h-screen">
      <section className="">
        <Header />
      </section>
      
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] flex flex-col lg:flex-row">
        {/* Left Content - White Background */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The next generation of fire protection and integrated security
            </h1>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className=" w-12 h-12 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <Image 
                    src={logo} 
                    alt="Safety icon" 
                    width={32} 
                    height={32} 
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Neglecting Fire Safety Measures</h2>
                  <p className="text-gray-600 mt-1">
                    Avoid costly mistakes with our comprehensive fire safety solutions
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className=" w-12 h-12 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                  <Image 
                    src={logo} 
                    alt="Risk mitigation icon" 
                    width={32} 
                    height={32} 
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Mitigate Risk Of Life, Property & Offense Of Law</h2>
                  <p className="text-gray-600 mt-1">
                    Comprehensive protection systems to safeguard what matters most
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={openPopup}
                className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-900 text-white font-bold rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-transform"
              >
                GET A QUOTE
              </button>
              
              <button className="px-8 py-3 bg-white border-2 border-gray-300 text-gray-800 font-bold rounded-lg hover:border-red-600 hover:text-red-700 transition-colors duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Content - Image */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-[90vh]">
          <Image
            src={bg_img}
            alt="Advanced fire protection system"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
            className="select-none"
          />
          
          {/* Overlay for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10 lg:hidden"></div>
        </div>
      </section>
    </div>
      <section className="">
        
        <Intro />
      </section>
      <section className="">
        
        <ImgCarousal />
      </section>
      <section className="">
        
        <SpecialityComponent />
      </section>
<section
        className="relative  flex flex-col items-center text-white my-16 "
        id="testimonial_sec"
      >
        <div className="mb-4">
          <span className="px-6 py-2 bg-custom-gradient text-white font-semibold rounded-full">
            TESTIMONIAL
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-semibold mt-6 mb-4 text-center"
          id="testimonial_heading"
        >
          What Clients Are Saying
        </h2>
        <p
          className="text-md md:text-xl lg:max-w-2xl max-w-lg mt-2 text-center text-white px-2"
          id="testmonial_content"
        >
          Hear from our satisfied customers who have experienced the benfit of
          using our services and what their dreams have become
        </p>
        <Service />
      </section>

      <PopupForm isOpen={isPopupOpen} onClose={closePopup} />
      <section className="relative">
        <div className="flex items-center justify-center gap-2 pt-8">
          <div>
            <h1 className="text-black lg:text-6xl text-3xl">FAQs</h1>
          </div>
        </div>
        <Faqs />
      </section>
      <Footer />
    </main>
  );
}
