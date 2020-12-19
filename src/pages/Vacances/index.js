import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Vacancies, Title } from './styles';
import VacanteCard from '../../containers/VacanteCard';
import { fetchVacancies } from '../../actions/vacanciesAction';

const Vacances = () => {
  const distpatch = useDispatch();
  const vacancies = useSelector((state => state.vacanciesReducer));

  useEffect(() => {
    distpatch(fetchVacancies());
  }, []);

  return (
    <>
      <Title>Vacantes</Title>
      <Vacancies>
        {
          vacancies.vacancies &&
            vacancies.vacancies.map(vacancie => {
              const { description, language, location, modality, profile, requirements, title, url } = vacancie;
              return(
                <VacanteCard
                  key={vacancie._id}
                  id={vacancie._id}
                  description={description}
                  language={language}
                  location={location}
                  modality={modality}
                  profile={profile}
                  requirements={requirements}
                  title={title}
                  url={url}
                />
              );
            })
        }
      </Vacancies>
    </>
  );
};

export default Vacances;
