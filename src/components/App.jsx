import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Phonebook from '../pages/Phonebook/Phonebook';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authOperations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={Login} redirectTo="/phonebook" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={Register} redirectTo="/phonebook" />
            }
          />
          <Route
            path="/phonebook"
            element={<PrivateRoute component={Phonebook} redirectTo="/login" />}
          />
        </Route>
      </Routes>
    )
  );
}

// обработка помилок
// тост
// форми
// нав
// селекторы
// disable button когда пустые поля
