import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className="col-12" id="about-me">
        <div className="row">
          <div className="col-12">
            <h1 className="animated fadeIn faster">I am <u>Enar Mustonen</u></h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <p className="animated fadeInDown fast">A guy from Pärnu who lives in Tallinn working as a software developer.</p>

            <p className="animated fadeInUp fast">Most of my programming experience has been in Web Development especially in front-end side.</p>

            <p className="animated fadeInDown fast">
              A few sentences about me can also be found on my
              <a href="https://enarmustonen.eu/" target="_blank" rel="noopener noreferrer"> webpage</a>.
            </p>

            <p className="animated fadeInUp fast">
              Some of my works can be seen
              <a href="https://enarmustonen.eu/#/portfolio" target="_blank" rel="noopener noreferrer"> here</a>.
            </p>

            <p className="animated fadeInDown fast">
              Link to my <a href="https://github.com/enmust" target="_blank" rel="noopener noreferrer"> GitHub </a>
              and this page's <a href="https://github.com/enmust/chuck-norris-react" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About
