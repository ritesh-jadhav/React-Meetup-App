import { Route,Switch } from "react-router-dom";
import MainNavigation from "./components/Layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return <div>
    <MainNavigation/>
    <Switch>
    <Route path="/" exact>
      <AllMeetupsPage/>
    </Route>
    <Route path="/new-meetup">
      <NewMeetupPage/>
    </Route>
    <Route path="/favourites">
      <FavouritesPage/>
    </Route>
    </Switch>
  </div>;
}

export default App;
