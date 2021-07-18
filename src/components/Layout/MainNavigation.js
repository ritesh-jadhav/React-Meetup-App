import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourites-context";

const MainNavigation = (props) => {
  const favctx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favorites
              <span className={classes.badge}>{favctx.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
