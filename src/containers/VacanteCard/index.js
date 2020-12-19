import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Variables from '../../styles/vars';
import Label from '../../components/Label';
import InfoJob from '../InfoJob';
import {
  WrapperCard,
  CardHeader,
  Title,
  CardLabels,
  CardBody,
  Pa,
  Strong,
  CardFooter,
  Button
} from './styles';

const VacanteCard = ({ id, description, language, location, modality, profile, requirements, title, url }) => {
  const [modal, setModal] = useState({
    isOpen: false,
  });
  return (
    <>
      <ThemeProvider theme={Variables}>
        <WrapperCard>
          <CardHeader>
            <Title>{title}</Title>
          </CardHeader>
          <CardLabels>
            <Label data='Platzi master' color='#98CA3E' />
            <Label data={profile} color='#294259' letter='#fff' />
            <Label data={language} color='#D31919' letter='#fff' />
            <Label data={location} color='#F4E135' />
            <Label data={modality} color='#A0E9CA' />
            <Label data='1 año' color='#FAB473' />
            <Label data='1000 USD' color='#05C2FE' />
          </CardLabels>
          <CardBody>
            <Pa>
              <Strong>Empresa: &nbsp;</Strong>
              {description}
            </Pa>
            <Pa>
              <Strong>Requerimientos: &nbsp;</Strong>
              {requirements}
            </Pa>
            <Pa>
              <Strong>Sitio web: &nbsp;</Strong>
              {url}
            </Pa>
            <Pa>
              <Strong>Empresa: &nbsp;</Strong>
              {description}
            </Pa>
            <Pa>
              <Strong>Requerimientos: &nbsp;</Strong>
              {requirements}
            </Pa>
            <Pa>
              <Strong>Sitio web: &nbsp;</Strong>
              {url}
            </Pa>
            <Pa>
              <Strong>Empresa: &nbsp;</Strong>
              {description}
            </Pa>
            <Pa>
              <Strong>Requerimientos: &nbsp;</Strong>
              {requirements}
            </Pa>
            <Pa>
              <Strong>Sitio web: &nbsp;</Strong>
              {url}
            </Pa>
          </CardBody>
          <CardFooter>
            <Button
              type='button'
              onClick={() => setModal({isOpen: true})}
              
            >
              Ver mas
            </Button>
            {modal.isOpen && (
              <InfoJob
                id={id}
                description={description}
                language={language}
                location={location}
                modality={modality}
                profile={profile}
                requirements={requirements}
                title={title}
                url={url}
                onClose={() => setModal({isOpen: false})} 
              />
            )}
          </CardFooter>
        </WrapperCard>
      </ThemeProvider>
    </>
  );
};

export default VacanteCard;
