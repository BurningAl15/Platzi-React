import React from "react";

import twitterPic from "../images/twitter.svg";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled ">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="list-unstyled BadgesList">
              <div className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badge.avatarURL}
                  alt="Avatar"
                  width="80"
                />
                <div>
                  <div className="BadgesListItem_title">
                    {badge.firstname} {badge.lastname}
                  </div>

                  <div className="BadgesListItem_twitter">
                    <img
                    className="BadgesListItem_twitterIcon"
                    src={twitterPic}
                    alt="TwitterPic"
                    width="20"
                    />
                    @{badge.twitter}
                  </div>

                  <p>{badge.jobtitle}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
