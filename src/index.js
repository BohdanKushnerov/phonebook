import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ToggleColorMode from 'components/Theme/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleColorMode>
      <Provider store={store}>
        <App />
      </Provider>
    </ToggleColorMode>
  </React.StrictMode>
);
