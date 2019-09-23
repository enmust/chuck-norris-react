import React from 'react'
import Category from "../../components/category/Category";
import { connect } from 'react-redux';
import { getCategories } from "../../actions/category-actions";

class CategoryContainer extends React.Component {
  componentDidMount() {
    this.props.onGetCategories();
  }

  render() {
    return (
      this.props.categories.map((value, index) => {
        return <Category key={index} name={value} />
      })
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.listOfCategories,
});

const mapActionsToProps = {
  onGetCategories: getCategories,
};

export default connect(mapStateToProps, mapActionsToProps)(CategoryContainer);
