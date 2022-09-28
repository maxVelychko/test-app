import { useState, useMemo } from 'react';

import { useFetchData } from '../../../hooks/useFetchData';

export const useInhabitants = () => {
  const [professionsSelected, setProfessionsSelected] = useState([]);
  const {
    data,
    isLoading,
    isError,
  } = useFetchData('data.json');
  const inhabitantsData = data ? data.Brastlewark : data;

  const uniqProfessions = useMemo(
    () => {
      const professions = [];
      if (inhabitantsData) {
        inhabitantsData.forEach((inhabitant) => {
          inhabitant.professions.forEach(profession => {
            if (!professions.includes(profession)) professions.push(profession);
          });
        });
      }
      return professions;
    },
    [inhabitantsData]
  );

  const inhabitantsFiltered = useMemo(
    () => {
      if (professionsSelected.length) {
        return inhabitantsData.filter((inhabitantItem) => {
          for (let i = 0; i < inhabitantItem.professions.length; i++) {
            if (professionsSelected.includes(inhabitantItem.professions[i])) {
              return true;
            }
          }
          return false;
        });
      }
      return inhabitantsData;
    },
    [inhabitantsData, professionsSelected]
  );

  return {
    isLoading,
    isError,
    inhabitants: inhabitantsFiltered,
    uniqProfessions,
    professionsSelected,
    setProfessionsSelected,
  };
};
