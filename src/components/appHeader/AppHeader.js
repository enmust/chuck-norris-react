import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './AppHeader.css'

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appHeaderClass: 'hide-bg',
      navbarVariant: 'dark',
      navExpanded: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  navToggleClicked() {
    if (this.state.navExpanded) {
      if (window.scrollY > 100) this.setState({navExpanded: false});
      else this.setState({appHeaderClass: 'hide-bg', navbarVariant: 'dark', navExpanded: false})
    } else this.setState({appHeaderClass: 'show-bg', navbarVariant: 'light', navExpanded: true})
  }

  closeNav() {
    this.setState({navExpanded: false})
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({appHeaderClass: 'show-bg', navbarVariant: 'light'})
    } else {
      if (!this.state.navExpanded) this.setState({appHeaderClass: 'hide-bg', navbarVariant: 'dark'})
    }
  };

  render() {
    return (
      <Navbar className={`AppHeader ${this.state.appHeaderClass}`}
              expanded={this.state.navExpanded}
              variant={this.state.navbarVariant} expand="sm" fixed="top">
        <Navbar.Brand>Chuck Norris</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.navToggleClicked.bind(this)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" exact activeClassName="selected-nav-link"
                     className="nav-link" onClick={this.closeNav.bind(this)}>Jokes</NavLink>
            <NavLink to="/favourites" exact activeClassName="selected-nav-link"
                     className="nav-link" onClick={this.closeNav.bind(this)}>Favourites</NavLink>
            <NavLink to="/about" exact activeClassName="selected-nav-link"
                     className="nav-link" onClick={this.closeNav.bind(this)}>About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AppHeader
