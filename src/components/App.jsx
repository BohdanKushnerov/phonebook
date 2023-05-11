import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Phonebook from '../pages/Phonebook/Phonebook';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/phonebook" element={<Phonebook />} />
      </Route>
    </Routes>
  );
}
