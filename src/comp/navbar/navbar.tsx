import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../../public/img/Ç.svg";
import { SlideIn } from "../fade/SlideIn";
import { useState, useEffect, useRef } from "react";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import './navbar_translate';


const Navbar: React.FC = () => {

  interface SolutionItem {
    id: number;
    text: string;
    to: string;
  }

  interface SubgroupItem {
    bySolutions?: SolutionItem[];
    byIndustry?: SolutionItem[];
    id?: number;
    text?: string;
    to?: string;
    href?: string;
  }

  interface GroupItem {
    id: number;
    navbarName: string;
    subgroup: SubgroupItem[];
  }

  const { t } = useTranslation();

  // Array containing navigation items

  const groupItems: GroupItem[] = [
    {
      id: 1,
      navbarName: t('solutions'),
      subgroup: [
        {
          bySolutions: [
            { id: 1, text: t('car'), to: "/solutions/bysolution/licenseplate" },
            { id: 2, text: t('port'), to: "/solutions/bysolution/portoperations" },
          ],
        },
        {
          byIndustry: [
            { id: 1, text: t('health'), to: "/solutions/byindustry/health" },
            { id: 2, text: t('manufacturing'), to: "/solutions/byindustry/manufacturing" },
            { id: 3, text: t('agriculture'), to: "/solutions/byindustry/agriculture" },
          ]
        }
      ]
    },
    {
      id: 2,
      navbarName: t('company'),
      subgroup: [
        { id: 1, text: t('team'), to: "about" },
        { id: 2, text: t('ethical_values'), to: "ethicalvalues" },
        { id: 3, text: t('partners'), to: "partners" },
        { id: 4, text: t('news'), to: "news" },
      ]
    },
    {
      id: 3,
      navbarName: t('resources'),
      subgroup: [
        { id: 1, text: t('tech_stack'), to: "skills" },
        { id: 2, text: t('blog'), to: "blog" },
        { id: 3, text: t('brochure'), to: "brochure/tr" },
        { id: 4, text: t('case_study'), to: "caseStudy" },
        { id: 5, text: t('webinars'), to: "webinars" },
      ]
    },
  ]
  const navItems = [
    { id: 1, text: t('projects'), to: "project" },
    { id: 2, text: t('core'), to: "core" },
  ];

  //State for tracking interface language

  const [isTR, setIsTR] = useState<boolean>(localStorage.getItem('lang') === 'tr');

  useEffect(() => {
    const language = isTR ? 'tr' : 'en';
    i18next.changeLanguage(language);
    localStorage.setItem('lang', language);
  }, [isTR]);

  // State for tracking dropdown visibility
  const [dropdownVisibility, setDropdownVisibility] = useState<boolean[]>(groupItems.map(() => false));
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check clicks outside all dropdowns
      dropdownRefs.current.forEach((ref, index) => {
        if (ref && !ref.contains(event.target as Node)) {
          setDropdownVisibility((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = false;
            return newVisibility;
          });
        }
      });
    };

    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility on click
  const toggleDropdown = (index: number) => {
    setDropdownVisibility((prev) => {
      const newVisibility = prev.map((visible, i) => (i === index ? !visible : false)); // сбрасываем все, кроме текущего
      return newVisibility;
    });
  };

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
          {/* Group Dropdowns */}
          {
            groupItems.map((group, groupIndex) => (
              <div className="relative" key={groupIndex}>
                <button
                  onClick={() => toggleDropdown(groupIndex)}
                  className="btn btn-ghost rounded-btn text-sm font-bold"
                >
                  {group.navbarName}
                </button>
                {dropdownVisibility[groupIndex] && (
                  <div ref={(el) => (dropdownRefs.current[groupIndex] = el)} className="absolute top-full left-0 mt-2 w-56 bg-sky-950 border border-gray-700 rounded-lg shadow-lg z-10">
                    {group.subgroup.map((subgroupItem, subgroupIndex) => (
                      <ul key={`subgroup-${groupIndex}-${subgroupIndex}`} className="px-4 py-2 hover:bg-sky-800 cursor-pointer">
                        {
                          Object.keys(subgroupItem).length === 1 ? (
                            Object.entries(subgroupItem).map(([key, value]) => (
                              <li key={key} className="mt-2">
                                {Object.keys(subgroupItem).length === 1 && <span className="font-semibold">{t(`${key}`)}</span>}
                                <ul className="mt-1 ml-4">
                                  {
                                    Array.isArray(value) && value.map((item) => (
                                      <li key={item.id} className="py-1">
                                        <a href={item.to || '#'} className="hover:text-gray-300">
                                          {item.text || 'No Text'}
                                        </a>
                                      </li>
                                    ))
                                  }
                                </ul>
                              </li>
                            ))
                          ) : (
                            <li key={subgroupItem.id || subgroupIndex} className="py-1">
                              <a href={subgroupItem.to || '#'} className="hover:text-gray-300">
                                {subgroupItem.text || 'No Text'}
                              </a>
                            </li>
                          )
                        }
                      </ul>
                    ))}

                  </div>
                )}
              </div>
            ))
          }

          {/* Other Navigation Items */}
          {navItems.map((item) => (
            <div
              key={item.id}
              className="text-white font-bold px-2 cursor-pointer text-sm"
            >
            <Link
              to={item.to}
              smooth={true}
              duration={500}
              className="btn btn-ghost rounded-btn"
            >
              {item.text}
            </Link>
            </div>
          ))}

          {/* Language */}
          <div className="switch" onClick={() => { setIsTR(!isTR) }}>
            <div className="switch-toggles">
              <div className="tr">EN</div>
              <div className="en">TR</div>
              <div className="toggle-circle" style={{ transform: isTR ? 'translateX(4px)' : 'translateX(40px)' }}></div>
            </div>
          </div>
        </div>
      </SlideIn>
    </div>
  );
};

export default Navbar;
