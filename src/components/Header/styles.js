import styled from 'styled-components';

const WrapperHeader = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: #182c3f;
  display: flex;
  justify-content: space-between;
`;

const ImgLogo = styled.img`
  widht: 210px;
  height: 70px;
`;

const WrapperUser = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
`;

const ImgPhoto = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50px;
  object-fit: cover;
`;

const Name = styled.p`
  color: white;
  font-size: 24px;
  font-family: Babes, sans-serif;
  margin-left: 10px;
`;

export { WrapperHeader, ImgLogo, WrapperUser, ImgPhoto, Name };
