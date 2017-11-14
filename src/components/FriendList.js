import React, { Component } from 'react';
import FriendProfile from './FriendProfile';

export default class FriendList extends Component {
  render() {
    const { friends, requestNewFriend } = this.props;
    return (
      <section className="FriendList">
        <div>
          <button onClick={requestNewFriend}>Request New Friend</button>
        </div>
        <div>
          {friends.map(friend => (
            <FriendProfile {...friend} key={friend.login.sha256} />
          ))}
        </div>
      </section>
    );
  }
}
