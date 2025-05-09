
import React from "react";
import WaitlistForm from "@/components/ui/WaitlistForm";

export const CallToAction: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#110B53] to-[#6E59A5] text-white text-center rounded-2xl py-16 px-6 mt-24 mx-auto">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Stop applying blind. Join early users and get smart about your next move.
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          Be among the first to access our AI-powered company insights platform.
        </p>
        <WaitlistForm />
      </div>
    </section>
  );
};

export default CallToAction;
