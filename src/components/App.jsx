import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import AppBar from './AppBar/AppBar';
import HomeView from 'views/HomeView/HomeView';
import LoginView from 'views/LoginView/LoginView';
import RegisterView from 'views/RegisterView/RegisterView';
import ContactsView from 'views/ContactsView/ContactsView';
import { refreshUser } from 'redux/auth/authOperations';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublickRoute } from './PublickRoute/PublickRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Container maxWidth="lr">
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeView />} />
          <Route
            path="/register"
            element={
              <PublickRoute
                exact
                path="/register"
                redirectTo="/contacts"
                restricted
              >
                <RegisterView />
              </PublickRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublickRoute
                exact
                path="/login"
                redirectTo="/contacts"
                restricted
              >
                <LoginView />
              </PublickRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute exact path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;

// import { ContactForm, ContactList, Filter } from '.';
// import { useDispatch, useSelector } from 'react-redux';
// import { filterContact } from 'redux/filter/filterSlice';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/operations';
// import { getContacts, getFilterState } from 'redux/selectors';

// const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(getContacts);
//   const filter = useSelector(getFilterState);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const checkedDupliteName = value => {
//     return contacts.some(
//       ({ name }) => name.toLowerCase() === value.toLowerCase()
//     );
//   };

//   const handleFilter = event => {
//     dispatch(filterContact(event.currentTarget.value));
//   };

//   const visibleFilter = contacts.filter(contact => {
//     return contact.name.toLowerCase().includes(filter.toLowerCase());
//   });

//   return (
//     <div
//       style={{
//         padding: '10px',
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         maxWidth: '400px',
//       }}
//     >
//       <h2>Phonebook</h2>
//       <ContactForm checkedDuplicate={checkedDupliteName} />

//       <h2>Contacts</h2>
//       <Filter onChange={handleFilter} />
//       <ContactList contacts={visibleFilter} />
//     </div>
//   );
// };

// export default App;
