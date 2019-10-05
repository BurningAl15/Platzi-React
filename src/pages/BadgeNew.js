import React from "react";

import "../pages/styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../images/badge-header.svg";
// import NavBar from "../components/NavBar";

import aldhairPic from "../images/Aldhair Vera.jpg";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstname: "",
      lastname: "",
      email: "",
      jobtitle: "Designer",
      twitter: "",
      hashtag: "#Al_V"
    }
  };

  handleChange = e => {
    //First way
    // const nextForm=this.state.form;
    // nextForm[e.target.name]=e.target.value;

    this.setState({
      //First way
      // form:
      // nextForm

      //Second Way
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo " />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                // firstname="Aldhair"
                // lastname="Vera Camacho"
                // jobtitle="Game Programmer and Game Designer"
                // twitter="@AldhairVera"
                // hashtag="#Al_V"
                firstname={this.state.form.firstname}
                lastname={this.state.form.lastname}
                jobtitle={this.state.form.jobtitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                hashtag={this.state.form.hashtag}
                // pic={aldhairPic}
                pic="https://s.gravatar.com/avatar/56d45d79a669a78110923f34353061aa?s=80"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
