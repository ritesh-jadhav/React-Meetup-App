import {React} from "react";
import { Link } from "react-router-dom";
import  classes  from "./MainNavigation.module.css";

const MainNavigation = (props) => {
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
            <Link to="/favourites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
};

export default MainNavigation;
