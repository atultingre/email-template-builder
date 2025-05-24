import React from "react";
import { Button } from "../button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="px-10 md:px-28 lg:px-44 xl:px-56 flex flex-col items-center mt-24">
      <h2 className="font-extrabold text-3xl md:text-5xl text-center">
        AI-Powered
        <span className="text-primary"> Email Templates</span>
      </h2>
      <p className="text-center mt-4">
        Login to impress clients with AI-powered emails but dont habe enough
        time to build them on your own ? USE the AI-powred emails templates that
        already have AI-generated imagenary and copy -- save time on emial
        production wih us
      </p>
      <div className="flex gap-5 mt-6">
        <Button variant="outline">Try Demo</Button>
        <Button>Get Started</Button>
      </div>
      <Image
        src={"/landing.webp"}
        alt="landing"
        width={1000}
        height={800}
        className="mt-12 rounded-xl"
      />
    </div>
  );
};

export default Hero;
