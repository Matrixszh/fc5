import { Store } from "pullstate";

type ButtonDataType = {
  title: string;
  description: string;
  content: string;
  footer: string;
  image: string;
};

type ButtonType = "Experience" | "Comprehensive" | "Presence";

export const SpecialityStore = new Store({
  selectedButton: "Experience" as ButtonType,
  buttonData: {
    Experience: {
      title: "Experience",
      description: "Since 2000, Crossfire has maintained an impeccable track record with zero incomplete projects, no confrontations, and no litigation with any client. Our quarter-century of experience spans across diverse sectors including healthcare, IT, hospitality, and industrial facilities.",
      content: "Since 2000, Crossfire has maintained an impeccable track record with zero incomplete projects, no confrontations, and no litigation with any client. Our quarter-century of experience spans across diverse sectors including healthcare, IT, hospitality, and industrial facilities, delivering consistent quality and reliability that clients trust.",
      footer: "25+ Years | Zero Project Failures | Perfect Client Relations",
      image: "/fire-safety-experience.jpg",
    },
    Comprehensive: {
      title: "Comprehensive",
      description: "Unlike competitors who specialize in single services, Crossfire offers a complete ecosystem covering design consultation, hazard assessment, installation, maintenance, training, and manufacturing. From initial fire prevention designs to advanced addressable alarm systems.",
      content: "Unlike competitors who specialize in single services, Crossfire offers a complete ecosystem covering design consultation, hazard assessment, installation, maintenance, training, and manufacturing. From initial fire prevention designs to advanced addressable alarm systems and custom fire exit signage, we handle every aspect of fire safety under one roof.",
      footer: "End-to-End Solutions | Single Point of Contact | Complete Fire Safety",
      image: "/fire-safety-comprehensive.jpg",
    },
    Presence: {
      title: "Presence",
      description: "With established operations across 4 major cities (Hyderabad, Chennai, Pune, Mumbai), Crossfire combines national reach with deep local knowledge. Our teams understand regional fire authority regulations and state-specific compliance requirements.",
      content: "With established operations across 4 major cities (Hyderabad, Chennai, Pune, Mumbai), Crossfire combines national reach with deep local knowledge. Our teams understand regional fire authority regulations, local building codes, and state-specific compliance requirements, ensuring seamless project execution regardless of location.",
      footer: "4 Cities | Pan-India Operations | Local Compliance Expertise",
      image: "/fire-safety-presence.jpg",
    },
  },
});
