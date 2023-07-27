import React from "react";
import data from "./Data";
import "./text.css";

function Add(props) {
  function handleclick() {
    console.log("hello");
  }

  return (
    <div className="food">
      <div className="container1">
        <img src={`../img/${props.url}`} />
        <p className="name">{props.text1}</p>
        <button onClick={handleclick} className="buy">
          {props.text}
        </button>
      </div>
    </div>
  );
}
export default Add;
