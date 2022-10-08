import store from '../store';
import  {setTypingValue, sendMessage } from '../actions';

 const MessageInput = ({ onSubmit }) => {
   const state = store.getState(); 
   const { typing } = state;

   const handleChange = (e) => {
    store.dispatch(setTypingValue(e.target.value));
   }

      return (
     <div>
     <form onSubmit={onSubmit} className='w-full'>
     <input 
     className='bg-black w-[80%] text-white text-xl my-4 rounded-[10px]  p-3 mr-4 float-right '
     type="text"
     value={typing}
     onChange={handleChange}
     placeholder="Send a message"/>
     </form>
     </div>
   )
}

export default MessageInput;
