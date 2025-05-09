
import React from "react";
import CustomButton from "@/components/ui/CustomButton";

export const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center px-[31px] py-[21px] max-md:px-5">
      <div>
        <span className="text-xl font-['Lexend'] font-semibold text-[#080808]">CompanyScout</span>
      </div>
      <CustomButton className="px-[27px] py-[13px] text-[17px] leading-[19px] font-[500] font-['Lexend']">
        Join Waitlist
      </CustomButton>
    </nav>
  );
};

export default Navbar;
