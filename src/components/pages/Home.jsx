import React from "react";
import styled, { keyframes } from "styled-components";
import Me from "../../assets/pictureofme.png";
import Stack from "react-bootstrap/Stack";
import "../../css/Home.css";
import Project from "./Project.js";
import { pulse } from "react-animations";

function Home() {


  const Pulse = styled.div`
  animation: 2s ${keyframes`${pulse}`} infinite;
`;

  return (
    <>
      <Stack gap={3} className="col-md-5 mx-auto mt-4 text-center">
        <img
          className="pictureofme img-thumbnail rounded-pill Width auto
          mx-auto"
          src={Me}
          alt="Vinh"
        />
        <div id="herocustom">
          <div className="heroHeading">
          <Pulse>
              <h1>Hello I'm Vinh</h1>
          </Pulse>
           
            <p className="lead">a Front-end developer.</p>
          </div>
        </div>
      </Stack>
      <Project />
    </>
  );
}

export default Home;
