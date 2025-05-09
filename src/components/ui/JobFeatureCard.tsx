
import React from "react";
import { cn } from "@/lib/utils";
import { FileText, ChartBar, Check } from "lucide-react";

interface JobFeatureCardProps {
  title: string;
  icon: "file-text" | "chart-bar" | "check";
  className?: string;
}

const JobFeatureCard: React.FC<JobFeatureCardProps> = ({
  title,
  icon,
  className,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "file-text":
        return <FileText className="feature-icon" />;
      case "chart-bar":
        return <ChartBar className="feature-icon" />;
      case "check":
        return <Check className="feature-icon" />;
      default:
        return <FileText className="feature-icon" />;
    }
  };

  return (
    <div className={cn("feature-card", className)}>
      {renderIcon()}
      <p className="text-xl text-[#080808] font-medium text-center">{title}</p>
    </div>
  );
};

export default JobFeatureCard;
