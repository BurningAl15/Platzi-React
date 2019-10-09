import React from "react";

import "../pages/styles/BadgeEdit.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import header from "../images/platziconf-logo.svg";
import api from "../api";

// import NavBar from "../components/NavBar";
class BadgeEdit extends React.Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
      hashtag: "#Al_V"
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault(); //Stops from sending
    this.setState({ loading: true, error: null });

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }

    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img className="img-fluid BadgeEdit_Image" src={header} alt="Logo " />
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
              <h1>Edit attendant</h1>

              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
