import store from '../store';
import Header from '../components/Header';
import Chats from '../components/Chats';
import MessageInput from './MessageInput';
import  {setTypingValue, sendMessage } from '../actions';
import _ from 'lodash';

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const messages = state.messages[activeUserId];

  const handleSubmitMessage = e => {
     e.preventDefault();
     const { typing, activeUserId } = state;
     store.dispatch(sendMessage(typing, activeUserId));
     store.dispatch(setTypingValue(''));

   };

  return (
    <div className="w-full flex flex-col h-full" >
      <Header user={activeUser} />
      <Chats messages={_.values(messages)}  />
      <MessageInput onSubmit={handleSubmitMessage} />
    </div>
  );

};

export default ChatWindow;
