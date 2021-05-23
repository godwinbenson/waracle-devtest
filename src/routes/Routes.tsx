import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { Uploads } from "./Uploads";
import { Home } from "./Home";
import { NotFound } from "./NotFound";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route exact path="/upload">
        <Uploads />
      </Route>

      <Route path="/" component={NotFound} />
    </Switch>
  );
};
