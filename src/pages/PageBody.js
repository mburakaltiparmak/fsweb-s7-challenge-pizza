import React from "react";
import { Route, Switch } from "react-router-dom";
import AnaSayfa from "./AnaSayfa";
import SiparisForm from "./SiparisForm";
import Success from "./Success";
function PageBody() {
  return (
    <Switch>
      <Route path="/" name="AnaSayfa" exact>
        <AnaSayfa />
      </Route>
      <Route path="/pizza" name="PizzaOrder" exact>
        <SiparisForm />
      </Route>
      <Route path="/success" name="Success" exact>
        <Success />
      </Route>
    </Switch>
  );
}
export default PageBody;
