import React from 'react'
import { Navbar } from 'react-bootstrap';
import './AppFooter.css'

class AppFooter extends React.Component {
  render() {
    return (
      <Navbar sticky="bottom" className="AppFooter justify-content-center">
          <div className="small">
            All jokes are fetched from <a href="https://api.chucknorris.io/" target="_blank" rel="noopener noreferrer">https://api.chucknorris.io/</a>
          </div>
      </Navbar>
    );
  }
}

export default AppFooter
