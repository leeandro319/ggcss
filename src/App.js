import React from "react";
import Routes from "./router";

import "./global.css";
import NavMenu from "./components/Header";

function App() {
  return (
    <div>
      <NavMenu />
      <Routes />
    </div>
  );
}

export default App;
