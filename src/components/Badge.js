import React from "react";

import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";

class Badge extends React.Component {
  
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={confLogo} alt="Logo Conferencia" />
        </div>
        <div className="Badge_section-name">
          <img
            className="Badge_avatar"
            src={this.props.pic}
            alt="Aldhair Vera Pic"
            width="80"
          />

          <h1>
            {this.props.firstname}
            <br />
            <br />
            {this.props.lastname}
          </h1>
        </div>

        <div className="Badge_section-info">
          <p> {this.props.jobtitle} </p>
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
