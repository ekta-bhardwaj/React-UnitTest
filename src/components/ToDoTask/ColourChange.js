import React, { useState } from "react";
import "./ColourChange.css";

function ColourChange() {
  const [color, changeColor] = useState("blue");
  //   function handleClick(e) {
  //     changeColor(e.target.getAttribute("data-color"));
  //   }

  //   function handleClick(e) {
  //     setTimeout(() => {
  //       changeColor(e.target.getAttribute("data-color"));
  //     }, 1000);
  //   }

  function handleClick(e) {
    const node = e.target;
    return new Promise(resolve => {
      setTimeout(() => {
        changeColor(node.getAttribute("data-color"));
        resolve();
      }, 1000);
    });
  }

  return (
    <div className="App">
      {/* <button onClick={changeColor.bind(null, "blue")}>blue</button>
      <button onClick={changeColor.bind(null, "green")}>green</button>
      <button onClick={changeColor.bind(null, "red")}>red</button> */}

      <button data-color="blue" onClick={handleClick}>
        blue
      </button>
      <button data-color="green" onClick={handleClick}>
        green
      </button>
      <button data-color="red" onClick={handleClick}>
        red
      </button>

      <div className={`box ${color}`}>Lorem Ipsum</div>
    </div>
  );
}

export default ColourChange;
