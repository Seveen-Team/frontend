import React from 'react';
import { Vacancies } from './styles';
import VacanteCard from '../../components/VacanteCard';

const index = () => {
  return (
    <Vacancies>
      {[0, 1, 2, 3, 4, 5].map((item, index) => (
        <VacanteCard key={index} />
      ))}
    </Vacancies>
  );
};

export default index;
