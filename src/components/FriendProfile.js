import React, { Component } from 'react';

import './FriendProfile.css';

export default class FriendProfile extends Component {
  render() {
    const { name, picture, level, role, hp, mana } = this.props;
    return (
      <article className="FriendProfile">
        <div>
          <h2>{name.first}</h2>
          <img src={picture.large} alt={name.first} />
          <p>
            Level {level} {role}
          </p>
          <ul>
            <li>
              <strong>HP</strong>: {hp}
            </li>
            <li>
              <strong>Mana</strong>: {mana}
            </li>
          </ul>
        </div>
      </article>
    );
  }
}
