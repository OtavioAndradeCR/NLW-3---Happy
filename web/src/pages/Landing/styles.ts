import styled from "styled-components";

export const SwitchBox = styled.div`
  /* z-index: 1000;
  top: 80px;
  right: 0;
  position: absolute; */
  margin-right: 30px;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.colors.landingBackground};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 100%;
  max-height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  background: url(${(props) => props.theme.backgroundImage}) no-repeat 80%
    center;
  position: relative;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .location {
    display: flex;
    flex-direction: column;
    place-content: center;
    text-align: right;
  }

  .location > strong {
    font-weight: 800;
  }

  main > h1 {
    max-width: 350px;
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  main > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
  }

  main > div > p {
    max-width: 350px;
    font-size: 24px;
    line-height: 32px;
  }

  .enter-app {
    width: 70px;
    height: 70px;
    background: #ffd666;
    border-radius: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;
  }

  .enter-app:hover {
    background: #96feff;
  }
`;
