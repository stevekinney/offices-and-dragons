import { ADD_FRIEND_TO_LIST } from '../constants';

export default function(state = [], action) {
  if (action.type === ADD_FRIEND_TO_LIST) {
    return [...state, action.friend];
  }

  return state;
}
