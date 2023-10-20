import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { FaBlenderPhone } from 'react-icons/fa';
import css from './Navigation.module.css';

export const Navigation = () => {
   const { isLoggedIn } = useAuth();

  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: '10px'}}>
      <NavLink className={css.link} to="/" style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
      <FaBlenderPhone size={28} color="white"/>
        <span>Home</span> 
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
