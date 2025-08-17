"use client";
import Image from "next/image";
import bg_img from "../../public/bgimg6.png";
import logo from "../../public/logo.png";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Header } from "@/components/Header";
import { Stats } from "@/components/Data/We_Are_Data";
import PopupForm from "@/components/PopupForm";
import CountUp from "react-countup";
import { Footer } from "@/components/Footer";
import { useInView } from "react-intersection-observer";
import { Button_Component } from "@/components/Button_Component";
import { AboutUs } from "@/components/About";
import About3 from "@/components/About3";
import Team from "@/components/Team";
import Link from "next/link";
import emailjs from '@emailjs/browser';

export default function Home() {
  const [scrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
        setIsVisible(false);
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
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

  // Handle form input changes with proper TypeScript typing
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission with proper TypeScript typing
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const serviceId = 'YOUR_SERVICE_ID';
      const templateId = 'YOUR_TEMPLATE_ID';
      const publicKey = 'YOUR_PUBLIC_KEY';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone,
        message: formData.message,
        to_name: 'Fire Safety Team', // You can customize this
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('Email sent successfully:', result);
      alert('Thank you for your message! We will get back to you soon.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <span className="text-red-500">Contact</span> <span className="text-black">Us</span>
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
                    <h2 className="uniform-heading-sm uniform-text-secondary">Fire Safety Excellence</h2>
                    <p className="uniform-text-base uniform-text-muted mt-1">
                      Learn about our comprehensive fire safety solutions and expertise
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
                    <h2 className="uniform-heading-sm uniform-text-secondary">Our Story & Mission</h2>
                    <p className="uniform-text-base uniform-text-muted mt-1">
                      Discover our journey and commitment to protecting lives and property
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
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
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="text-center mb-12">
              <h2 className="uniform-heading-xl mb-4">
                <span className="text-red-500">Get</span> <span className="text-black">In Touch</span>
              </h2>
              <p className="uniform-text-base uniform-text-muted max-w-2xl mx-auto">
                Ready to enhance your fire safety? Contact our experts today for a consultation 
                and discover how we can protect what matters most to you.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your fire safety needs..."
                    />
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:ring-4 focus:ring-red-200 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="w-full py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="uniform-heading-sm mb-2">Visit Us</h3>
                <p className="uniform-text-base uniform-text-muted">
                  8-1-400/48, Deluxe Colony<br />
                  , Tolichowki, Hyderabad
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="uniform-heading-sm mb-2">Call Us</h3>
                <p className="uniform-text-base uniform-text-muted">
                  +91 92461 99077
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="uniform-heading-sm mb-2">Email Us</h3>
                <p className="uniform-text-base uniform-text-muted">
                  cfschyd@gmail.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
