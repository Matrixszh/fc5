// components/Certifications.tsx
import { Award, Medal, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (certRef.current) {
      const certItems = certRef.current.querySelectorAll(".cert-item");
      certItems.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100",
              toggleActions: "play none none none",
            },
            delay: index * 0.1,
          }
        );
      });
    }
  }, []);

  const certifications = [
    {
      title: "ISO 9001:2015 Quality Management Certification",
      icon: <Award className="h-8 w-8 text-white" />,
    },
    {
      title: "National Fire Safety Excellence Award",
      icon: <Trophy className="h-8 w-8 text-white" />,
    },
    {
      title: "Certified Fire Safety Inspection Agency",
      icon: <Medal className="h-8 w-8 text-white" />,
    },
    {
      title: "Outstanding Workplace Safety Achievement",
      icon: <Award className="h-8 w-8 text-white" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 " ref={certRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-red-500 text-center">
          Certifications & Awards
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-item flex items-center gap-6 p-6 rounded-2xl bg-white shadow-lg border"
            >
              <motion.div
                className="h-16 w-16 rounded-2xl bg-red-500 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {cert.icon}
              </motion.div>

              <span className="text-lg font-semibold text-gray-800">
                {cert.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
