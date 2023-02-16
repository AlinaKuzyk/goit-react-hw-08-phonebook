import { useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';

const UserMenu = () => {
  const name = useSelector(getUserName);
  return (
    <div>
      <p>Welcome,{name}</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
