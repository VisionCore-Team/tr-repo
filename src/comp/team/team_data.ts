import caglar from "/img/caglarcakmak.jpeg";
import sirous from "/img/sirousbadali.jpeg";
import veysel from "/img/veyselselimozturk.jpg";
import malik from "/img/malikbatyr.jpg";
import harun from "/img/harunbulbul.jpg";
import hanzade from "/img/hanzadefener.jpeg";
import mennatulla from "/img/mennatullaelbaz.jpeg";
import yunus from "/img/yunuspolat.jpeg";

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
  {
    id: 6,
    name: "Hanzade Fener",
    image: hanzade,
    position: "hanzade_position",
    location: "hanzade_location",
    about: "hanzade_about",
  },
  {
    id: 7,
    name: "Mennatulla El Baz",
    image: mennatulla,
    position: "mennatulla_position",
    location: "mennatulla_location",
    about: "mennatulla_about",
  },
  {
    id: 8,
    name: "Yunus Polat",
    image: yunus,
    position: "yunus_position",
    location: "yunus_location",
    about: "yunus_about",
  },
  // Daha fazla eleman ekleyin...
];

export default teamData;
