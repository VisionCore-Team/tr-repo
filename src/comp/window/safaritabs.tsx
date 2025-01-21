import React, { useState } from 'react';

interface Tab {
  id: number;
  name: string;
}

// Props tipini belirliyoruz
interface SafariTabsProps {
    list: Tab[];
    onSelect: (name: string, id:number) => void;  // Callback fonksiyonunu props olarak bekliyoruz
  }

const SafariTabs: React.FC<SafariTabsProps> = ({ list, onSelect }) => {
  const [isSelected, setIsSelected] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setIsSelected(id);
    onSelect(list[id - 1].name, id);
  };
  return (
    <>
      {list.map((tab) => (
        <div
          key={tab.id}
          onClick={() => handleClick(tab.id)} 
          className={isSelected === tab.id ? ' cursor-pointer bg-[#334155] select-none text-slate-900 font-medium px-4 py-1.5 flex items-center justify-center space-x-2 dark:text-slate-200'
            : 'cursor-pointer bg-slate-100 z-10 text-slate-400 rounded-t border border-slate-900/5 pl-4 pr-8 py-1.5 -mb-px -mr-4 flex items-center justify-center space-x-2 dark:bg-slate-800 dark:text-slate-500'}
        >
          <div className="truncate">{tab.name}</div>
        </div>
      ))}
    </>
  );
}

export default SafariTabs;