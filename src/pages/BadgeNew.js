import React from "react";

import "../pages/styles/BadgeNew.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import header from "../images/platziconf-logo.svg";
import api from "../api";
// import NavBar from "../components/NavBar";
class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
      hashtag: "#Al_V"
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit= async e=>{
    e.preventDefault() //Stops from sending
    this.setState({loading:true,error:null})

    try{
      await api.badges.create(this.state.form);
      this.setState({loading:false})
    }catch(error){
      this.setState({loading:false,error:error});
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid Badge_Image" src={header} alt="Logo " />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || "Last Name"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter || "Twitter"}
                email={this.state.form.email || "Email"}
                hashtag={this.state.form.hashtag || "Hashtag"}
                pic="https://s.gravatar.com/avatar/56d45d79a669a78110923f34353061aa?s=80"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
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
