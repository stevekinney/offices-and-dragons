import React, { Component } from 'react';

export default class FriendProfile extends Component {
  render() {
    const { name, picture } = this.props;
    return (
      <article>
        <h2>{name.first}</h2>
        <img src={picture.medium} alt={name.first} />
      </article>
    );
  }
}
