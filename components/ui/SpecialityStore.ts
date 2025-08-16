import { Store } from "pullstate";

type ButtonDataType = {
  title: string;
  description: string;
  content: string;
  footer: string;
  image: string;
};

type ButtonType = "Experience" | "Variety" | "Presence";

export const SpecialityStore = new Store({
  selectedButton: "Experience" as ButtonType,
  buttonData: {
    Experience: {
      title: "Experience",
      description: "Since 2000, Crossfire has maintained an impeccable track record with zero incomplete projects, no confrontations, and no litigation with any client.",
      content: "Since 2000, Crossfire has maintained an impeccable track record with zero incomplete projects, no confrontations, and no litigation with any client.",
      footer: "25+ Years | Zero Project Failures | Perfect Client Relations",
      image: "/fire-safety-experience.jpg",
    },
    Variety: {
      title: "Variety",
      description: "Unlike competitors who specialize in single services, Crossfire offers a complete ecosystem covering design consultation, hazard assessment, installation, maintenance, training, and manufacturing.",
      content: "Unlike competitors who specialize in single services, Crossfire offers a complete ecosystem covering design consultation, hazard assessment, installation, maintenance, training, and manufacturing.",
      footer: "End-to-End Solutions | Single Point of Contact | Complete Fire Safety",
      image: "/fire-safety-comprehensive.jpg",
    },
    Presence: {
      title: "Presence",
      description: "With established operations across 4 major cities (Hyderabad, Chennai, Pune, Mumbai), Crossfire combines national reach with deep local knowledge.",
      content: "With established operations across 4 major cities (Hyderabad, Chennai, Pune, Mumbai), Crossfire combines national reach with deep local knowledge.",
      footer: "4 Cities | Pan-India Operations | Local Compliance Expertise",
      image: "/fire-safety-presence.jpg",
    },
  },
});
