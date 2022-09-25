import React, { Component } from "react";
import "./style.css";

export default class Connexion extends Component {
  render() {
    return (
      <div>
  
<section className="background-radial-gradient overflow-hidden">
 
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0 divConnexion" >
        <h1 className="my-5 display-5 fw-bold ls-tight h1Connexion" >
         Flamant <br />
          <span className="spanConnexion">Your Best Choice</span>
        </h1>
        <p className="mb-4 opacity-70 pConnexion" >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form>
            
              <div className="form-outline mb-4">
              <label className="form-label" for="form3Example3">Email address</label>
              <input type="email" id="form3Example3" className="form-control" />
              </div>

           
              <div className="form-outline mb-4">
              <label className="form-label" for="form3Example4">Password</label>
              <input type="password" id="form3Example4" className="form-control" />
              </div>

            
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label className="form-check-label" for="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

           
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Sign up
              </button>

         
              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

              

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    );
  }
}