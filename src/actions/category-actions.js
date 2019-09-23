import {fetchCategories, fetchFact} from "../middleware/api";
import {toastError, toastInfo} from "../helpers/iziToast/iziToast";

export const UPDATE_CATEGORIES = 'categories:updateListOfCategories';
export const UPDATE_FACTS = 'categories:updateFacts';
export const CHANGE_CATEGORY_LOADING_STATE = 'categories:changeCategoryLoadingState';

function updateCategories(newCategories) {
  return {
    type: UPDATE_CATEGORIES,
    payload: {
      listOfCategories: newCategories
    }
  }
}

function updateFacts(category, facts) {
  return {
    type: UPDATE_FACTS,
    payload: {
      [category]: facts
    }
  }
}

function changeCategoryLoadingState(category, loadingState) {
  return {
    type: CHANGE_CATEGORY_LOADING_STATE,
    payload: {
      [category]: loadingState
    }
  }
}

export function getCategories() {
  return dispatch => {
    fetchCategories().then(response => {
      if (response) {
        if (response.length > 0) dispatch(updateCategories(response));
        else if (response.errorReason) toastError({text: response.errorReason + ''})
      } else console.log(response)
    }, errResponse => {
      console.log(errResponse)
    })
  }
}

export function getFacts(category) {
  return dispatch => {
    dispatch(changeCategoryLoadingState(category, true));

    let searchFact = async () => {
      let listOfFacts = [];

      while (listOfFacts.length < 3) {
        let apiResult = await fetchFact(category);
        if (apiResult && apiResult.id) {
          if (listOfFacts.find(item => item.id === apiResult.id)) break;
          else listOfFacts.push(apiResult)
        } else {
          toastError({text: apiResult.errorReason + ''});
          break;
        }
      }

      return listOfFacts
    };

    searchFact().then(listOfFacts => {
      dispatch(updateFacts(category, listOfFacts));
      dispatch(changeCategoryLoadingState(category, false));
      toastInfo({text: `found <b>${listOfFacts.length}</b> unique facts from <b>${category}</b> category.`})
    });
  }
}
