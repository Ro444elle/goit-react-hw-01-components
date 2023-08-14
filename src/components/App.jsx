import React from 'react';
import Profile from './Profile/Profile';
import user from '../data/user.json';
import Statistics from './Statistics/Statistics';
import data from '../data/user.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Uploads stats" stats={data} id={data.id} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
