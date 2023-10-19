import { Container, Title, TitleList } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { FilterByName } from './Filter/FilterByName';
import { ContactForm } from './ContactForrm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader/Loader';
import { getError, getIsLoading } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from 'react-scroll-to-top';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
}
