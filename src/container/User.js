import store from "../store";
import { setActiveUser, deleteContact } from '../actions';

const User = ({ user }) => {

  const { profile_pic, name, status } = user;

  const handleUserClick = (u) => {
    store.dispatch(setActiveUser(u.user_id));
  }

  const handleCrossClick = (e, user_id) => {
    e.stopPropagation();
    const { activeUserId } = store.getState();
    store.dispatch(deleteContact(user_id));
    if (activeUserId == user_id) {
      store.dispatch(setActiveUser(null));
    }
  }

  return (
    <div className="bg-gray-800 flex items-start p-1  hover:bg-black hover:opacity-2 hover:cursor-pointer"
      onClick={() => handleUserClick(user)}>
      <p className="User__closeIcon" onClick={(e) => handleCrossClick(e, user.user_id)}> X </p>
      <img src={profile_pic} alt={name} className="w-50 rounded-full" />
      <div className=" sm:p-4 sm:m-0 sm:opacity-8 overflow-hidden  hover:text-clip" >
        <p><strong>{name}</strong></p>
        <p className="truncate ... hover:text-clip">{status}</p>
      </div>
    </div>
  )
}

export default User;
