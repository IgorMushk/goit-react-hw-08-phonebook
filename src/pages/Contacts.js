import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Helmet } from 'react-helmet';
//import { TaskList } from 'components/TaskList/TaskList';
//import { TaskEditor } from 'components/TaskEditor/TaskEditor';
//import { fetchTasks } from 'redux/tasks/operations';
//import { selectLoading } from 'redux/tasks/selectors';
import { Container, Title, TitleList } from 'components/App.styled';
import ScrollToTop from 'react-scroll-to-top';
import { ContactForm } from 'components/ContactForrm/ContactForm';
import { FilterByName } from 'components/Filter/FilterByName';
//import { ToastContainer } from 'react-toastify';
import { Loader } from 'components/Loader/Loader';
import { getError, getIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { AiOutlineArrowUp } from 'react-icons/ai';

export default function Tasks() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

const dispatch = useDispatch();
const isLoading = useSelector(getIsLoading)
const error = useSelector(getError)

useEffect(() => {
 dispatch(fetchContacts());
}, [dispatch]);

  return (
    <Container>
      <ScrollToTop smooth style={{borderRadius: "50%"}} component={<p style={{ color: "gray", margin: "auto", borderRadius: "50%" }}><AiOutlineArrowUp size={24} /></p>} />
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleList>Contact</TitleList>
      {isLoading && <Loader/>}
      <FilterByName />
      {error ?  <h2>Oops... something went wrong. Please reload the page</h2> :  <ContactList />} 
    </Container>
  );
}

//const dispatch = useDispatch();
//const isLoading = useSelector(getIsLoading)
//const error = useSelector(getError)
//
//useEffect(() => {
//  dispatch(fetchContacts());
//}, [dispatch]);



//<>
//<Helmet>
//  <title>Your tasks</title>
//</Helmet>
//<TaskEditor />
//<div>{isLoading && 'Request in progress...'}</div>
//<TaskList />
//</>