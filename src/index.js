import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile, UserData } from './components/exercise01/Profile';
import {Data, Statistics} from './components/exercise02/Statistics';
import {FriendsList, friends} from './components/exercise03/FriendsList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics title="Upload stats" stats={Data} />
    <FriendsList friends={friends} />
  </React.StrictMode>
);


