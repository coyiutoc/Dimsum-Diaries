import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import RestaurantPage from "./pages/RestaurantPage/RestaurantPage";

import appRoutes from "./AppRoutes";
import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const app = () => {
  return (
    <div>
      <NavBar />
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage />
          </Route>
          <Route path={appRoutes.restaurant + "/:neighborhood/:restaurant"}>
            <RestaurantPage />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default app;
