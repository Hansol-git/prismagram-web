import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";
import Explore from "../Routes/Explore";
import Profile from "../Routes/Profile";
import Search from "../Routes/Search";

const LoggedInRoutes = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedoutRoutes = () => {
  console.log("Now logged out Routes");
  return (
    <Switch>
      <Route exact path="/" component={Auth} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};
const AppRouter = ({ isLoggedIn }) => {
  console.log(isLoggedIn, "AppRouter");
  return isLoggedIn ? <LoggedInRoutes /> : <LoggedoutRoutes />;
};

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
