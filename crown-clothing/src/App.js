import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"

import './App.css';


import Homepage from './pages/homepage/Homepage.component';
import ShopPage from "./pages/shopPage/ShopPage.component"
import Header from "./components/header/Header.component"
import SignInSignUp from "./pages/Auth/Sign-in-sign-up.component"
import { auth } from "./firebase/firebase.utils"

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    //this is a method from the firebase library that everytime the user changes in the database we will receive a new user. 
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    //unsubscribe means that it will stop listening. not that it will logout
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App;

