import caglar from "../../../public/img/caglarcakmak.jpeg";
import sirous from "../../../public/img/sirousbadali.jpeg";
import veysel from "../../../public/img/veyselselimozturk.jpg";
import malik from "../../../public/img/malikbatyr.jpg";

export interface TeamData {
    id: number;
    name: string;
    image: string;
    position: string;
    location: string;
    about: string;
  }
  
  const teamData: TeamData[] = [
    {
        id: 1,
        name: "Çağlar Çakmak",
        image: caglar,
        position: "caglar_position",
        location: "caglar_location",
        about: "caglar_about",
    },
    {
        id: 2,
        name: "Sirous Badali",
        image: sirous,
        position: "sirous_position",
        location: "sirous_location",
        about: "sirous_about",
    },
    {
        id: 3,
        name: "Veysel Öztürk",
        image: veysel,
        position: "veysel_position",
        location: "veysel_location",
        about: "veysel_about",
    },
    {
        id: 4,
        name: "Abdymalik Batyrkulov",
        image: malik,
        position: "malik_position",
        location: "malik_location",
        about: "malik_about",
    },
    // Daha fazla eleman ekleyin...
  ];
  
  export default teamData;
  
    