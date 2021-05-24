import * as React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Uploads } from "./Uploads";
import { Home } from "./Home";
import { NotFound } from "./NotFound";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/upload" component={withRouter(Uploads)}>
        <Uploads />
      </Route>
      <Route path="/" exact component={withRouter(Home)} />

      <Route path="/" component={NotFound} />
    </Switch>
  );
};
