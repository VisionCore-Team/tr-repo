import caglar from "/img/caglarcakmak.jpeg";
import sirous from "/img/sirousbadali.jpeg";
import veysel from "/img/veyselselimozturk.jpg";
import malik from "/img/malikbatyr.jpg";
import harun from "/img/harunbulbul.jpg";

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
    {
        id: 5,
        name: "Harun Bülbül",
        image: harun,
        position: "harun_position",
        location: "harun_location",
        about: "harun_about",
    },
    // Daha fazla eleman ekleyin...
  ];
  
  export default teamData;
  
    