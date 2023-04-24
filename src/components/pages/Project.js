import React from "react";
import "../../css/Projects.css";
import projectList from "../projects.json";


function Project() {

  return (
    <div className="container myprojects-container mt-4">
    <h2 id="my-projects" class="projects-header mb-4">
      {" "}
      <a id="my-projects">Projects</a>
    </h2>
    
    <div className="personal-projects row align-items-start">
      
      {projectList.map((item) => {
        console.log(item);
        return (
          <div className="cardContainer col-lg-6 col-xl-4">
            <div className="card" key={item.id}>
            <a className="thumbnail" href={item.URL} target="_blank">

              <div className="card-body card-style">
                <h4 className="card-title">{item.name}</h4>
                  <img
                    className="projects-icon img-fluid"
                    src={item.image}
                    alt="A gif of the app"
                  />
                <p id="card-text">{item.summary}</p>
              </div>
              </a>
            </div>
          </div>
        );
      })}


    </div>
    </div>
  );
}

export default Project;






// function Project(props) {
//   const { scrollY } = useViewportScroll();



//   return (
//     <div className="container myprojects-container mt-4">
//     <h2 id="my-projects" class="projects-header mb-4">
//       {" "}
//       <a id="my-projects">Projects</a>
//     </h2>
    
//     <div className="personal-projects row align-items-start">
//       {projectList.map((item) => {
//         console.log(item);
//         return (
//           <div className="cardContainer col-lg-6 col-xl-4">
//             <div className="card" key={item.id}>
//               <div className="card-body card-style">
//                 <h4 className="card-title">{item.name}</h4>
//                 <a className="thumbnail" href={item.URL} target="_blank">
//                   <img
//                     className="projects-icon img-fluid"
//                     src={item.image}
//                     alt="A gif of the app"
//                   />
//                 </a>
//                 <p className="card-text">{item.summary}</p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//     </div>
//   );
// }

// export default Project;