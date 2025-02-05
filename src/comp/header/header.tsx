import { FadeUp } from "../../helpers/fade/FadeUp";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";
import "./header.css";


interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {

  const nav = useNavigate();

  return (
    <header className="mainHeader">
      <div className="container">
        <FadeUp delay={0} duration={1.0}>
          <h1 className=' text-gray-200 mb-5 text-5xl sm:mt-0' style={{fontWeight: "bold"}}>{name}</h1>
        </FadeUp>
        <FadeUp delay={0.5} duration={1.0}>
          <div className="breadCrumb">
            <a onClick={() => nav("/")}><FaHome/></a>
            <p>&nbsp;/ {name}</p>
          </div>
        </FadeUp>
      </div>
    </header>
  );
}
