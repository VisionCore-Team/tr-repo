import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import safari from "../../../public/img/safari.svg"
import xcode from "../../../public/img/Xcode.svg"
import folder from "../../../public/img/files.svg"
import home from "../../../public/img/home.svg"
import { useRef } from "react";
import { ReactNode } from 'react'
import { Link } from "react-scroll";
type AppIconProps = {
  mouseX: MotionValue
  // look here 👇
  children: ReactNode
}

function Dock() {
  let mouseX = useMotionValue(Infinity);
  const list = [
    {svg:home,
      on: "home"
    },
    
    {svg:safari,
      on: "about",
    },
    {svg:xcode,
      on: "skills",
    },
    {svg:folder,
      on: "project"
    },
   
  ]
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className=" bg-opacity-45 mx-auto flex h-16 items-end gap-4 rounded-2xl shadow-2xl bg-gray-700 px-4 pb-3"
    >
      {list.map((item ,index) => (
        <div key={index}>
          <AppIcon mouseX={mouseX}>
            <Link to={item.on} smooth={true}><img className="w-15 rounded-md" src={item.svg} alt="" /></Link>    
          </AppIcon>
        </div>
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, children }: AppIconProps) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0};

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <>
            <motion.div
            ref={ref}
            style={{ width }}
            className="aspect-square"
          >
            {children}
          </motion.div>
     </>
  );
}
export default Dock;