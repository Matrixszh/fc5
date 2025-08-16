"use client";
import React from "react";
import { SpecialityStore } from "./ui/SpecialityStore";
import { FaClock, FaCogs, FaMapMarkerAlt } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export const SpecialityComponent = () => {
  const selectedButton = SpecialityStore.useState((s) => s.selectedButton);
  const buttonData = SpecialityStore.useState((s) => s.buttonData);

  const IconComponents = {
    Experience: FaClock,
    Variety: FaCogs,
    Presence: FaMapMarkerAlt
  };

  const IconComponent = IconComponents[selectedButton];

  return (
    <div className="flex flex-col items-center justify-center w-full gap-10 py-16">
      <div className="lg:w-[40vw] w-[80vw] text-sm rounded-full bg-black bg-opacity-10 flex justify-evenly">
        {(["Experience", "Variety", "Presence"] as const).map((button) => (
          <button
            key={button}
            className={`w-1/3 py-2 rounded-full ${
              selectedButton === button
                ? "bg-red-500 text-white hover:none duration-300"
                : "bg-transparent hover:text-red-500"
            }`}
            onClick={() => {
              SpecialityStore.update((state) => {
                state.selectedButton = button;
              });
            }}
          >
            {button.charAt(0).toUpperCase() + button.slice(1)}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center ">
        <Card className="lg:w-[60vw] w-[80vw] bg-opacity-10 bg-black flex md:flex-row flex-col lg:justify-between justify-center items-center border-none min-h-[40vh]">
          <div className="lg:w-[60vw] md:w-[50vw] lg:h-full h-[90vw] flex items-center flex-col justify-center">
            <CardHeader>
              <CardTitle className="md:text-3xl text-2xl text-black text-center">
                {buttonData[selectedButton].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-800 md:text-lg text-lg text-center">
                {buttonData[selectedButton].content}
              </p>
            </CardContent>
          </div>
          <div className="md:w-[40vw] w-[80vw] flex justify-center items-center">
            <IconComponent className="text-red-500 md:text-[15vw] text-[30vw]" />
          </div>
        </Card>
      </div>
    </div>
  );
};
