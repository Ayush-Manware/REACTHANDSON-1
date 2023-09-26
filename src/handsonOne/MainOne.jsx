import React, { useState } from "react";
import { ClassComponent } from "./ClassComponent";
import { FunctionComponent } from "./FunctionComponent";

export function MainComponentOne() {

//   function setToggle()

//  }

  const [IsHide, setIsHide] = useState(false);
  function hideShow() {
    setIsHide(!setIsHide)
  }

  return (
    <>
      <div className="mainContainer">
        <h1 style={{ boxShadow: "2px 2px solid skyblue", textAlign: "center" }}>
          Styling using Functional and Class Component
        </h1>
        <div className="buttonContainer">
          <button className="classButton btn" onClick={hideShow}>
            {" "}
            Class Component
          </button>
          <button className="functionButton btn"> Function Component</button>
        </div>
        <div
          className="components"
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10vw auto",
          }}
        >
            {setIsHide ? <ClassComponent /> : null}
          {/* <ClassComponent /> */}
          {/* <FunctionComponent /> */}
        </div>
      </div>
    </>
  );
}
