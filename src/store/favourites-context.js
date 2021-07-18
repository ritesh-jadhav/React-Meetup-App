import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
  addFavourite: (favouriteMeetup) => {},
});

export const FavouritesContextProvider = (props) => {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    setUserFavourites((prevfavourites) => {
      return prevfavourites.concat(favouriteMeetup);
    });
  };
  const removeFavouriteHandler = (meetupId) => {
    setUserFavourites((prevfavourites) => {
      return prevfavourites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const itemIsFaviouriteHandler = (meetupId) => {
    return userFavourites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFaviouriteHandler,
    addFavourite: addFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
