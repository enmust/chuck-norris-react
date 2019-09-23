import {
  ADD_FACT_TO_FAVOURITES,
  REMOVE_FACT_FROM_FAVOURITES,
  UPDATE_LANDING_IMAGE_FACT
} from "../actions/fact-actions";

const factInitialState = {
  landingImageFact: null,
  favourites: []
};

export default function factReducer(state = factInitialState, {type, payload}) {
  switch (type) {
    case ADD_FACT_TO_FAVOURITES:
      return {
        ...state,
        favourites: [...state.favourites, payload.fact]
      };
    case REMOVE_FACT_FROM_FAVOURITES:
      return {
        ...state,
        favourites: state.favourites.filter(fact => fact.id !== payload.fact.id)
      };
    case UPDATE_LANDING_IMAGE_FACT:
      return {
        ...state,
        landingImageFact: payload.fact
      };
    default:
      return state
  }
}
