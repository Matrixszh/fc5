"use client";
import Image from "next/image";
import bg_img from "../../public/bgimg4.jpg";
import logo from "../../public/logo.png";
import React, { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import Service from "@/components/Service";
import PopupForm from "@/components/PopupForm";
import { Footer } from "@/components/Footer";
import ImgCarousal  from "@/components/ImgCarousal";
import { useInView } from "react-intersection-observer";
import { Button_Component } from "@/components/Button_Component";
import Intro from "@/components/Intro";
import { Carousel } from "@/components/ui/carousel";
import { SpecialityComponent } from "@/components/SpecialityComponent";
import { AboutUs } from "@/components/About";
import Clientale from "@/components/Clintale";
import Teams from "@/components/Team";
import Team from "@/components/Team";
import Service2 from "@/components/Service2";
import Certifications from "@/components/Certifications";
import Servintro from "@/components/Servintro";
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
            <h1 className="uniform-heading-xl mb-6">
              <span className="text-red-500">Our</span> <span className="text-black">Clients</span>
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
          
        </div>
      </section>
    </div>
        <section className=" pb-10">
        
        <Clientale />
      </section>
     


      <section className="relative">

      </section>
      <Footer />
    </main>
  );
}
