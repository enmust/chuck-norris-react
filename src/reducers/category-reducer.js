import {CHANGE_CATEGORY_LOADING_STATE, UPDATE_CATEGORIES, UPDATE_FACTS} from "../actions/category-actions";

const categoryInitialState = {
  listOfCategories: ['random'],
  facts: {
    random: []
  },
  loadingCategories: {
    random: false
  }
};

export default function categoryReducer(state = categoryInitialState, {type, payload}) {
  switch (type) {
    case UPDATE_CATEGORIES:
      return Object.assign({}, state, {
        listOfCategories: state.listOfCategories.concat(payload.listOfCategories)
      });
    case UPDATE_FACTS:
      return Object.assign({}, state, {
        facts: Object.assign({}, state.facts, payload)
      });
    case CHANGE_CATEGORY_LOADING_STATE:
      return Object.assign({}, state, {
        loadingCategories: Object.assign({}, state.loadingCategories, payload)
      });
    default:
      return state
  }
}
