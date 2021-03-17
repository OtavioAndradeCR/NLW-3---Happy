import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Logo from "../../images/Logo.svg";
import { Container, Content } from "./styles";

const Landing: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <header>
            <img src={Logo} alt="Happy Logo" />
            <div className="location">
              <strong>Paracambi</strong>
              <span>Rio de Janeiro</span>
            </div>
          </header>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <div>
              <p>Visite orfanatos e mude o dia de muitas crianças.</p>
              <Link to="/app" className="enter-app">
                <FiArrowRight size={26} color="rgba(0,0,0, 0.5)" />
              </Link>
            </div>
          </main>
        </Content>
      </Container>
    </>
  );
};

export default Landing;
