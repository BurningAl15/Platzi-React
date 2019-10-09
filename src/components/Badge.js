import React from "react";

import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

import Gravatar from "../components/Gravatar";

class Badge extends React.Component {
  
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={confLogo} alt="Logo Conferencia" />
        </div>
        <div className="Badge_section-name">
         <Gravatar 
         className="Badge_avatar"
         email={this.props.email}
         />

          <h1>
            {this.props.firstName}
            <br />
            <br />
            {this.props.lastName}
          </h1>
        </div>

        <div className="Badge_section-info">
          <p> {this.props.jobTitle} </p>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge_footer">{this.props.hashtag}</div>
      </div>
    );
  }
}

/*
Structure:
container (<div or other)
    content

<div>
    <h1>title</h1>
    <p>stuuuuuuuuuuuff</p>
</div>
*/

export default Badge;
