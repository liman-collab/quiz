import React, { Component } from "react";
import "./App.css";
import Quiz from "./components/Quiz/Quiz";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Quiz />
      </div>
    );
  }
}
export default App;
