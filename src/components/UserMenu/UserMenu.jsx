import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const { user } = useAuth();
  // useSelector(state => console.log(state));
  const name = useSelector(state => state.auth.user.name);

  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};