// components/MainServices.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, FlameKindling, Sparkles, AreaChart, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MainServices() {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (servicesRef.current) {
      const serviceItems = servicesRef.current.querySelectorAll(".service-item");
      serviceItems.forEach((item, index) => {
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

  const mainServices = [
    {
      title: "Consulting Services",
      icon: <Shield className="h-8 w-8 text-white" />,
      description: "CROSSFIRE Fire Protection Engineers, Consultants was established in Year 2000 as Core Fire Safety Engineers.Our consultancy organization with special focus on",
      features: [
        "Fire Prevention Designs",
        "Fire Hazard Assessment Reports",
        "Survey & Preparation of Reports",
        "Initial Planning, Consulting & Cost Estimating",
        "Preparation of Fabrication/installation Plans",
        "Project Management",
        "Administration & Commissioning",
        "Fire Escape Plans",
        "Fire Evacuation Drills",
      ],
    },
    {
      title: "Fire Hydrant Systems",
      icon: <FlameKindling className="h-8 w-8 text-white" />,
      description: "Complete installation and maintenance of fire hydrant systems",
      features: [
        "Hydrant Valves",
        "Hose Boxes",
        "Hose Pipes",
        "Branch Pipes",
        "Regular Maintenance",
      ],
    },
    {
      title: "Automatic Sprinkler Systems",
      icon: <Sparkles className="h-8 w-8 text-white" />,
      description: "Effective sprinkler systems for automatic fire suppression",
      features: [
        "Design & Installation",
        "Various Types of Sprinklers",
        "Control Valve Assemblies",
        "Maintenance & Testing",
        "Code Compliance",
      ],
    },
    {
      title: "Fire Detection Systems",
      icon: <AreaChart className="h-8 w-8 text-white" />,
      description: "Advanced fire detection systems for early warning",
      features: [
        "Smoke & Heat Detectors",
        "Manual Call Points",
        "Hooters & Alarm Panels",
        "Addressable Fire Alarm Panels",
        "System Integration",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24" ref={servicesRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`service-item flex flex-col  ${
                index % 2 === 1 ? "md:flex-row-reverse " : "md:flex-row"
              } gap-16 items-center `}
            >
              {/* Service Icon Section */}
              <div className="w-full md:w-1/2">
                <div
                  className={`aspect-square rounded-3xl overflow-hidden bg-light-gray flex items-center justify-center relative ${
                    index % 2 === 0
                      ? "bg-gray-200"
                      : "bg-gray-200"
                  }`}
                >
                  <div className="absolute w-40 h-40 bg-red-500 rounded-full opacity-20 blur-xl transform translate-x-1/4 -translate-y-1/4"></div>
                  <div className="absolute w-32 h-32 bg-red-500 rounded-full opacity-20 blur-xl bottom-0 right-0 transform -translate-x-1/4 translate-y-1/4"></div>

                  <motion.div
                    className="h-24 w-24 rounded-2xl bg-red-500 text-white flex items-center justify-center z-10 glow-gradient"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
              </div>

              {/* Service Details */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-red-500 crossfire-border pb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-8">{service.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className=" flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-red-500 " />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 gap-2 border-2 border-primary-600"
                  >
                    Inquire Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
