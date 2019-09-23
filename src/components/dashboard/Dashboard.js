import React from 'react'
import './Dashboard.css'
import LandingPageImage from "../landingPageImage/LandingPageImage";
import CategoryContainer from "../../containers/categoryContainer/CategoryContainer";
import {Route, Switch, Redirect} from "react-router-dom";
import About from "../about/About";
import Favourites from "../favourites/Favourites";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="Dashboard">

        <LandingPageImage/>

        <div className="container-fluid h-100">

          <div className="row no-gutters">

            <Switch>
              <Route path="/" exact component={CategoryContainer}/>
              <Route path="/favourites/" component={Favourites}/>
              <Route path="/about/" component={About}/>
              <Route render={() => <Redirect to="/" />} />
            </Switch>

          </div>

        </div>
      </div>
    );
  }
}

export default Dashboard
