import React from "react";
import MainNavbar from "../components/utils/Navbar";
import FavouriteList from "../components/Event/FavouriteList";

const FavouritesPage = () => {
  return (
    <div>
      <MainNavbar />
      <div className="text-center mt-3">
        <h3>Favourites</h3>
      </div>

      <FavouriteList />
    </div>
  );
};

export default FavouritesPage;
