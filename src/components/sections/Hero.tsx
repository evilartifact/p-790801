
import React from "react";
import WaitlistForm from "@/components/ui/WaitlistForm";
import { Badge } from "@/components/ui/badge";

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#E5DEFF] via-[#D6BCFA] to-[#9b87f5] rounded-2xl"></div>
      
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
          <div className="flex justify-center mt-4">
            <Badge variant="outline" className="bg-white/50 backdrop-blur-sm text-[#110B53] py-1 px-3 text-sm font-medium border border-[#9b87f5]/30">
              More than 100 job seekers already joined
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1000px] mx-auto mt-auto overflow-hidden h-[65vh]">
        <img
          src="/lovable-uploads/194c624e-2bfc-4841-b101-30dca8ca5db2.png"
          alt="Company overview dashboard"
          className="w-full object-cover object-top"
        />
      </div>
    </div>
  );
};

export default Hero;
