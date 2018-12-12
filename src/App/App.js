import React, { Component } from 'react';
import Auth from '../components/Auth/Auth';
import './App.scss';
import connection from '../helpers/data/connection';
import Listings from '../components/Listings/Listings';
import MyNavbar from '../components/MyNavBar/MyNavbar';
import authRequests from '../helpers/data/authRequests';


class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
          <Auth isAuthenticated={this.isAuthenticated} />
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent} />
        <Listings />
      </div>
    );
  }
}

export default App;
