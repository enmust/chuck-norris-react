import React from 'react'
import Fact from "../../components/fact/Fact";
import { connect } from 'react-redux';
import {addFactToFavourites, removeFactFromFavourites} from "../../actions/fact-actions";

class FactContainer extends React.Component {

  isFactInFavourites() {
    return !!this.props.favourites.find(fact => fact.id === this.props.factInfo.id);
  }

  handleClick() {
    if (this.isFactInFavourites()) this.props.onRemoveFactFromFavourites(this.props.factInfo);
    else this.props.onAddFactToFavourites(this.props.factInfo);
  }

  render() {
    return (
      <Fact factValue={this.props.factInfo.value}
            factId={this.props.factInfo.id}
            toggleFactInFavourites={this.handleClick.bind(this)}
            isInFavourites={this.isFactInFavourites()}
            isOnLandingImage={this.props.isOnLandingImage} />
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.facts.favourites,
});

const mapActionsToProps = {
  onAddFactToFavourites: addFactToFavourites,
  onRemoveFactFromFavourites: removeFactFromFavourites
};

export default connect(mapStateToProps, mapActionsToProps)(FactContainer)
