import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
