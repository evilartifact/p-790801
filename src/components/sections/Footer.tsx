
import React from "react";
import { Link } from "react-router-dom";
import WaitlistForm from "@/components/ui/WaitlistForm";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FDFDFD] border-t-2 border-[#080808] mt-24 py-16">
      <div className="max-w-[1400px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-6">
              <img 
                src="https://cdn.rtbrain.app/browser/company_scout_logo_1746817053_118x32.png" 
                alt="CompanyScout Logo" 
                className="h-8"
              />
            </div>
            <p className="text-[#080808] text-lg font-light mb-6">
              Know exactly what you're getting into before you apply. Get the inside scoop on company culture, pay, and more.
            </p>
            <div className="max-w-md">
              <p className="font-medium text-[#110B53] mb-3">Join our waitlist</p>
              <WaitlistForm />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#080808] mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Updates
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  API
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-[#080808] mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-[#080808] font-light hover:text-[#110B53]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#080808] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#080808] font-light mb-4 md:mb-0">
            © {new Date().getFullYear()} CompanyScout. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="#"
              className="text-[#080808] font-light hover:text-[#110B53]"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-[#080808] font-light hover:text-[#110B53]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
