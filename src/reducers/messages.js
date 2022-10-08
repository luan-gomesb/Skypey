import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constants/action-types';
import _ from 'lodash';

const messages = (state = getMessages(10), action) => {
  
  switch(action.type){
    case SEND_MESSAGE:
      const messages = state[action.payload.userId];
     console.log(_.keys(messages)); 
      const index = Number.parseInt(_.keys(messages).pop())+1;

      return {...state,
            [action.payload.userId]:{
              ...messages,
              [index]:{
              number:index,
              text: action.payload.message,
              is_user_msg:true} }
      };
    default:
      return state;

  } 
}

const getNextIndex = (messages) => {
  if(!messages) return 0;  

  messages.sort(sortNumber);
  return messages[messages.length].number+1;
}
const sortNumber = (a,b) => {
  if(a.number > b.number) return 1;
  if(a.number < b.number) return -1;
  return 0;
}



export default messages;
