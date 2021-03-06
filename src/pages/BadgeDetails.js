import React from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

import logo from "../images/platziconf-logo.svg";
import "./styles/BadgeDetails.css";
import Badge from "../components/Badge";

import DeleteModal from "../components/DeleteBadgeModal";

// function useIncreaseCount(max){
//   const [count, setCount] = React.useState(0); //Simple Hook

//   if(count>max){
//     setCount(0);
//   }
//   return [count,setCount];
// }

function BadgeDetails(props) {
  // const [count, setCount] = React.useState(0); //Simple Hook
  // const [count, setCount] = useIncreaseCount(4); //Custom Hook

  const badge = props.badge;

  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={logo} alt="Conference Logo" />
            </div>

            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              twitter={badge.twitter}
              hashtag={badge.hashtag}
            />
          </div>

          <div className="col">
            <h2>Actions</h2>
            <div>
              <div>
                {/* <button
                  onClick={() => {
                    setCount(count +1);
                  }}
                  className="btn btn-primary"
                >
                  Increase Count: {count}
                </button> */}

                <Link
                  className="btn btn-primary mb-4"
                  to={`/badges/${badge.id}/edit`}
                >
                  Edit
                </Link>
              </div>

              <div>
                <button onClick={props.onOpenModal} className="btn btn-danger">
                  Delete
                </button>
                {/* (que queremos renderizar, donde lo queremos renderizar) */}
                <DeleteModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
