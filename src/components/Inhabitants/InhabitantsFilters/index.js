import React from 'react';

import styles from './InhabitantsFilters.module.css';

const InhabitantsFilters = ({
  uniqProfessions,
  professionsSelected,
  setProfessionsSelected,
}) => {
  const handleProfessionClick = (profession) => {
    const professionsSelectedNew = [...professionsSelected];
    const professionIndex = professionsSelectedNew.indexOf(profession);
    if (professionIndex === -1) {
      professionsSelectedNew.push(profession);
    } else {
      professionsSelectedNew.splice(professionIndex, 1);
    }
    setProfessionsSelected(professionsSelectedNew);
  };

  const handleClearFiltersClick = () => {
    setProfessionsSelected([]);
  };

  return (
    <>
      <button
        className={styles.clearFilters}
        onClick={handleClearFiltersClick}
      >
        Clear all
      </button>
      <h3>Professions</h3>
      <ul className={styles.optionsList}>
        {uniqProfessions.map((profession) => {
          const isProfessionSelected = professionsSelected.includes(profession);
          const professionButtonClasses = `${styles.professionButton} ${isProfessionSelected ? styles.selected : ''}`;
          return (
            <li key={profession}>
              <button
                className={professionButtonClasses}
                onClick={() => handleProfessionClick(profession)}
              >
                {profession}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default InhabitantsFilters;
