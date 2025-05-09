
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import CustomButton from "./CustomButton";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace this URL with your Google Apps Script Web App URL
      const scriptUrl = "YOUR_GOOGLE_SCRIPT_URL";
      
      const response = await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors", // Important for CORS issues
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      
      // Since no-cors doesn't give us response details, we assume it worked
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Failed to add you to the waitlist. Please try again later.",
        variant: "destructive",
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="waitlist-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#110B53]"
        required
      />
      <CustomButton 
        type="submit" 
        disabled={isSubmitting}
        className="py-3"
      >
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
      </CustomButton>
    </form>
  );
};

export default WaitlistForm;
