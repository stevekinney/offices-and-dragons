import React, { Component } from 'react';

import FriendListContainer from '../containers/FriendListContainer';

import './Application.css';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <FriendListContainer />
      </div>
    );
  }
}

export default Application;
