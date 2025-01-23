import "./navbar.css";
import { Link } from "react-scroll";
import { useFormik } from 'formik';
import axios from "axios";
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import logo from "../../../public/img/Ç.svg";
import { SlideIn } from "../fade/SlideIn";
import { useState, useEffect, useRef } from "react";
import { TiLocation } from "react-icons/ti";
import { MdContactPhone } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import './navbar_translate';

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

interface FormValues {
  fullName: string;
  email: string;
  companyName: string;
  phone: string;
  message: string;
}

const Navbar: React.FC = () => {

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

  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);


  const handleSubmit = async () => {
    if (!recaptchaValue) {
      alert("Please, verify you are not a robot!");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/verify-recaptcha", { recaptchaValue });
      alert(response.data); 
    } catch (error) {
      alert("Error during reCAPTCHA check.");
    }
  };

  const formik = useFormik<FormValues>({
    initialValues: {
      fullName: '',
      email: '',
      companyName: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      companyName: Yup.string().required('Company Name is required'),
      phone: Yup.string()
        .matches(/^\+?[0-9]{7,15}$/, 'Phone number is not valid')
        .required('Phone number is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values) => {
      if (recaptchaValue) {
        console.log('Form submitted:', values);
        handleSubmit();
        setShowContactModal(false);
        formik.resetForm();
      } else {
        alert('Please verify you are not a robot');
      }
    },
  });

  const handleRecaptchaChange = (value: string | null): void => {
    setRecaptchaValue(value);
  };
  

  const siteKey = import.meta.env.VITE_REACT_APP_SITE_KEY;

  if (!siteKey) {
    throw new Error("REACT_APP_SITE_KEY is missing in .env");
  }

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

          {/* Contact Us Modal */}

          <div className="flex items-center rounded-full text-black bg-white px-4 py-2 shadow-md hover:bg-gray-100 transition">
            <button onClick={() => setShowContactModal(true)} className="text-sm font-medium">
              Contact Us
            </button>
          </div>

          {showContactModal && (
            <div className="absolute top-[400px] inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white w-[80vw] h-[70vh] rounded-lg shadow-lg flex">
                {/* Left Section: Text and Contact Info */}
                <div className="w-1/2 p-6">
                  {/* Modal Header */}
                  <div className="flex flex-col mb-4">
                    <button
                      className="text-gray-600 hover:text-gray-800 mb-4 transition"
                      onClick={() => setShowContactModal(false)}
                    >
                      <IoCloseSharp size={24} />
                    </button>
                    <h2 className="text-gray-700 text-3xl font-semibold">We are here to assist you.</h2>
                  </div>

                  {/* Modal Description */}
                  <p className="text-sm text-gray-700 text-xl mb-6">
                    We highly value your interest. Please take a moment to complete the form and our team
                    will respond promptly to your inquiry.
                  </p>

                  {/* Contact Info */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-lg text-gray-700">
                      <TiLocation size={30} />
                      <p>Deventer, NL</p>
                    </div>
                    <div className="flex items-center gap-2 text-lg text-gray-700 mt-2">
                      <MdContactPhone size={30} />
                      <p>Call: +31 6 14946511</p>
                    </div>
                    <div className="flex items-center gap-2 text-lg text-gray-700 mt-2">
                      <IoMdMail size={30} />
                      <p>support@visioncore.com.tr</p>
                    </div>
                  </div>
                </div>

                {/* Right Section: Form */}
                <div className="w-1/2 p-6 border-l">
                  <form onSubmit={formik.handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-black text-sm font-medium">Full Name</span>
                        <input
                          type="text"
                          name="fullName"
                          value={formik.values.fullName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                          <div className="text-red-500 text-sm mt-1">{formik.errors.fullName}</div>
                        )}
                      </label>

                      <label className="block">
                        <span className="text-black text-sm font-medium">Email</span>
                        <input
                          type="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {formik.touched.email && formik.errors.email && (
                          <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                        )}
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <label className="block">
                        <span className="text-black text-sm font-medium">Company Name</span>
                        <input
                          type="text"
                          name="companyName"
                          value={formik.values.companyName}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {formik.touched.companyName && formik.errors.companyName && (
                          <div className="text-red-500 text-sm mt-1">{formik.errors.companyName}</div>
                        )}
                      </label>

                      <label className="block">
                        <span className="text-black text-sm font-medium">Phone Number</span>
                        <input
                          type="text"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        {formik.touched.phone && formik.errors.phone && (
                          <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
                        )}
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-black text-sm font-medium">Message</span>
                      <textarea
                        name="message"
                        rows={4}
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="mt-1 w-full p-2 border text-black rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      ></textarea>
                      {formik.touched.message && formik.errors.message && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>
                      )}
                    </label>

                    <div className="flex items-center space-x-4 mt-4">
                      <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={handleRecaptchaChange}
                        className="flex-shrink-0"
                      />

                      <button
                        type="submit"
                        disabled={!recaptchaValue}
                        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition disabled:opacity-50"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Language */}
          <div className="flex items-center justify-center" onClick={() => { setIsTR(!isTR) }}>
            <div className="relative flex items-center justify-between w-[80px] h-[36px] px-[12px] py-[6px] text-[16px] text-black bg-white cursor-pointer rounded-full  switch-toggles">
              <div className="h-[24px] text-[16px]">EN</div>
              <div className="h-[24px] text-[16px]">TR</div>
              <div className="absolute bg-black w-[26px] h-[26px] rounded-[50%] top-[5px] left-[5px] toggle-circle" style={{ transform: isTR ? 'translateX(4px)' : 'translateX(40px)' }}></div>
            </div>
          </div>
        </div>
      </SlideIn>
    </div>
  );
};

export default Navbar;
