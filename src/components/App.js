import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  return (
    <div id="main">
      <h1 id="data-ns-test" value="project-name">
        Project Name
      </h1>
      <p id="data-ns-test" value="project-description">
        Project Description
      </p>
    </div>
  );
};

export default App;
