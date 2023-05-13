import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import ToggleColorMode from 'styles/theme/Theme';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleColorMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="goit-react-hw-08-phonebook">
            <App />
            <ToastContainer autoClose={3000} position="top-center" />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ToggleColorMode>
  </React.StrictMode>
);
