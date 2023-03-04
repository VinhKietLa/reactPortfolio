import React from "react";
import me from "../assets/pictureofme.png";
import Stack from 'react-bootstrap/Stack';

function Home() {
  return (
    <>
    <Stack gap={3} className="col-md-5 mx-auto mt-5 text-center">

    <div className="jumbotron jumbotron-fluid d-flex" id="herocustom">
      <div className="jumboCopy">
        <h1 className="display-4">I am Vinh</h1>
        <p className="lead">The Supportive Developer: Aspiring Web Developer with a Customer-Centric Approach 😁</p>
        <img
          className="pictureofme img-fluid"
          src={me}
          alt="A picture of Vinh"
        />
      </div>
    </div>
    </Stack>
  </>
  );
}



// function Home() {
//   return (
//     <>
//       <div className="jumbotron jumbotron-fluid d-flex" id="herocustom">
//         <div className="jumboCopy">
//           <h1 className="display-4">I am Vinh</h1>
//           <p className="lead">An aspiring web developer 😁</p>
//           <img
//             className="pictureofme img-fluid"
//             src="./images/pictureofme.png"
//             alt="A picture of Vinh"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

export default Home;
