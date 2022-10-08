import { SET_ACTIVE_USER_ID, DELETE_CONTACT, SET_TYPING_VALUE, SEND_MESSAGE} from '../constants/action-types';
export const setActiveUser = id => ({ type: SET_ACTIVE_USER_ID, payload: id });
export const deleteContact = id => ({ type: DELETE_CONTACT, payload: id });
export const setTypingValue = value => ({ type: SET_TYPING_VALUE, payload: value });
export const sendMessage = (message,userId) => ({ type: SEND_MESSAGE, payload: { message, userId } });
