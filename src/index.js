import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {HashRouter as Router} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'animate.css/animate.min.css'
import 'izitoast/dist/css/iziToast.min.css'

import thunk from "redux-thunk";
import {applyMiddleware, compose, combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import categoryReducer from "./reducers/category-reducer";
import factReducer from "./reducers/fact-reducer";
import searchReducer from "./reducers/search-reducer";
import {loadState, saveState} from "./middleware/localStorage";

const allReducers = combineReducers({
  categories: categoryReducer,
  facts: factReducer,
  search: searchReducer
});

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const allStoreEnhancers = devTools ? compose(applyMiddleware(thunk), devTools) : compose(applyMiddleware(thunk));

const favouritesFromLocalStorage = loadState();

const store = createStore(
  allReducers,
  {
    categories: {
      listOfCategories: ['random'],
      facts: {
        random: []
      },
      loadingCategories: {
        random: false
      }
    },
    facts: {
      favourites: favouritesFromLocalStorage,
    },
    search: {
      searchQuery: '',
      searchResults: [],
    },
  },
  allStoreEnhancers
);

store.subscribe(() => {
  saveState(store.getState().facts.favourites);
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
