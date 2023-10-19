import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Title, TitleList } from 'components/App.styled';
import ScrollToTop from 'react-scroll-to-top';
import { ContactForm } from 'components/ContactForrm/ContactForm';
import { FilterByName } from 'components/Filter/FilterByName';
import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { AiOutlineArrowUp } from 'react-icons/ai';
// import { Helmet } from 'react-helmet';

export default function Tasks() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <ScrollToTop
        smooth
        style={{ borderRadius: '50%' }}
        component={
          <p style={{ color: 'gray', margin: 'auto', borderRadius: '50%' }}>
            <AiOutlineArrowUp size={24} />
          </p>
        }
      />
      {/* <Helmet> */}
        <Title>Phonebook</Title>
      {/* </Helmet> */}
      <ContactForm />
      <TitleList>Contact</TitleList>
      {isLoading && <Loader />}
      <FilterByName />
      {error ? (
        <h2>Oops... something went wrong. Please reload the page</h2>
      ) : (
        <ContactList />
      )}
      <ToastContainer autoClose={1000} theme="colored" />
    </Container>
  );
}