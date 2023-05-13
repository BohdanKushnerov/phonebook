import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserMenuBtn } from './UserMenu.styled';
// import { Typography } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const name = useSelector(state => state.auth.user.name);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        gap: 4,
        alignItems: 'center',
      }}
    >
      <p>
        Welcome, <b>{name}</b>
      </p>
      <UserMenuBtn
        type="button"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </UserMenuBtn>
    </div>
  );
};
