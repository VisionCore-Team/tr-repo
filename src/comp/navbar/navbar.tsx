import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../../public/img/Ç.svg";
import { SlideIn } from "../fade/SlideIn";
import { useState, useEffect, useRef } from "react";
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';
import './navbar_translate';

const Navbar: React.FC = () => {

  const { t } = useTranslation();
  
  const solutionsRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  // State for tracking dropdown visibility
  const [solutionsDropdownVisible, setSolutionsDropdownVisible] = useState<boolean>(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState<boolean>(false);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Проверяем, клик был за пределами dropdown
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsDropdownVisible(false);
      }
      if (languageDropdownVisible && languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setLanguageDropdownVisible(false);
      }
    };

    // Добавляем обработчик кликов
    document.addEventListener("mousedown", handleClickOutside);

    // Убираем обработчик при размонтировании
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [solutionsDropdownVisible, languageDropdownVisible]);

  // Toggle dropdown visibility on click
  const toggleSolutionsDropdown = () => {
    setSolutionsDropdownVisible(!solutionsDropdownVisible);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownVisible(!languageDropdownVisible);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: t('team'), to: "about" },
    { id: 2, text: t('tech_stack'), to: "skills" },
    { id: 3, text: t('projects'), to: "project" },
    { id: 4, text: t('ethical_values'), to: null, href: "/ethicalvalues" },
    { id: 5, text: t('core'), to: null, href: "/core" },
    { id: 6, text: t('blog'), to: null, href: "/blog" },
    { id: 7, text: t('brochure'), to: null, href: "/brochure/tr" },
  ];

  const bySolution = [
    { id: 1, text: t('car'), to: "/solutions/bysolution/licenseplate" },
    { id: 2, text: t('port'), to: "/solutions/bysolution/portoperations" },
  ];

  const byIndustry = [
    { id: 1, text: t('health'), to: "/solutions/byindustry/health" },
    { id: 2, text: t('manufacturing'), to: "/solutions/byindustry/manufacturing" },
    { id: 3, text: t('agriculture'), to: "/solutions/byindustry/agriculture" },
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
              {t('solutions')}
            </button>
            {solutionsDropdownVisible && (
              <div ref={solutionsRef} className="absolute top-full left-0 mt-2 w-56 bg-sky-950 border border-gray-700 rounded-lg shadow-lg z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-sky-800 cursor-pointer">
                    <span className="font-semibold">{t('by_industry')}</span>
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
                    <span className="font-semibold">{t('by_solutions')}</span>
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
              </div>
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
              {t('language')}
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
              <div ref={languageRef} className="absolute right-0 top-full mt-2 w-40 bg-base-100 border bg-zinc-900 border-gray-300 rounded-lg shadow-lg z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <span
                      className="block"
                      onClick={() => {
                        i18next.changeLanguage('tr');
                        localStorage.setItem('lang', 'tr');
                        setLanguageDropdownVisible(false);
                      }}
                    >
                      TR
                    </span>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <span
                    className="block"
                    onClick={() => {
                      i18next.changeLanguage('en');
                      localStorage.setItem('lang', 'en');
                      setLanguageDropdownVisible(false);
                    }}
                    >
                      ENG
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </SlideIn>
    </div>
  );
};

export default Navbar;
