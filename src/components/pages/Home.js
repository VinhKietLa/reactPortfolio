import React from "react";
import me from "../assets/pictureofme.png";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import styled from "../../css/AboutMe.module.css";


function Home() {
  return (
    <>
      <Stack gap={3} className="col-md-5 mx-auto mt-5 text-center">
        <img
          className="pictureofme img-thumbnail rounded-pill Width auto
          mx-auto"
          src={me}
          alt="A picture of Vinh"
        />
        <div className="jumbotron jumbotron-fluid d-flex" id="herocustom">
          <div className="jumboCopy">
            <h1 className="display-4">I am Vinh</h1>
            <p className="lead">
              The Supportive Developer: Aspiring Web Developer with a
              Customer-Centric Approach 😁
            </p>
          </div>
        </div>
        <ButtonGroup
          role="group"
          aria-label="Basic example"
          className="mx-auto"
          size="md"
        >
          <Button className={styled.btn}>LINKEDIN</Button>
          <Button className={styled.btn}>GITHUB</Button>
          <Button className={styled.btn}>CV</Button>
        </ButtonGroup>
      </Stack>
    </>
  );
}

export default Home;
