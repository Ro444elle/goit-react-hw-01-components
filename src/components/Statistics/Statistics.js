import React from 'react';
import data from '../../data/data.json';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics(id, label, percentage, title) {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={styles.statList}>
        {data.map(stat => (
          <li key={stat.id} className={styles.item}>
            <span
              className="label"
              style={{ backgroundColor: generateRandomColor() }}
            >
              {stat.label}
            </span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
