import React from 'react'
import {Card} from "react-bootstrap";
import './Category.css'
import {getFacts} from "../../actions/category-actions";
import { connect } from 'react-redux';
import FactContainer from "../../containers/factContainer/FactContainer";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        random: require('../../assets/images/categories/random_category.jpg'),
        animal: require('../../assets/images/categories/animal_category.jpg'),
        dev: require('../../assets/images/categories/dev_category.png'),
        career: require('../../assets/images/categories/career_category.jpg'),
        celebrity: require('../../assets/images/categories/celebrity_category.jpg'),
        explicit: require('../../assets/images/categories/explicit_category.png'),
        fashion: require('../../assets/images/categories/fashion_category.jpg'),
        food: require('../../assets/images/categories/food_category.jpg'),
        history: require('../../assets/images/categories/history_category.jpg'),
        money: require('../../assets/images/categories/money_category.jpg'),
        movie: require('../../assets/images/categories/movie_category.jpg'),
        music: require('../../assets/images/categories/music_category.jpg'),
        political: require('../../assets/images/categories/political_category.jpg'),
        religion: require('../../assets/images/categories/religion_category.jpg'),
        science: require('../../assets/images/categories/science_category.jpg'),
        sport: require('../../assets/images/categories/sport_category.jpg'),
        travel: require('../../assets/images/categories/travel_category.jpg'),
      }
    }
  }

  handleClick() {
    this.props.onGetFacts(this.props.name);
  }

  render() {
    let button;
    if (!this.props.categoriesLoadingState[this.props.name]) {
      button = <i className="fas fa-search fa-lg search-icon" onClick={this.handleClick.bind(this)} title="Search jokes from this category"/>;
    } else {
      button = <i className="fas fa-spinner fa-lg fa-pulse loading-icon"/>;
    }

    let factContainer;
    if (this.props.facts[this.props.name]) {
      factContainer = this.props.facts[this.props.name].map(fact => {
        return <FactContainer category={this.props.name} factInfo={fact} key={fact.id} />
      })
    }

    return (
      <div className="Category animated fadeIn faster col-12 col-sm-6 col-xl-4 p-2 category-col">
        <Card className="bg-dark text-white category-card"
              style={{
                backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.33) 100%), url('+ this.state.image[this.props.name] +')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}>
          <Card.ImgOverlay className="overlay">
            <Card.Title className="row flex-sm-nowrap">
              <span className="col"/>
              <span className="col text-uppercase category-title">{this.props.name}</span>
              <span className="col text-right search">{button}</span>
            </Card.Title>
            {factContainer}
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  facts: state.categories.facts,
  categoriesLoadingState: state.categories.loadingCategories
});

const mapActionsToProps = {
  onGetFacts: getFacts
};

export default connect(mapStateToProps, mapActionsToProps)(Category)
