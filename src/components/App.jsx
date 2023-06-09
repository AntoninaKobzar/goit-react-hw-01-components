
import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import css from './App.module.css';
import data from '../data/data.json'
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import user from '../data/user.json';

export const App = () => {
  return (
    <div className={css.app_wrapper}>
      <Profile username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title= "Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>  
  );
};

export default App;
