import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Inscription from "./component/Inscription";
import Connexion from "./component/Connexion";
import Home from "./component/Home";
import AdminInterface from "./component/AdminInterface";

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/adminInterface" element={<AdminInterface />} />
        </Routes>
      </div>
    );
  }
}
export default App;
