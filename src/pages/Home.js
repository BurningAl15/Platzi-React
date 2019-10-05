import React from "react";

import "./styles/Home.css";
import logo from "../images/astronauts.svg";
import platziConf from "../images/platziconf-logo.svg";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="container">
            <div className="row">
              <div className="Home__col col-12 col-md-4">
                <img className="img-fluid mb-2" src={platziConf} alt="/" />

                <h1>Badge Management System</h1>

                <Link className="btn btn-primary" to="/badges">
                  Start
                </Link>
              </div>

              <div className="Home__col d-none d-md-block col-md-8">
                <img className="Home_Img" src={logo} alt="/" />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
