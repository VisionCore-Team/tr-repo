import { useTranslation } from "react-i18next";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";

import logobüyük from "../../../public/img/V.svg";
import './footer_translate';

function Footer() {
    const { t } = useTranslation();

    return (

        <footer className="bg-dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="md:flex md:justify-between max-md:flex max-md:flex-col max-md:items-center max-md: gap-5">
                    <div className="mb-6 md:mb-0 flex-column items-center justify-center">
                        <a href="https://visioncore.com.tr/" className="flex items-center">
                            <img src={logobüyük} className="h-48 me-3" alt="VisionCore Logo" />
                        </a>
                        <div className="flex gap-6">
                            <a href="https://www.linkedin.com/company/visioncore" target="_blank" className=" text-3xl text-gray-500 hover:text-white transform transition-transform duration-200 hover:scale-110">
                                <FaLinkedin />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=31614946511" target="_blank" className=" text-3xl text-gray-500 hover:text-white transform transition-transform duration-200 hover:scale-110">
                                <FaWhatsapp />
                            </a>
                            <a href="tel: +905436771863" target="_blank" className=" text-3xl text-gray-500 hover:text-white transform transition-transform duration-200 hover:scale-110">
                                <IoCall />
                            </a>
                            <a href="mailto: support@visioncore.com.tr" target="_blank" className=" text-3xl text-gray-500 hover:text-white transform transition-transform duration-200 hover:scale-110">
                                <IoMdMail />
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">{t('solutions')}</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/solutions/byindustry/health" className="hover:text-white">{t('health')}</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/solutions/byindustry/manufacturing" className="hover:text-white">{t('manufacturing')}</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/solutions/byindustry/agriculture" className="hover:text-white">{t('agriculture')}</a>
                                </li>
                                <li className="mb-4">
                                    <a href="/*" className="hover:text-white">Market Shelf Detection</a>
                                </li>
                                {/* <li className="mb-4">
                                    <a href="/solutions/bysolution/licenseplate/" className="hover:text-white">{t('car')}</a>
                                </li> */}
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="/*" className="hover:text-white">{t('policy')}</a>
                                </li>
                                <li>
                                    <a href="/*" className="hover:text-white">{t('terms')}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-gray-300">
                        © 2024 VisionCore All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>

    )
} export default Footer;