import React from 'react'
import './LandingPageImage.css'
import FactContainer from "../../containers/factContainer/FactContainer";
import {connect} from "react-redux";
import {getLandingImageFact} from "../../actions/fact-actions";

class LandingPageImage extends React.Component {
  componentDidMount() {
    this.props.onGetLandingImageFact()
  }

  render() {
    let fact;

    if (this.props.fact && this.props.fact.value.length <= 225) {
      fact = <FactContainer category={'random'} factInfo={this.props.fact} isOnLandingImage={true} />
    }

    return (
      <div className="LandingPageImage">

        <div className="d-flex flex-column justify-content-center h-100">
          <div className="h1 text-shadow">Chuck Norris's jokes</div>
          {fact}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  fact: state.facts.landingImageFact,
});


const mapActionsToProps = {
  onGetLandingImageFact: getLandingImageFact
};

export default connect(mapStateToProps, mapActionsToProps)(LandingPageImage)
