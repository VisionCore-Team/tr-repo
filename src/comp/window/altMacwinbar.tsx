import { ReactNode } from 'react'

type AltMacwinbarprops = {
  children: ReactNode
}


function AltMacwinbar({children}: AltMacwinbarprops) {
  return (
    <div className=''>
      <div
        className="bg-[#242226] rounded-lg  py-2.5 grid items-center px-4 gap-8"
      >
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#EC6A5F]"></div>
          <div className="ml-1.5 w-2 h-2 rounded-full bg-[#F4BF50]"></div>
          <div className="ml-1.5 w-2 h-2 rounded-full bg-[#61C454]"></div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default AltMacwinbar;
