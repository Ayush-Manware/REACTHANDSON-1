import React from "react";

export class ClassComponent extends React.Component {
  render() {
    return (
      <>
        <div className="classContainer" style={{border:"1px solid red", width:"45vw"}}>
          <h1>This is Class Component Heading One</h1>
          <p>This is Class Component Paragraph One</p>
          <p>This is Class Component Paragraph Two</p>
        </div>
      </>
    );
  }
}
