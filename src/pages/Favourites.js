import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavouritesContext from "../store/favourites-context";
const FavouritesPage = () => {
  const favouritectx = useContext(FavouritesContext);
  let content;
  if (favouritectx.totalFavourites === 0){
    content= <p>You got no favorites yet.Start adding some ?</p>
  }else{
      content=<MeetupList meetups={favouritectx.favourites}/>
  }
  return (
    <section>
      <h1>Your Favorites</h1>
      {content}
    </section>
  );
};
export default FavouritesPage;
