import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
// import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      {/* <button type="button" onClick={() => dispatch(logOut())}>
           Logout
      </button> */}
      {/* <Button variant="outlined" onClick={() => dispatch(logOut())}>Logout</Button> */}
      {/* <Button variant="outlined" onClick={() => dispatch(logOut())} style={{ backgroundColor: 'white', color: 'black', height: 35 }}>Logout</Button> */}
      <IconButton
          variant="contained"
          style={{
            backgroundColor: 'white',
            color: 'rgb(25, 118, 210)',
          }}
          onClick={() => dispatch(logOut())}
        >
          <RiLogoutBoxRLine />
        </IconButton>
    </div>
  );
};
