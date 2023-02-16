import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/selectors';
import { logout } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <div>
      <p>Welcome,{name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
