
import React from "react";
import WaitlistForm from "@/components/ui/WaitlistForm";

export const CallToAction: React.FC = () => {
  return (
    <section className="cta-section mt-24 max-w-[1400px] mx-auto">
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
