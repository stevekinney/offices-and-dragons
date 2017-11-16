import localforage from 'localforage';

import generateStats from './generate-stats';

window.localforage = localforage;

const getAll = async () => {
  const friends = await localforage.getItem('friends');
  if (!friends) await localforage.setItem('friends', []);
  return friends || [];
};

export default {
  async requestNewFriend() {
    const friends = await getAll();
    const newFriend = await fetch('https://api.randomuser.me/')
      .then(response => response.json())
      .then(response => response.results[0])
      .then(generateStats);
    localforage.setItem('friends', [...friends, newFriend]);
    return newFriend;
  },

  async getAll() {
    return await getAll();
  },

  async delete({ id }) {
    const friends = await getAll();
    localforage.setItem('friends', friends.filter(friend => friend.id !== id));
  },

  async update(updatedFriend) {
    const friends = await getAll();
    localforage.setItem(
      'friends',
      friends.map(friend => {
        if (friend.id === updatedFriend.id) return { ...friend, ...updatedFriend };
        return friend;
      }),
    );
  }
};
