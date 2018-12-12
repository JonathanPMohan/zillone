import React from 'react';
import './Auth.scss';
import authRequests from '../../helpers/data/authRequests';

class Auth extends React.Component {
  authenticateUser = (e) => {
    e.preventDefault();
    authRequests.authenticate().then(() => {
      this.props.isAuthenticated();
    }).catch(err => console.error('there was an error with auth', err));
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger" onClick={this.authenticateUser}>LOGIN</button>
      </div>
    );
  }
}

export default Auth;