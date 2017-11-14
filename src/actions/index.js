import { REQUEST_NEW_FRIEND, ADD_FRIEND_TO_LIST } from '../constants';

export const requestNewFriend = () => {
  return {
    type: REQUEST_NEW_FRIEND,
  };
};

export const addFriendToList = friend => ({
  type: ADD_FRIEND_TO_LIST,
  friend,
});
