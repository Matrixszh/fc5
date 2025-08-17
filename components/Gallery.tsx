// components/Gallery.tsx
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      const images = galleryRef.current.querySelectorAll(".gallery-image");
      images.forEach((img, index) => {
        gsap.fromTo(
          img,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.05,
            scrollTrigger: {
              trigger: img,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  // Replace these URLs with your actual images later
  const images = [
    { src: "/fci1.png" },
    { src: "/fci2.png" },
    { src: "/fci3.png" },
    { src: "/fci4.png" },
    { src: "/fci5.png" },
    { src: "/fci6.png" },
    { src: "/fci7.png" },
    { src: "/fci8.png" },
    { src: "/fci9.png" },
    { src: "/fci10.png" },
    { src: "/fci11.png" },
  ];

  return (
    <section className="bg-gray-100 pt-10" ref={galleryRef}>
      <div className="uniform-container">
        <h2 className="uniform-heading-lg mb-12 text-center">
          <span className="text-red-500">Project</span> <span className="text-black">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="gallery-image relative overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={img.src}
                alt={`Gallery image ${idx + 1}`}
                width={500}
                height={500}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />


            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
