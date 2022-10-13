import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile} from './components/exercise01/Profile';
import user from './components/exercise01/user.json'
import {Statistics} from './components/exercise02/Statistics';
import data from './components/exercise02/statistic.json';
import {FriendsList} from './components/exercise03/FriendsList'
import friends from './components/exercise03/friends.json'
import transactions from './components/exercise04/Transactions.json'
import {TransactionsHistory} from  './components/exercise04/TransactionsHistory'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App>
    <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}/>
    <Statistics title="Upload stats" stats={data} />
    <FriendsList friends={friends} />
    <TransactionsHistory items={transactions} />
    </App> 
  </React.StrictMode>
);


