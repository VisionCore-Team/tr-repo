import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import SafariTabs from "./safaritabs";
import teamsData, { TeamData } from './team_data';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import TeamMember from "./teamMember";
import bg from '../../../public//bg/cardbg.jpg'


const Team = () => {
    const { t } = useTranslation();
    // Seçilen tab ismini state olarak tanımlıyoruz
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [selectedTab, setSelectedTab] = useState<number>(1);


    // Alt komponentten seçilen name'i yakalayan fonksiyon
    const handleSelect = (name: string, id: number): void => {
        setSelectedName(name);
        setSelectedTab(id);
    };
    return (
        <div>
            <Navbar/>
            <motion.div
                className="text-center font-thin gradient-text"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <br />
                <span className=" text-5xl font-bold mt-4 leading-none">
                {t('meetTeam')}
                </span>
                <br /> <br />
            </motion.div>
            <div
                style={{ backgroundImage: `url(${bg})` }}
                className=" mb-10 max-w-[1200px] lg:mx-auto mx-10 h-full about rounded-t-xl"
            >
                <div
                    style={{ backgroundColor: "#334155" }}
                    className="flex bg-slate-100 dark:bg-slate-800 dark:text-slate-500  rounded-t-xl  py-2.5 items-center px-4 gap-8"
                >
                    <div className="flex items-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
                        <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
                        <div className="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]"></div>
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            className="ml-4 flex-none text-slate-400 dark:text-slate-500"
                        >
                            <path
                                d="m15 7-5 5 5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <svg
                            width="24"
                            height="24"
                            fill="none"
                            className="ml-2 flex-none text-slate-400 dark:text-slate-500"
                        >
                            <path
                                d="m10 7 5 5-5 5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                    </div>
                    <div className="bg-slate-100 rounded-md mx-auto font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 w-4/5 dark:bg-slate-800 dark:text-slate-500">
                        <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="text-slate-300 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        {teamsData.find(el => el.id === selectedTab)?.name}
                    </div>
                </div>
                <div className="bg-[#334155] text-xs leading-5">
                    <SafariTabs list={teamsData} onSelect={handleSelect} />
                </div>
                <TeamMember memberData={teamsData.find(el => el.id === selectedTab) || null} />
            </div>
            <Footer/>
        </div>

    );
}

export default Team;
