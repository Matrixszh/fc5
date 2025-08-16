import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    
    question: "What makes CROSSFIRE different from other fire safety companies?",
    answer:
      "CROSSFIRE stands apart thanks to 25+ years of proven experience, a commitment to completing every project successfully, comprehensive end-to-end solutions, and a respected multi-city presence in Hyderabad, Chennai, Pune, and Mumbai.",
  },
  {
    question: "What fire safety services do you provide?",
    answer:
      "We offer turnkey fire safety solutions including fire prevention design, hazard assessments, equipment installation (sprinklers, hydrants, alarms, pumps), maintenance, fire training, fabrication plans, and supply of extinguishers and safety products.",
  },
  {
    question: "Are your projects compliant with legal and safety standards?",
    answer:
      "Absolutely. Every installation meets Bureau of Indian Standards, NBC of India, and local fire department codes. We are an approved Supervisory Installer, ensuring ongoing compliance and protection for clients.",
  },
  {
    question: "What industries have you served?",
    answer:
      "Our client list includes IT parks, hospitals, hotels, schools, shopping complexes, manufacturing units, residential buildings, and research labs, demonstrating our versatility across sectors.",
  },
  {
    question: "Do you offer consultation for fire safety planning and auditing?",
    answer:
      "Yes. We provide expert consulting, site surveys, hazard assessment reports, initial planning, cost estimation, and help with evacuation drills and escape route planning.",
  },
  {
    question: "How qualified is your team?",
    answer:
      "Our team includes civil, mechanical, fire safety, and electrical engineers, along with experienced supervisors and certified technicians. Our chief engineer has over 30 years of experience in fire safety.",
  },
  {
    question: "How does your pan-India presence benefit clients?",
    answer:
      "With established operations in 4 major cities, we bring both national reach and local expertise, ensuring region-specific compliance and prompt service wherever your projects are located.",
  },
  {
    question: "Have you completed projects for well-known organizations?",
    answer:
      "Yes, our portfolio includes respected clients like D. E. Shaw & Co., University of Hyderabad, Amrutha Castle, Sarath City Capital Mall, various hospitals, schools, hotels, and more.",
  },
  {
    question: "Can you provide maintenance and ongoing support?",
    answer:
      "We offer comprehensive contracting, maintenance, technician services, panel support, and fire safety training to ensure your systems continue to operate safely and effectively.",
  },
  {
    question: "What should I do to get a quote or schedule a site visit?",
    answer:
      "You can contact us directly via phone (9246199077), email (cfschyd@gmail.com), or through our website. We will promptly arrange a consultation and site assessment tailored to your needs.",
  },

];

const FaqItem: React.FC<{ faq: FAQ; isExpanded: boolean; onToggle: () => void }> = ({ faq, isExpanded, onToggle }) => (
  <div className="mb-4">
    <button
      onClick={onToggle}
      className="w-full text-left px-4 py-3 text-sm sm:text-base lg:text-lg font-bold rounded-lg bg-transparent hover:bg-gradient-to-r from-[#E60404] to-[#820202] hover:text-white transition-all duration-300 focus:outline-none flex justify-between"
    >
            {faq.question}
            {isExpanded ?  <IoIosArrowUp />:<IoIosArrowDown /> }
    </button>
    {isExpanded && (
      <div className="px-4 py-3 text-sm sm:text-base lg:text-lg mt-2 bg-gray-100 rounded-lg">
        {faq.answer}
      </div>
    )}
  </div>
);

export default function Faqs() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isExpanded={expanded === index}
            onToggle={() => toggleAnswer(index)}
          />
        ))}
      </div>
    </section>
  );
}