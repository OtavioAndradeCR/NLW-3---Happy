import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    @keyframes slideInFromLeft {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }

    background: ${(props) => props.theme.colors.landingBackground};
    width: 440px;
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      animation: 2s cubic-bezier(0.5, 0, 0, 1) 0s 1 slideInFromLeft;
      h2 {
        font-size: 40px;
        font-weight: 800;
        line-height: 42px;
        margin-top: 64px;
      }

      p {
        line-height: 28px;
        margin-top: 24px;
      }
    }

    .location {
      display: flex;
      flex-direction: column;
      line-height: 24px;
      animation: 2s cubic-bezier(0.5, 0, 0, 1) 0s 1 slideInFromLeft;

      strong {
        font-weight: 800;
      }
    }
  }

  .create-orphanage {
    position: absolute;
    right: 40px;
    bottom: 40px;
    width: 64px;
    height: 64px;
    background: #15c3d6;
    border-radius: 28px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    z-index: 1000;

    &:hover {
      background: #17d6ed;
    }
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      width: 48px;
      height: 48px;
      background: #15c3d6;
      box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
      border-radius: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
