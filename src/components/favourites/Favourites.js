import React from 'react'
import FavouritesTable from "./FavouritesTable";

class Favourites extends React.Component {
  render() {
    return (
      <div className="col-12 text-left">
        <h1>Favourites</h1>

        <div className="row">
          <div className="col">
            <FavouritesTable/>
          </div>
        </div>
      </div>
    );
  }
}

export default Favourites
