import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendListItems from '../FriendListItem/FriendListItems';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItems
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
