
import { SiOpencv } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

import { SiApple } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiPython } from "react-icons/si";
import { SiPytorch } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";



const skillsData = [
  {  icon: <SiScikitlearn size={50} className="m-6"/> },
  {  icon: <SiPython size={50} className="m-6"/> },
  {  icon: <SiMysql size={50} className="m-6"/> },
  {  icon: <SiNumpy size={50} className="m-6"/> },
  {  icon: <SiOpencv size={50} className="m-6"/> },
  {  icon: <SiPandas size={50} className="m-6"/> },
  {  icon: <SiPytorch size={50} className="m-6"/> },
  {  icon: <SiTensorflow size={50} className="m-6"/> },
  {  icon: <SiReact size={50} className="m-6"/> },
  {  icon: <SiTypescript size={50} className="m-6"/> },
  {  icon: <FaNodeJs size={50} className="m-6"/> },
  {  icon: <SiMongodb size={50} className="m-6"/> },
  
];


const toolsData = [
  { icon: <SiApple size={30} className="mx-4"/> },
  { icon: <SiGithub size={30} className="mx-4"/> },
  { icon: <TbBrandVscode size={30} className="mx-4"/> },
  { icon: <SiGithub size={30} className="mx-4"/>},
];
export { skillsData, toolsData };