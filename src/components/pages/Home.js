import React from "react";

function Home() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid d-flex" id="herocustom">
        <div className="jumboCopy">
          <h1 className="display-4">I am Vinh</h1>
          <p className="lead">An aspiring web developer 😁</p>
          <img
            className="pictureofme img-fluid"
            src="./images/pictureofme.png"
            alt="A picture of Vinh"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
