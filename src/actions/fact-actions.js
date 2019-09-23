import {toastInfo, toastSuccess} from "../helpers/iziToast/iziToast";
import {fetchFact} from "../middleware/api";

export const ADD_FACT_TO_FAVOURITES = 'fact:addFactToFavourites';
export const REMOVE_FACT_FROM_FAVOURITES = 'fact:removeFactFromFavourites';
export const UPDATE_LANDING_IMAGE_FACT = 'fact:updateLandingImageFact';

export function addFactToFavourites(fact) {
  toastSuccess({text: 'Added joke to favourites!'});
  fact.dateAddedToFavourites = new Date().toString();
  return {
    type: ADD_FACT_TO_FAVOURITES,
    payload: {
      fact: fact
    },
  }
}

export function removeFactFromFavourites(fact) {
  toastInfo({text: 'Removed joke from favourites'});
  return {
    type: REMOVE_FACT_FROM_FAVOURITES,
    payload: {
      fact: fact
    }
  }
}

function updateLandingImageFact(fact) {
  return {
    type: UPDATE_LANDING_IMAGE_FACT,
    payload: {
      fact: fact
    }
  }
}

export function getLandingImageFact() {
  return dispatch => {
    fetchFact('random').then(response => {
      if (response && response.id) dispatch(updateLandingImageFact(response))
    });
  }
}
