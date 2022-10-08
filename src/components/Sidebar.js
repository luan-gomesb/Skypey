import User from '../container/User';

const Sidebar =  ({contacts}) => {

  return <div className="bg-gray-800 overflow-y-scroll overflow-hidden min-w-85 w-1/3 h-full">
    {contacts.map((user) => <User key={user.user_id} user={user} />)}
    </div>;
}
export default Sidebar; 
