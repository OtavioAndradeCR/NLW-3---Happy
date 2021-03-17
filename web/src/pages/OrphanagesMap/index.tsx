import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Container } from "./styles";
import mapMakerImg from "../../images/Local.svg";
import mapIcon from "../../utils/mapIcon";
import api from "../../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  const { title } = useContext(ThemeContext);
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMakerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer className="location">
          <strong>Paracambi</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>
      <Map
        center={[-22.6114, -43.7095]}
        zoom={16}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`} />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
