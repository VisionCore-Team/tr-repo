import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../../public/img/Ç.svg";
import { SlideIn } from "../fade/SlideIn";
import { useState } from "react";

const Navbar = () => {
  // State for tracking dropdown visibility
  const [solutionsDropdownVisible, setSolutionsDropdownVisible] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false);

  // Toggle dropdown visibility on click
  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownVisible(!solutionsDropdownVisible);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Team", to: "about" },
    { id: 2, text: "Tech Stack", to: "skills" },
    { id: 3, text: "Projects", to: "project" },
    { id: 4, text: "Ethical Values", to: null, href: "/ethicalvalues" },
    { id: 5, text: "Core", to: null, href: "/core" },
    { id: 6, text: "Blog", to: null, href: "/blog" },
    { id: 7, text: "Brochure", to: null, href: "/brochure/tr" },
  ];

  const bySolution = [
    { id: 1, text: "Indoor Car Tracking & License Plate Detection  ", to: "/solutions/bysolution/licenseplate" },
    { id: 2, text: "Port Operations", to: "/solutions/bysolution/portoperations" },
  ];

  const byIndustry = [
    { id: 1, text: "Health", to: "/solutions/byindustry/health" },
    { id: 2, text: "Manufacturing", to: "/solutions/byindustry/manufacturing" },
    { id: 3, text: "Agriculture", to: "/solutions/byindustry/agriculture" },
  ];

  return (
    <div className="navbar bg-base-300 rounded-box flex items-center justify-between max-w-[1240px] mx-auto px-4 text-white">
      {/* Logo */}
      <SlideIn>
        <a href="/" className="flex justify-center md:justify-start w-full md:w-auto">
          <img src={logo} alt="VisionCore Logo" className="h-16 md:h-16" />
        </a>
      </SlideIn>

      {/* Navigation */}
      <SlideIn duration={0.8} delay={0.8}>
        <div className="flex items-center space-x-5 mt-4 md:mt-0">
          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              onClick={toggleSolutionsDropdown}
              className="btn btn-ghost rounded-btn text-sm font-bold"
            >
              Solutions
            </button>
            {solutionsDropdownVisible && (
              <ul className="absolute top-full left-0 mt-2 w-56 bg-sky-950 border border-gray-700 rounded-lg shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-sky-800 cursor-pointer">
                  <span className="font-semibold">By Industry</span>
                  <ul className="mt-1 ml-4">
                    {byIndustry.map((item) => (
                      <li key={item.id} className="py-1">
                        <a href={item.to} className="hover:text-gray-300">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="px-4 py-2 hover:bg-sky-800 cursor-pointer">
                  <span className="font-semibold">By Solutions</span>
                  <ul className="mt-1 ml-4">
                    {bySolution.map((item) => (
                      <li key={item.id} className="py-1">
                        <a href={item.to} className="hover:text-gray-300">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            )}
          </div>

          {/* Other Navigation Items */}
          {navItems.map((item) => (
            <div
              key={item.id}
              className="text-white font-bold px-2 cursor-pointer text-sm"
            >
              {item.to === null ? (
                <a href={item.href} className="hover:text-gray-300">
                  {item.text}
                </a>
              ) : (
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="btn btn-ghost rounded-btn"
                >
                  {item.text}
                </Link>
              )}
            </div>
          ))}

          {/* Language Dropdown */}
          <div className="relative ml-4">
            <button
              onClick={toggleLanguageDropdown}
              className="btn btn-ghost rounded-btn text-sm font-bold flex items-center"
            >
              Language
              <svg
                className="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {languageDropdownVisible && (
              <ul className="absolute right-0 top-full mt-2 w-40 bg-base-100 border bg-zinc-900 border-gray-300 rounded-lg shadow-lg z-10">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://visioncore.com.tr" className="block">
                    TR
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  <a href="https://visioncore.org.tr" className="block">
                    ENG
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </SlideIn>
    </div>
  );
};

export default Navbar;
