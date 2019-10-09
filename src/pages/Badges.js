import React from "react";

import "./styles/Badges.css";
import "../components/styles/Badges_List.css";

// import NavBar from "../components/NavBar";
import logo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";

import {Link} from 'react-router-dom';
import api from '../api';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {
  state = {
    loading:true,
    error:null,
    data:undefined
  };

  componentDidMount(){
    this.timeoutId=this.fetchData();

    this.intervalId=setInterval(() => {
      this.fetchData();
    }, 5000);
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

  componentWillUnmount(){
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
  }

  render() {
    //this.state.data===undefined and !this.state.data are the same
    if(this.state.loading===true && !this.state.data){
      return <PageLoading />;
    };

    if(this.state.error){
      return <PageError error={this.state.error}/>
    }

    return (
      <React.Fragment>
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
            {this.state.loading && <MiniLoader/>}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
