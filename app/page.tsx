"use client";
import Image from "next/image";
import bg_img from "../public/bgimg1.png";
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
import Link from "next/link";

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
      <section className="w-full lg:min-h-[100vh] flex flex-col lg:flex-row">
        {/* Left Content - White Background */}
        <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center p-8 md:p-12 lg:p-16">
          <div className="max-w-lg mx-auto">
            <h1 className="uniform-heading-xl uniform-text-primary leading-10 mb-6 text-center lg:text-left">
              The next generation of
               fire protection and integrated security
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
                  <h2 className="uniform-heading-sm uniform-text-secondary">Neglecting Fire Safety Measures</h2>
                  <p className="uniform-text-base uniform-text-muted mt-1">
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
                  <h2 className="uniform-heading-sm uniform-text-secondary">Mitigate Risk Of Life, Property & Offense Of Law</h2>
                  <p className="uniform-text-base uniform-text-muted mt-1">
                    Comprehensive protection systems to safeguard what matters most
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center jusitfy gap-4">
             
           <Link href="/Contact">
              <button className="text-sm mt-4 px-4 py-2 rounded-full border border-red-500 text-red-500 font-medium hover:bg-red-500 hover:text-white transition">
                Contact Us
              </button>
            </Link>
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
      <section className="pt-7">
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
          What Makes Us<span className="text-red-500"> Different</span>
        </h2>
        <p className="text-gray-800 max-w-2xl mx-auto text-lg px-8">
          With over two decades of expertise, CROSSFIRE has earned a trusted name in fire safety. From technical consultancy to end-to-end protection systems, we ensure compliance with national and international standards—delivering safety without compromise.
        </p>
      </div>
        
        <SpecialityComponent />
      </section>
<section
       
      >


        <Service />
      </section>

      <section className="relative">
        <div className="flex items-center justify-center gap-2 pt-8">
          <div>
            <h1 className="uniform-heading-xl uniform-text-primary">FAQs</h1>
          </div>
        </div>
        <Faqs />
      </section>
      <Footer />
    </main>
  );
}
