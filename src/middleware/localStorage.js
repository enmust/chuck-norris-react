export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('chuckNorrisFavourites')
    if (serializedState === null) return [];
    return JSON.parse(serializedState)
  } catch (err) {
    return []
  }
};

export const saveState = (favouritesState) => {
  try {
    const serializedState = JSON.stringify(favouritesState);
    localStorage.setItem('chuckNorrisFavourites', serializedState)
  } catch (err) {

  }
};
