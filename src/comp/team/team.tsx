import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import teamsData, { TeamData } from "./team_data";
import Header from "../header/header";
import { FaXmark } from "react-icons/fa6";
import "./team_translate";
import './team.css';

const Team = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<TeamData | null>(null);
  const selectedPersonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedPersonRef.current &&
        !selectedPersonRef.current.contains(event.target as Node)
      ) {
        setSelected(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Header name={t("meetTeam")} />
      <div className="allDataGrid">
        <div className="allDataGrid-container">
          <div className="allDataWrap">
            {teamsData.map((person, key) => (
              <div
                key={key}
                className="teamMember cursor-pointer transition-transform duration-300 hover:scale-[110%]"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(person);
                }}
              >
                <img src={person.image} alt={person.name} />
                <b>{person.name}</b>
                <p>{t(`${person.position}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="selectedPerson"
        style={{ width: selected ? "350px" : "0px" }}
        ref={selectedPersonRef}
      >
        <div className="selectedPersonContainer">
          <FaXmark className="closeButton" onClick={() => setSelected(null)} />
          {selected && (
            <>
              <img src={selected?.image} alt={selected?.name} />
              <b>{selected?.name}</b>
              <p>{t(`${selected?.position}`)}</p>
              <p>{t(`${selected?.location}`)}</p>
              <p>{t(`${selected?.about}`)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
