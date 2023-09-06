import React from "react";

function Alert(props) {
 const capitalise = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
 };

 const alertstyle = {
    backgroundColor: props.mode === "dark" ? "#08325c" : "#ffffff", // Specify colors for both modes
    height: '60px'
 };

 return (
  <div style={alertstyle}>
   {props.alert &&
    <div
     className={`alert alert-${props.alert.type} alert-dismissible fade show`}
     role="alert">
     <strong> {capitalise(props.alert.type)} </strong> :{props.alert.message}
    </div>
   }
  </div>
 );
}

export default Alert;
