
import React from "react";
import JobFeatureCard from "@/components/ui/JobFeatureCard";

export const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Summarizes Glassdoor, Reddit, and LinkedIn into one clean report",
      icon: "file-text",
    },
    {
      id: 2,
      title: "Shows pros, cons, salary ranges, and hiring patterns",
      icon: "chart-bar",
    },
    {
      id: 3,
      title: "Lets you know if a company is worth applying to",
      icon: "check",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-[100px] px-5">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-semibold text-[#080808] leading-tight mb-6">
          Make Smarter Career Moves
        </h2>
        <p className="text-xl md:text-2xl text-[#080808] font-light leading-relaxed max-w-[800px]">
          Our AI analyzes thousands of data points across the web to give you the complete picture of what it's really like to work somewhere.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] px-5">
        {features.map((feature) => (
          <JobFeatureCard
            key={feature.id}
            title={feature.title}
            icon={feature.icon as "file-text" | "chart-bar" | "check"}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
