import React from 'react';
import './App.css';
import AppHeader from "../appHeader/AppHeader";
import AppFooter from "../appFooter/AppFooter";
import Dashboard from "../dashboard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>

        <Dashboard/>

        <AppFooter/>
      </div>
    );
  }
}

export default App
