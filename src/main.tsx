import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import '@radix-ui/themes/styles.css';
import './theme-config.css';

import { Theme } from '@radix-ui/themes';

import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <Theme>
      <App />
    </Theme>
  </StrictMode>
);
