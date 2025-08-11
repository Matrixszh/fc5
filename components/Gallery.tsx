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
    { src: "https://picsum.photos/id/1018/500/500" },
    { src: "https://picsum.photos/id/1025/500/500" },
    { src: "https://picsum.photos/id/1031/500/500" },
    { src: "https://picsum.photos/id/1040/500/500" },
    { src: "https://picsum.photos/id/1050/500/500" },
    { src: "https://picsum.photos/id/1062/500/500" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" ref={galleryRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-red-500 text-center">
          Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
