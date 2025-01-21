import { useState } from "react";
import SafariTabs from "./safaritabs";
import Caglar from "../about/caglar";
import Hindu from "../about/hindu";
import Veysel from "../about/veysel";


function MacWinBar() {
// Seçilen tab ismini state olarak tanımlıyoruz
const [selectedName, setSelectedName] = useState<string | null>(null);
const [selectedTab, setSelectedTab] = useState<number | null>(1);

// Listeyi ana bileşende tanımlıyoruz
const list = [
  { id: 1, name: "Çağlar Çakmak" },
  { id: 2, name: "Sirous Badali" },
  { id: 3, name: "Veysel Öztürk" },
];

// Alt komponentten seçilen name'i yakalayan fonksiyon
const handleSelect = (name: string, id:number) => {
  setSelectedName(name);
  setSelectedTab(id);
};
  return (
    <>
      <div>
        <div
          style={{ backgroundColor: "#334155" }}
          className="flex bg-slate-100 ddark:bg-slate-800 dark:text-slate-500  rounded-t-xl  py-2.5 items-center px-4 gap-8"
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
            {selectedName ? selectedName : "caglarcakmak.com.tr"}
          </div>
        </div>
        <div className="grid bg-[#334155] grid-cols-3 text-xs leading-5 overflow-hidden">
          <SafariTabs list={list} onSelect={handleSelect}/>
        </div>
        {selectedTab === 1 && <Caglar />}
        {selectedTab === 2 && <Hindu />}
        {selectedTab === 3 && <Veysel/>}
        
      </div>
    </>
  );
}

export default MacWinBar;
