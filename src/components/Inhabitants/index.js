import React from 'react';

import { useInhabitants } from './hooks/useInhabitants';
import InhabitantsFilters from './InhabitantsFilters';
import InhabitantsList from './InhabitantsList';

const Inhabitants = () => {
  const {
    isLoading,
    isError,
    inhabitants,
    uniqProfessions,
    professionsSelected,
    setProfessionsSelected,
  } = useInhabitants();

  if (isLoading) {
    return (
      <div>Loading ...</div>
    );
  }

  if (isError) {
    return (
      <div>Something went wrong. Please try again later.</div>
    );
  }

  if (!inhabitants) {
    return (
      <div>No inhabitants data is available at the moment. Please revisit this page later.</div>
    );
  }

  return (
    <>
      <InhabitantsFilters
        uniqProfessions={uniqProfessions}
        professionsSelected={professionsSelected}
        setProfessionsSelected={setProfessionsSelected}
      />
      <InhabitantsList inhabitants={inhabitants} />
    </>
  );
}

export default Inhabitants;
