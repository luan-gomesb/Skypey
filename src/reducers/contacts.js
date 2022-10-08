import { DELETE_CONTACT } from '../constants/action-types';
import { contacts } from '../static-data';

function getContacts(state = contacts, action) {
  switch (action.type) {
    case DELETE_CONTACT:
      console.log('usuario deletado, ', action);
      delete state[action.payload]
      return state;
    default:
      return state;
  }
}
export default getContacts; 