import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile, UserData } from './components/exercise01/Profile';

import {Data, Statistics} from './components/exercise02/Statistics';
import data from './components/exercise02/statistic.json';
import {FriendsList, friends} from './components/exercise03/FriendsList'
import transactions from './components/exercise04/Transactions.json'
import {TransactionsHistory} from  './components/exercise04/TransactionsHistory'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
    <Statistics title="Upload stats" stats={data} />
    <FriendsList friends={friends} />
    <TransactionsHistory items={transactions} />
  </React.StrictMode>
);


