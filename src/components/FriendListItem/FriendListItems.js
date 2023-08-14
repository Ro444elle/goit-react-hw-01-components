import React from 'react';
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export default function FriendListItems({ avatar, name, isOnline, id }) {
  const statusClassName = isOnline ? styles.online : styles.offline;

  return (
    <li className={styles.item}>
      <span className={`${styles.status} ${statusClassName}`} />
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="50"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
