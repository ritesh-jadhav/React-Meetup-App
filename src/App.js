import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favourites">
            <FavouritesPage />
          </Route>
        </Switch>
      </Layout>
   
  );
}

export default App;
