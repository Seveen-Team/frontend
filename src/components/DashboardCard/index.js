import React from 'react';
import {
  Details,
  Text,
  ImgPhoto,
  TitleStats,
  WrapperImg,
  WrapperCard,
} from './styles';
const DashboardCard = () => {
  const PhotoProfile =
    'https://firebasestorage.googleapis.com/v0/b/platzi-master-21d21.appspot.com/o/Assets%2Fhero.jpg?alt=media&token=e4b8cefe-ca98-42d5-aba7-1521e715edf6';

  return (
    <WrapperCard>
      <TitleStats>Talent Placemant Stats</TitleStats>
      <WrapperImg>
        <ImgPhoto src={PhotoProfile} />
      </WrapperImg>
      <Text>
        Conose tu último mes de aplicaciones a vacantes
        <br />
        Recuerda: Lo que mides, lo puedes mejorar!
      </Text>
      <Details>
        Aplicaciones activas, stacks de tecnologías, feedbacks y mucho más
      </Details>
    </WrapperCard>
  );
};

export default DashboardCard;
