
import React from "react";
import WaitlistForm from "@/components/ui/WaitlistForm";

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.rtbrain.app/browser/Hero_BG_1742742329.svg+xml"
          alt="background"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[82px] px-5 w-full">
        <h1 className="font-['Lexend'] text-5xl md:text-6xl font-bold text-[#080808] leading-[1.1] max-w-[1100px] mb-6">
          Know the Company Before You Apply.
        </h1>
        <p className="font-['DM_Sans'] text-xl md:text-3xl font-light text-[#080808] leading-relaxed tracking-[1%] max-w-[900px] mb-12">
          We give you AI-powered reports on company culture, salary ranges, red flags, and insider reviews — all in one place.
        </p>
        <div className="max-w-md w-full">
          <WaitlistForm />
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1000px] mx-auto mt-auto pb-10">
        <img
          src="/lovable-uploads/84f652de-81e6-4a7a-9ee6-3628f0e33d3d.png"
          alt="Company overview dashboard"
          className="w-full h-auto filter drop-shadow-[0px_0px_76px_rgba(61,_57,_93,_0.25)]"
        />
      </div>
    </div>
  );
};

export default Hero;
