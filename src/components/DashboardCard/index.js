import React from 'react';
import styled from 'styled-components';

const WrapperCard = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background: rgb(24, 44, 63);
  background: linear-gradient(
    180deg,
    rgba(24, 44, 63, 1) 0%,
    rgba(152, 202, 62, 1) 56%
  );
`;

const WrapperImg = styled.div``;

const TitleStats = styled.h1`
  font-size: 40px;

  margin: 20px;
  color: white;
`;

const ImgPhoto = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  object-fit: cover;
  margin: 20px;
`;

const Text = styled.p`
  margin: 20px;
  color: white;
  font-size: 24px;
  font-family: Babes, sans-serif;
`;

const Details = styled.p`
  margin: 20px;
  color: white;
  font-size: 16px;
  font-family: Babes, sans-serif;
`;
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
