import user from './users';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import { combineReducers } from 'redux';
import typing from './typing';

//combina reducers
const reducer = combineReducers({
  user,
  contacts,
  activeUserId,
  messages,
  typing
});

export default reducer;

