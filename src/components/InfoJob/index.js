import React from 'react';
import ReactDOM from 'react-dom';
import {
  Modal,
  CardHeader,
  CardBody,
  CardFooter,
  Content,
  CloseButton,
  Icon,
  Title,
  RightSection,
  LeftSection,
  CardLabels,
  Subtitle,
  Pa,
  Strong,
  Button
} from './styles';
import Label from '../Label';

const InfoJob = ({ onClose, description, language, location, modality, profile, requirements, title, url }) => {
  return ReactDOM.createPortal(
    <Modal>
      <Content>
        <CardHeader>
          <Title>{title}</Title>
          <CloseButton type='button' onClick={onClose}>
            <Icon />
          </CloseButton>
        </CardHeader>
        <CardBody>
          <RightSection>
            <CardLabels>
              <Label data='Platzi master' color='#98CA3E' />
              <Label data={profile} color='#294259' letter='#fff' />
              <Label data={language} color='#D31919' letter='#fff' />
              <Label data={location} color='#F4E135' />
              <Label data={modality} color='#A0E9CA' />
              <Label data='1 año' color='#FAB473' />
              <Label data='1000 USD' color='#05C2FE' />
            </CardLabels>
            <Pa>
              <Strong>Empresa: &nbsp;</Strong>
              {description}
            </Pa>
            <Pa>
              <Strong>Sitio web: &nbsp;</Strong>
              {url}
            </Pa>
          </RightSection>
          <LeftSection>
            <Subtitle>Requisitos tècnicos</Subtitle>
            <Pa>
              <Strong>Requerimientos: &nbsp;</Strong>
              {requirements}
            </Pa>
          </LeftSection>
        </CardBody>
        <CardFooter>
          <Button
            type='button'           
          >
            Agregar a interesados
          </Button>
        </CardFooter>
      </Content>
    </Modal>,
    document.getElementById('modal')
  );
}

export default InfoJob;