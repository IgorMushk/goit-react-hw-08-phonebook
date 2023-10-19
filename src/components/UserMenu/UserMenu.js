import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
//   const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      {/* <p className={css.username}>Welcome, {user.name}</p> */}
      <p >Welcome </p>
      {/* <button type="button" onClick={() => dispatch(logOut())}> */}
     <button type="button" >
        Logout
      </button>
    </div>
  );
};