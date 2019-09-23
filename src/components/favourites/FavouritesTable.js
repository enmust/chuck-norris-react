import React from 'react'
import {connect} from "react-redux";
import {Table} from "react-bootstrap";
import './FavouritesTable.css'
import {removeFactFromFavourites} from "../../actions/fact-actions";
import {Link} from "react-router-dom";

class FavouritesTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedFavourites: [],
      categoryIcons: {
        random: <i className="far fa-question-circle"/>,
        animal: <i className="fas fa-dog"/>,
        career: <i className="fas fa-tools"/>,
        celebrity: <i className="fas fa-glass-cheers"/>,
        dev: <i className="fas fa-code"/>,
        explicit: <i className="fas fa-exclamation-triangle"/>,
        fashion: <i className="fas fa-t-shirt"/>,
        food: <i className="fas fa-hamburger"/>,
        history: <i className="fas fa-history"/>,
        money: <i className="far fa-money-bill-alt"/>,
        movie: <i className="fas fa-film"/>,
        music: <i className="fas fa-music"/>,
        political: <i className="fas fa-fist-raised"/>,
        religion: <i className="fas fa-pray"/>,
        science: <i className="fas fa-magnet"/>,
        sport: <i className="fas fa-running"/>,
        travel: <i className="fas fa-plane-departure"/>,
      }
    }
  }

  componentDidMount() {
    let sortedFavourites = [];

    this.sortFavouritesByDate();

    this.getListOfAvailableCategories().forEach(category => {
      let object = {
        category: category,
        facts: [],
        expanded: false
      };
      this.props.favourites.forEach(fact => {
        if (category === (fact.categories[0] ? fact.categories[0] : 'random')) object.facts.push(fact);
      });

      sortedFavourites.push(object)
    });

    this.setState({sortedFavourites: sortedFavourites})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.favourites.length !== prevProps.favourites.length) {
      let sortedFavourites = [];

      this.sortFavouritesByDate();

      this.getListOfAvailableCategories().forEach((category, index) => {
        let object = {
          category: category,
          facts: [],
          expanded: false
        };
        if (prevState.sortedFavourites[index] && prevState.sortedFavourites[index].category === category) {
          object.expanded = prevState.sortedFavourites[index].expanded
        }

        this.props.favourites.forEach(fact => {
          if (category === (fact.categories[0] ? fact.categories[0] : 'random')) object.facts.push(fact);
        });

        sortedFavourites.push(object)
      });

      this.setState({sortedFavourites: sortedFavourites})
    }
  }

  sortFavouritesByDate() {
    if (this.props.favourites && this.props.favourites.length > 2) {
      this.props.favourites.sort((a, b) => (a.dateAddedToFavourites > b.dateAddedToFavourites) ? 1 : ((a.dateAddedToFavourites > b.dateAddedToFavourites) ? -1 : 0))
    }
  }

  getListOfAvailableCategories() {
    if (this.props.favourites && this.props.favourites.length > 0) {
      return this.props.favourites
        .map(entity => entity.categories[0] ? entity.categories[0] : 'random')
        .filter(((value, index, array) => array.indexOf(value) === index))
        .sort();
    } else return []
  }

  showFactsInCategory = (category) => (e) => {
    this.setState(prevState => ({

      sortedFavourites: prevState.sortedFavourites.map(
        el => (el.category === category.category) ? {...el, expanded: !el.expanded} : el
      )

    }));
  };

  handleClick = (fact) => (e) => {
    this.props.onRemoveFactFromFavourites(fact);

    this.state.sortedFavourites.forEach((entity, index) => {
      if (entity.category === (fact.categories[0] ? fact.categories[0] : 'random')) {
        // Todo: Change that line
        this.state.sortedFavourites[index].facts = entity.facts.filter(entity => entity.id !== fact.id)
      }
    });
  };

  render() {
    let tableData = [];

    if (this.state.sortedFavourites && this.state.sortedFavourites.length > 0) {
      this.state.sortedFavourites.forEach((category, index) => {

        tableData.push(
          <tr className="category-toggle" key={index} onClick={this.showFactsInCategory(category).bind(this)}>
            <td colSpan="4">
              <span>
                <i className={`fas fa-caret-${category.expanded ? 'down' : 'right'}`}/>
              </span>
              <span className="text-uppercase"> {category.category} {this.state.categoryIcons[category.category]}</span>
            </td>
          </tr>
        );

        if (category.facts && category.facts.length > 0) {
          category.facts.forEach((fact, index) => {
            tableData.push(
              <tr key={fact.id} className={`${category.expanded ? 'show-facts' : 'hide-facts'}`}>
                <td>{index + 1}</td>
                <td>{fact.value}</td>
                <td>{fact.dateAddedToFavourites.split('G')[0]}</td>
                <td className="text-center">
                  <span className="fa-stack stacked-icons"
                        title="Remove this fact from favourites"
                        onClick={this.handleClick(fact).bind(this)}
                        style={{'verticalAlign': 'top'}}>
                    <i className="fas fa-star fa-stack-1x" style={{'color': 'red'}}/>
                    <i className="fas fa-ban fa-stack-2x show-me" style={{'color': 'black'}}/>
                  </span>
                </td>
              </tr>
            );
          });
        }

      })

    } else {
      tableData.push(
        <tr key={1}>
          <td className="text-center" colSpan="5">
            You currently have no&nbsp;
            <span style={{'color': 'red'}}>
            <i className="far fa-star fa-spin"/>
            favourites
            <i className="far fa-star fa-spin"/>
          </span>
            , go to
            <Link to="/"> Jokes</Link> to add some.
          </td>
        </tr>
      );
    }

    return (
      <Table className="FavouritesTable" borderless responsive hover variant="dark">
        <thead>
        <tr>
          <th>#</th>
          <th>Fact</th>
          <th>Date added</th>
          <th>Remove</th>
        </tr>
        </thead>
        <tbody>
        {tableData}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => ({
  favourites: state.facts.favourites,
});

const mapActionsToProps = {
  onRemoveFactFromFavourites: removeFactFromFavourites
};

export default connect(mapStateToProps, mapActionsToProps)(FavouritesTable)
