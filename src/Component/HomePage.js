import React from "react";
import { Link } from "react-router-dom";


const HomePage=()=>{

    return(
        <div>
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: "#e3f2fd"}}>
                  <a class="navbar-brand" href="#">MERN STACK</a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                          <button type="button" class="btn btn-outline-success btn-sm">
                              <Link className='nav-link' to="/W3_PropsComponent"><b>PropsComponent</b></Link>
                          </button>
                          <button type="button" class="btn btn-outline-success btn-sm">
                              <Link className='nav-link' to="/statecomponent"><b>StateComponent</b></Link>
                          </button>
                          <button type="button" class="btn btn-outline-success btn-sm">
                              <Link className='nav-link' to="/Week4"><b>UseEffectComponent</b></Link>
                          </button>
                          <button type="button" class="btn btn-outline-success btn-sm">
                              <Link className='nav-link' to="/Week5"><b>Styling-BootstrapCard</b></Link>
                          </button>
                          <button type="button" class="btn btn-outline-success btn-sm">
                              <Link className='nav-link' to="/Week6"><b>Conditional Rendering</b></Link>
                          </button>
                          <button type="button" class="btn btn-outline-success btn-sm">
                              <Link className='nav-link' to="/Week7"><b>BootstrapCard Component</b></Link>
                          </button>
                          <button type="button" class="btn btn-outline-success btn-sm">
                              <Link className='nav-link' to="/EventHandling"><b>EventHandling</b></Link>
                          </button>

                          <Link className='nav-link ' to="/Login" style={{marginLeft: 50}}><b className="text-primary">Logout</b></Link>

                          {/* <button type="button" class="btn btn-outline-success btn-sm">
                              <Link className='nav-link' to="/Login" style={{marginLeft: 200}}><b>Logout</b></Link>
                          </button> */}
                      </ul>
                  </div>
                 
              </nav>

            </div>
        </div>
    );
}
export default HomePage;