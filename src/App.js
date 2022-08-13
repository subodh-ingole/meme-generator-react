import React from "react";
import Navbar from "./components/Navbar";
import Generator from "./components/Generator";
import MemeData from "./components/MemeData";
function App() {
  return (
    <div className="App">
      <div className="all">
        <Navbar />
        <Generator/>
      </div>
    </div>
  );
}

export default App;
