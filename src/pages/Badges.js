import React from "react";

import "./styles/Badges.css";
import "../components/styles/Badges_List.css";

// import NavBar from "../components/NavBar";
import logo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

import {Link} from 'react-router-dom';
import api from '../api';

class Badges extends React.Component {
  state = {
    loading:true,
    error:null,
    // data: undefined
    data:undefined
  };

  // constructor(props){
  //   super(props);
  //   console.log('1. constructor()');

  //   this.state = {
  //     loading:true,
  //     error:null,
  //     data: undefined
  //   };
  // }

  componentDidMount(){

    this.timeoutId=this.fetchData();

    // this.timeoutId = setTimeout(() => {
    //   this.setState({
    //     data: [
    //       {
    //         id: "12sm12ps1p2so12spo-1spo-kopa-sdpo",
    //         firstname: "Nancy",
    //         lastname: "Rojas Salvatierra",
    //         email: "nancyrs22@hotmail.com",
    //         jobtitle: "Jr. Technical Artist",
    //         twitter: "Nhymer22",
    //         avatarURL:
    //           "https://s.gravatar.com/avatar/bf8c310c9c7faed29ec820a6b9e8ebfb?s=80"
    //       },
    //       {
    //         id: "22sm12ps1p2so12spo-1spo-kopa-sdpo",
    //         firstname: "Stormy",
    //         lastname: "Vera Camacho",
    //         email: "stormyTheBlondie@hotmail.com",
    //         jobtitle: "Blondie Baby",
    //         twitter: "BlondieBae",
    //         avatarURL:
    //           "https://media.istockphoto.com/photos/icon-of-a-businessman-avatar-or-profile-pic-picture-id474001892"
    //       },
    //       {
    //         id: "32sm12ps1p2so12spo-1spo-kopa-sdpo",
    //         firstname: "Drakary",
    //         lastname: "Rojas Salvatierra",
    //         email: "fatkitten@hotmail.com",
    //         jobtitle: "Fat kitten",
    //         twitter: "TheFatKitten",
    //         avatarURL:
    //           "https://s.gravatar.com/avatar/bf8c310c9c7faed29ec820a6b9e8ebfb?s=80"
    //       }
    //     ]      })
    // }, 3000);
  }

  fetchData=async () => {
    this.setState({loading:true,error:null})

    try{
      const data=await api.badges.list();
      this.setState({loading:false,data:data})

    }catch(error){
      this.setState({loading:false,error:error})
    }
  }

  // componentDidUpdate(prevProps,prevState){
  //   console.log('5. componentDidUpdate()');
  //   console.log({prevProps:prevProps,prevState:prevState});
  // }

  componentWillUnmount(){
    console.log('6. componentWillUnmount()');
    clearTimeout(this.timeoutId);
  }

  render() {
    if(this.state.loading===true){
      return 'Loading... ';
    };

    return (
      <React.Fragment>
        {console.log('3. render()')}

        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={logo} alt="Conf Logo" />
            </div>
          </div>
        </div>

        <div className="Badge_container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
