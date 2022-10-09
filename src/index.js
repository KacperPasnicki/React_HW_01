import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile, UserData } from './components/exercise01/Profile';
import {Data, Statistics} from './components/exercise02/Statistics';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics title="Upload stats" stats={Data} />;
    
  </React.StrictMode>
);


