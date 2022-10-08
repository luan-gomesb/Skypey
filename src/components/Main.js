import Empty from './Empty';
import ChatWindow from '../container/ChatWindow';

const Main = ({user, activeUserId}) => {
 const renderMainContent = () => {
   if(!activeUserId){
     return <Empty user={user} activeUserId={activeUserId} />
   }else{
     return <ChatWindow activeUserId={activeUserId} />;
   }
 }

 return <main className="flex bg-gray-900 w-3/4 overflow-scroll ">
        {renderMainContent()} 
        </main>;
}
export default Main; 
