import React from 'react';

import styles from './InhabitantsList.module.css';

const InhabitantsList = ({ inhabitants }) => {
  return (
    <>
      <h3>Inhabitants</h3>
      <ul className={styles.inhabitantsList}>
        {inhabitants.map((inhabitantData) => {
          return (
            <li
              key={inhabitantData.id}
              className={styles.inhabitantListItem}
            >
              <img
                src={inhabitantData.thumbnail}
                className={styles.inhabitantImage}
                alt="inhabitant"
              />
              <div className={styles.inhabitantDetails}>
                <span>Name: {inhabitantData.name}</span>
                <span>Age: {inhabitantData.age}</span>
              </div>
            </li>
        )
      })
      }
      </ul>
    </>
  );
}

export default InhabitantsList;
