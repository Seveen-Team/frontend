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
  margin: 0;
`;

const WrapperImg = styled.div``;

const TitleStats = styled.h1`
  font-size: 34px;
  font-family: Babes, sans-serif;
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
  margin: 16px;
  color: white;
  font-size: 20px;
  font-family: Babes, sans-serif;
`;

const Details = styled.p`
  margin: 20px;
  color: white;
  font-size: 16px;
  font-family: Babes, sans-serif;
`;

export { Details, Text, ImgPhoto, TitleStats, WrapperImg, WrapperCard };
