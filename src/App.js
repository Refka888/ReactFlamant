import React, { Component } from "react";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Inscription from "./component/Inscription";
import Connexion from "./component/Connexion";
import Home from "./component/Home";
import AdminInterface from "./component/AdminInterface";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/adminInterface" element={<AdminInterface />} />
          
        </Routes>

        <Footer />
      </div>
    );
  }
}
export default App;
