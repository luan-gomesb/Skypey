const Empty = ({user, activeUserId}) => {
  const {name, profile_pic, status} = user;
  return <div className='w-full h-full flex flex-col justify-items-center justify-center ' >
    <h1 className="text-white text-xl">{name.split(" ")[0]}</h1>
    <img  className="w-80 h-80 mx-auto rounded-full m-5"   src={profile_pic} alt={name} />
    <span className="p-4"><b>Status: </b>{status}</span>
    <button className="p-4 my-4 mx-auto font-bold text-lg rounded-full border-2 border-rounded hover:opacity-70">Start a conversation</button>
    <p className="p-4">
        Search for someone to start chatting with or go to Contacts
        to see who
        is available
      </p>
  </div>
}
export default Empty;
