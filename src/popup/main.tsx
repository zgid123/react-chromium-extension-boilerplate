import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './index.css';

import { App } from '~/popup/App';

const container = document.getElementById('root');

if (!container) {
  // eslint-disable-next-line no-throw-literal
  throw 'Cannot find the root element';
}

const root = createRoot(container);

root.render(
  <StrictMode>
    <ToastContainer />
    <App />
  </StrictMode>,
);
