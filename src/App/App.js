import React, { Component } from 'react';
import Auth from '../components/Auth/Auth';
import './App.scss';
import connection from '../helpers/data/connection';


class App extends Component {
  componentDidMount() {
    connection();
  }

  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
