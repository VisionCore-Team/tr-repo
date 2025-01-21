import Slider from "react-infinite-logo-slider";
import { skillsData, toolsData } from "./skillData.tsx";

function Skills() {
  return (
    <div>
      <div className="bg-gray-900 bg-opacity-95 rounded-lg m-2 shadow-2xl lg:h-96 h-80 shadow-black">
        <h3 className="text-gray-100 font-light lg:text-2xl text-xs ml-3 pb-1 pt-2">
          Languages & Technologies
        </h3>
        <Slider
          width="80px" // Logoların boyutunu yarıya indiriyoruz
          duration={40}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor={"#101928"}
          toRight={true}
        >
          {skillsData.map((skill, index) => (
            <Slider.Slide key={index}>
              <div className="text-gray-400">{skill.icon}</div>
              
            </Slider.Slide>
          ))}
        </Slider>
        <Slider
          width="80px"
          duration={40}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor={"#101928"}
          toRight={false}
        >
          {skillsData.map((skill, index) => (
            <Slider.Slide key={index}>
              <div className="text-gray-400">{skill.icon}</div>

            </Slider.Slide>
          ))}
        </Slider>
        <Slider
          width="80px"
          duration={40}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor={"#101928"}
          toRight={true}
        >
          {skillsData.map((skill, index) => (
            <Slider.Slide key={index}>
              <div className="text-gray-400 gap-7">{skill.icon}</div>

            </Slider.Slide>
          ))}
        </Slider>
      </div>
      <div className="bg-gray-900 rounded-lg bg-opacity-95 m-2 mt-4 lg:h-32 h-24 shadow-2xl shadow-black">
        <h3 className="text-gray-100 font-light lg:text-2xl text-xs ml-3 pb-1 pt-2">
          Operating Systems & Tools
        </h3>
        <Slider
          width="50px"
          duration={20}
          pauseOnHover={true}
          blurBorders={true}
          blurBorderColor={"#101928"}
          toRight={true}
        >
          {toolsData.map((tool, index) => (
            <Slider.Slide key={index}>
              <div  className="text-gray-400 mt-4">{tool.icon}</div>
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
