import React from "react";

export default function About(props) {
 const styleset = {
  color: props.mode === "dark" ? "white" : "black",
  backgroundColor: props.mode === "dark" ? "#08325c" : "",
 };
 const stylelight = {
  color: props.mode === "dark" ? "white" : "black",
  backgroundColor: props.mode === "dark" ? "#4c7fac" : "",
 }
 const backgroundc = {
  backgroundColor:props.mode === "dark" ? "#08325c" : "white"
 }
 return (
  <div id="outerbox" style={backgroundc}>
  <div className="container" style={styleset}>
   <div className="accordion" id="accordionExample">
    <div className="accordion-item">
     <h2 className="accordion-header">
      <button
       className="accordion-button accordionButtonClass"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapseOne"
       aria-expanded="true"
       aria-controls="collapseOne"
       style={styleset}>
       Personal Info
      </button>
     </h2>
     <div
      id="collapseOne"
      style={stylelight}
      className="accordion-collapse collapse accordionButtonClas show"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong>I am Prasad V Kamat, a fellow programmer.</strong> I am
       passionate about coding and learning new technologies. I enjoy solving
       problems and creating software that can make a positive impact. In my
       free time, I love to explore new programming concepts and work on
       personal coding projects. Coding is not just my profession; it's also my
       hobby and a way of life.
      </div>
     </div>
    </div>
    <div className="accordion-item">
     <h2 className="accordion-header">
      <button
       className="accordion-button collapsed accordionButtonClass"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#collapseTwo"
       aria-expanded="false"
       style={styleset}
       aria-controls="collapseTwo">
       Coding Knowledge
      </button>
     </h2>
     <div
      id="collapseTwo"
      style={stylelight}
      className="accordion-collapse collapse accordionButtonClass show"
      data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <strong>
        I am a lifelong learner who is constantly expanding my coding knowledge.
       </strong>
       I am currently focusing on improving my skills in frontend development
       with technologies like React.js, and also exploring backend technologies
       such as Node.js and Express.js. I enjoy working on projects that
       challenge me and allow me to learn new techniques. I believe that coding
       is an ever-evolving field, and I'm excited to be a part of it.
      </div>
     </div>
    </div>
   </div>
  </div>
  </div>
 );
}
