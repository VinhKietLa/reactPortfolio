import React from "react";
import me from "../assets/pictureofme.png";
import Stack from "react-bootstrap/Stack";
import AboutMeStyles from "../../css/AboutMe.css";

function AboutMe() {
  return (
    <>
      <Stack gap={3} className="col-md-5 mx-auto mt-5 text-center">
        <img
          className="pictureofme img-thumbnail rounded-pill Width auto
          mx-auto"
          src={me}
          alt="A picture of Vinh"
        />
        <div id="herocustom">
          <div className="heroHeading">
            <h1 className="display-3">I am Vinh</h1>
            <p className="lead">
              The Supportive Developer: Aspiring Web Developer with a
              Customer-Centric Approach 😎
            </p>
          </div>
        </div>

        <div class="container about-me">
          <ul>
            <li>
              {" "}
              <a
                href="https://www.linkedin.com/in/vinhkietla"
                target="_blank"
                id="myLinks"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://github.com/VinhKietLa"
                target="_blank"
                id="myLinks"
              >
                GITHUB
              </a>
            </li>
            <li>
              {" "}
              <a href="" id="myLinks">
                CV
              </a>
            </li>
          </ul>
        </div>
      </Stack>
    </>
  );
}

export default AboutMe;
