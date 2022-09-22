import React, { Component } from "react";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import Inscription from "./component/Inscription";
import Connexion from "./component/Connexion";
import Home from "./component/Home";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route exact path="/inscription" element={<Inscription />}></Route>
          <Route path="/connexion" element={<Connexion />}></Route>
        </Routes>

        <Footer />
      </div>
    );
  }
}
export default App;
