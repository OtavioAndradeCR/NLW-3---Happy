import Leaflet from "leaflet";

import mapMakerImg from "../images/Local.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMakerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

export default mapIcon;
