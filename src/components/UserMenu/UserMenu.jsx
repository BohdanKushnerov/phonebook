import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserMenuBtn } from './UserMenu.styled';
import { getAuthName } from 'redux/auth/authSelectors';
// import { Typography } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();

  // const name = useSelector(state => state.auth.user.name);
  const name = useSelector(getAuthName);

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
