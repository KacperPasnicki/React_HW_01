import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from './components/exercise01/Profile'
import { UserData } from './components/exercise01/Profile'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>
);


