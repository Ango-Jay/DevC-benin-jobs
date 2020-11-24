import React, { Component } from "react";
import { Provider } from "react-redux";
import SignUp from "./pages/auth/SignUp/signUp";
import SignIn from "./pages/auth/signIn/signIn";
import Home from "./pages/Home/home";
import Profile from "./pages/auth/profile/profile";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import store from "./store";
import { loadUser } from "./actions/authActions";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    // const {
    //   match: { params },
    // } = this.props;
    // const { user } = store.getState().auth.user;
    return (
      <Provider store={store}>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/signIn" component={SignIn} />
          </Switch>
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
