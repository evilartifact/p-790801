
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 mt-8">
      <div className="max-w-[1400px] mx-auto px-5 text-center">
        <p className="text-[#080808] font-light">
          © {new Date().getFullYear()} CompanyScout. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
