import {React} from "react";
import { Link } from "react-router-dom";
import { classes } from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <header>
      <div>React Meetup</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
    
  );
};

export default MainNavigation;
