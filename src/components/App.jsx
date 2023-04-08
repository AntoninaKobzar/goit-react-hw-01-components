
import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.app_wrapper}>
      <Profile className={css.profile}/>
      <Statistics className={css.statistics}/>
      <FriendList className={css.friend_list}/>
      <TransactionHistory className={css.transaction_history}/>
    </div>  
  );
};
