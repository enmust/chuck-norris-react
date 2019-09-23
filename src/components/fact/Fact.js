import React from 'react'
import { Card } from "react-bootstrap";
import './Fact.css'

class Fact extends React.Component {

  handleClick() {
    this.props.toggleFactInFavourites()
  }

  render() {
    return (
      <Card.Text className={`animated fadeIn faster flex-nowrap Fact ${this.props.isOnLandingImage ? 'text-center mx-5' : 'text-justify'}` }
                 onClick={this.handleClick.bind(this)}>
        <span className="fact-value">{this.props.factValue}</span>
        <span className="ml-1">
          <i className={`fa-star fa-lg ${this.props.isInFavourites ? 'fas' : 'far'}`} />
        </span>
      </Card.Text>
    );
  }
}

export default Fact;
