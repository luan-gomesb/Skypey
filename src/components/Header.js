
const Header = ({ user }) => {
  if (!user) return null;
  return (<div className='text-start border-b-2 border-b-gray-700 w-full p-6'>
    <h1 className="pt-5 text-4xl font-bold">{user.name}</h1>
    <p className=''>{user.status}</p>
  </div>
  )
}
export default Header;
