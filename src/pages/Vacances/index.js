import React from 'react';
import { Vacancies } from './styles';

const index = () => {
  return (
    <Vacancies>
      {[0, 1, 2, 3, 4, 5].map((item, index) => (
        <div key={index}>
          <h1>Hello</h1>
        </div>
      ))}
    </Vacancies>
  );
};

export default index;
