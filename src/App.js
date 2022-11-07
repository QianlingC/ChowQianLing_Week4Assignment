import React, { Component } from "react";
import RoutesData from "./RoutesData";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class App extends Component {
  render() {
    return (
      <>
        <RoutesData />
      </>
    );
  }
}

export default App;

// https://codesandbox.io/s/react-life-cycle-methods-withexamples-cdtey?from-embed=&file=/src/components/Updating/componentDidUpdateMethod.js
