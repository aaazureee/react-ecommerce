import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { configureStore } from './store';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.component';

const store = configureStore();

ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      bodyStyle={{
        padding: '10px 5px',
        color: 'rgba(0, 0, 0, 0.8)',
      }}
    />
  </>,
  document.getElementById('root')
);
